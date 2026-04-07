# Setup Twilio — Guia completa

## 1. Crear cuenta en Twilio

1. Ve a [twilio.com/try-twilio](https://www.twilio.com/try-twilio)
2. Crea tu cuenta gratuita con email y contrasena
3. Verifica tu numero de telefono real (necesario para el sandbox)
4. Completa el onboarding (puedes omitir las preguntas opcionales)

El plan gratuito te da $15 USD en credito, suficiente para miles de mensajes de prueba.

---

## 2. Obtener credenciales de la API

1. Ve a [console.twilio.com](https://console.twilio.com)
2. En el **Dashboard principal**, encontraras:
   - **Account SID:** Empieza con `AC` (32 caracteres)
   - **Auth Token:** Haz clic en el ojo para ver el token

Copia ambos y guardalos en tu `.env`:

```env
TWILIO_ACCOUNT_SID=ACxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
TWILIO_AUTH_TOKEN=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

---

## 3. Activar el WhatsApp Sandbox

El Sandbox de WhatsApp te permite probar el bot sin necesitar un numero de WhatsApp Business aprobado.

1. En el menu lateral: **Messaging > Try it out > Send a WhatsApp message**
2. Veras instrucciones para activar el sandbox:
   - El numero del sandbox es: `+1 415 523 8886`
   - Debes enviar un mensaje de activacion desde tu WhatsApp personal
   - El mensaje es del tipo: `join [palabra-palabrA]`
3. Abre WhatsApp en tu telefono y envia ese mensaje al numero indicado
4. Deberias recibir una confirmacion del sandbox

El numero del sandbox en formato env es:
```env
TWILIO_PHONE_NUMBER=whatsapp:+14155238886
```

---

## 4. Configurar el webhook en Twilio

Una vez que tu bot este corriendo (localmente con ngrok, o en Railway/Render):

1. En el menu: **Messaging > Try it out > Send a WhatsApp message**
2. Busca la seccion **"Sandbox Configuration"**
3. En el campo **"When a message comes in"**:
   - Pega tu URL: `https://tu-bot.railway.app/webhook`
   - Metodo: `HTTP POST`
4. Haz clic en **"Save"**

### Para desarrollo local con ngrok

Si estas probando localmente, necesitas exponer tu puerto con ngrok:

```bash
# Instalar ngrok (si no lo tienes)
brew install ngrok   # macOS
# o descarga desde ngrok.com

# Exponer el puerto local
ngrok http 3001
```

ngrok te dara una URL como `https://abc123.ngrok.io`. Usa esa URL en el webhook:
```
https://abc123.ngrok.io/webhook
```

**Nota:** La URL de ngrok cambia cada vez que lo reinicias en el plan gratuito. Para development estable, usa Railway.

---

## 5. Numeros para testing

### Agregar numeros al sandbox

Por defecto, cualquier numero que haya enviado el mensaje de activacion puede usar el sandbox.

Para restringir el acceso al bot, usa la variable `ALLOWED_NUMBERS` en tu `.env`:

```env
# Tu numero y el de tu equipo (formato internacional con prefijo whatsapp:)
ALLOWED_NUMBERS=whatsapp:+56912345678,whatsapp:+56987654321
```

Si `ALLOWED_NUMBERS` esta vacio, cualquier numero que este en el sandbox puede usar el bot.

### Formato de numeros

Los numeros siempre deben incluir:
- Prefijo `whatsapp:`
- Codigo de pais sin ceros a la izquierda

Ejemplos:
```
Chile:     whatsapp:+56912345678
Mexico:    whatsapp:+5215512345678
Colombia:  whatsapp:+573001234567
Argentina: whatsapp:+5491112345678
```

---

## 6. Limitaciones del Sandbox

El Sandbox de Twilio tiene algunas limitaciones que desaparecen con un numero WhatsApp Business aprobado:

- **Ventana de 24 horas:** Solo puedes enviar mensajes proactivos (como recordatorios) dentro de las 24 horas despues del ultimo mensaje del usuario
- **Sin plantillas:** No puedes enviar plantillas de mensajes aprobadas por Meta
- **Maximo de sesiones:** Limitado a las sesiones activas del sandbox

Para produccion, considera adquirir un numero de WhatsApp Business en Twilio (~$5/mes).

---

## 7. Monitorear mensajes

Puedes ver todos los mensajes enviados y recibidos en:
- [console.twilio.com/monitor/logs/sms](https://console.twilio.com/monitor/logs/sms)
- O en el **Activity Log** del Dashboard

Esto es util para debugging cuando el bot no responde como se espera.

---

## Posibles errores

### "Authentication Error"
- Verifica que `TWILIO_ACCOUNT_SID` y `TWILIO_AUTH_TOKEN` sean correctos
- El Auth Token puede regenerarse, verifica que uses el actual

### "Sandbox number not active"
- Puede que el sandbox haya expirado (expira si no se usa por varios dias)
- Re-activa enviando el mensaje de activacion nuevamente desde tu WhatsApp

### "Webhook not receiving messages"
- Verifica que el webhook este configurado con la URL correcta en Twilio
- Asegurate de que tu servidor este corriendo y accessible desde internet
- Revisa que el endpoint sea `POST /webhook`, no `GET /`

### "Message not delivered"
- Si hay error 63016 ("Message not delivered"): el usuario debe ser parte del sandbox
- Verifica que el numero destino haya enviado el mensaje de activacion al sandbox
