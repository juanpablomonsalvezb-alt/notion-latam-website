require('dotenv').config();
const express = require('express');
const { MessagingResponse } = require('twilio').twiml;
const commandHandler = require('./handlers/commandHandler');
const reminderService = require('./services/reminderService');

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Middleware de validación de número permitido
function validarNumero(req, res, next) {
  const allowedNumbers = process.env.ALLOWED_NUMBERS
    ? process.env.ALLOWED_NUMBERS.split(',').map(n => n.trim())
    : [];

  const from = req.body.From;

  // Si no hay whitelist configurada, permitir todos
  if (allowedNumbers.length === 0) {
    return next();
  }

  if (!from || !allowedNumbers.includes(from)) {
    console.log(`🚫 Número no autorizado intentó acceder: ${from}`);
    const twiml = new MessagingResponse();
    twiml.message('⛔ No tienes autorización para usar este bot.');
    res.writeHead(200, { 'Content-Type': 'text/xml' });
    return res.end(twiml.toString());
  }

  next();
}

// Webhook principal de Twilio
app.post('/webhook', validarNumero, async (req, res) => {
  const twiml = new MessagingResponse();
  const message = req.body.Body?.trim();
  const from = req.body.From;

  console.log(`📩 Mensaje recibido de ${from}: ${message}`);

  try {
    const response = await commandHandler.handle(message, from);
    twiml.message(response);
  } catch (error) {
    console.error('❌ Error procesando mensaje:', error);
    twiml.message('❌ Error procesando tu mensaje. Intenta de nuevo.');
  }

  res.writeHead(200, { 'Content-Type': 'text/xml' });
  res.end(twiml.toString());
});

// Health check
app.get('/', (req, res) => {
  res.json({
    status: 'ok',
    service: 'Notion LATAM WhatsApp Bot',
    version: '1.0.0',
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
  });
});

// Iniciar servidor
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`🤖 Notion LATAM Bot corriendo en puerto ${PORT}`);
  console.log(`📋 Webhook disponible en: http://localhost:${PORT}/webhook`);
  console.log(`🏥 Health check en: http://localhost:${PORT}/`);

  // Inicializar servicio de recordatorios
  reminderService.init();
  console.log('⏰ Servicio de recordatorios iniciado');
});

module.exports = app;
