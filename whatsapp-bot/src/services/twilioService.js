const twilio = require('twilio');

// Inicializar cliente de Twilio
let client = null;

function getClient() {
  if (!client) {
    const accountSid = process.env.TWILIO_ACCOUNT_SID;
    const authToken = process.env.TWILIO_AUTH_TOKEN;

    if (!accountSid || !authToken) {
      throw new Error('TWILIO_ACCOUNT_SID y TWILIO_AUTH_TOKEN son requeridos');
    }

    client = twilio(accountSid, authToken);
  }
  return client;
}

/**
 * Envía un mensaje de WhatsApp proactivo (fuera de webhook).
 * Usado por los recordatorios y notificaciones programadas.
 *
 * IMPORTANTE: Solo funciona dentro de la ventana de 24 horas de Twilio,
 * o usando plantillas aprobadas para mensajes fuera de ventana.
 *
 * @param {string} to - Número destino en formato 'whatsapp:+1234567890'
 * @param {string} body - Texto del mensaje
 */
async function sendMessage(to, body) {
  const from = process.env.TWILIO_PHONE_NUMBER;

  if (!from) {
    throw new Error('TWILIO_PHONE_NUMBER no está configurado');
  }

  console.log(`📤 Enviando mensaje WhatsApp a ${to}: ${body.substring(0, 50)}...`);

  const message = await getClient().messages.create({
    from,
    to,
    body,
  });

  console.log(`✅ Mensaje enviado. SID: ${message.sid}`);
  return message;
}

/**
 * Envía un recordatorio formateado.
 * @param {string} to - Número destino
 * @param {string} reminderMessage - Mensaje del recordatorio
 */
async function sendReminder(to, reminderMessage) {
  const body = `⏰ *Recordatorio*\n\n${reminderMessage}\n\n_Enviado por Notion LATAM Bot_`;
  return await sendMessage(to, body);
}

module.exports = {
  sendMessage,
  sendReminder,
};
