# Deploy en Railway — Guia completa

Railway es la forma mas facil de hacer deploy de este bot. Tiene un plan gratuito generoso y deploy automatico desde GitHub.

---

## 1. Preparar el repositorio en GitHub

Si aun no tienes el codigo en GitHub:

```bash
cd whatsapp-bot
git init
git add .
git commit -m "feat: initial whatsapp bot setup"
gh repo create notion-whatsapp-bot --public --push
```

O usando la interfaz de GitHub para crear el repo y luego hacer push.

---

## 2. Crear cuenta en Railway

1. Ve a [railway.app](https://railway.app)
2. Haz clic en **"Start a New Project"**
3. Autenticate con tu cuenta de GitHub
4. Acepta los permisos solicitados

El plan gratuito ("Starter") incluye $5 USD de credito mensual, suficiente para ~500 horas de uso continuo.

---

## 3. Crear nuevo proyecto

1. En el Dashboard de Railway, haz clic en **"New Project"**
2. Selecciona **"Deploy from GitHub repo"**
3. Busca y selecciona tu repositorio `notion-whatsapp-bot`
4. Railway detectara automaticamente que es un proyecto Node.js
5. Haz clic en **"Deploy Now"**

Railway iniciara el primer deploy automaticamente. Podras ver los logs en tiempo real.

---

## 4. Configurar variables de entorno

Una vez creado el proyecto:

1. Haz clic en el servicio en el Dashboard
2. Ve a la pestana **"Variables"**
3. Agrega cada variable de entorno:

```
TWILIO_ACCOUNT_SID     = ACxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
TWILIO_AUTH_TOKEN      = xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
TWILIO_PHONE_NUMBER    = whatsapp:+14155238886
NOTION_API_KEY         = secret_xxxxxxxxxxxxxxxxxxxxxxxx
NOTION_TASKS_DB_ID     = xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
NODE_ENV               = production
ALLOWED_NUMBERS        = whatsapp:+56912345678
```

4. Railway hara un redeploy automatico al guardar las variables

---

## 5. Obtener el dominio publico

1. En el servicio, ve a la pestana **"Settings"**
2. En la seccion **"Networking"**, haz clic en **"Generate Domain"**
3. Railway te dara una URL como: `notion-whatsapp-bot-production.up.railway.app`

Esta es la URL que pondras en el webhook de Twilio:
```
https://notion-whatsapp-bot-production.up.railway.app/webhook
```

### Custom Domain (opcional)

Si quieres un dominio propio:
1. En **"Settings" > "Networking" > "Custom Domain"**
2. Ingresa tu dominio: `bot.tudominio.com`
3. Railway te dara los registros DNS a configurar en tu proveedor
4. Espera la propagacion DNS (5-30 minutos)

---

## 6. Configurar el webhook en Twilio

Con la URL de Railway lista:

1. Ve a [console.twilio.com](https://console.twilio.com)
2. **Messaging > Try it out > Send a WhatsApp message**
3. En **"Sandbox Configuration"**:
   - When a message comes in: `https://tu-url.railway.app/webhook`
   - Metodo: `HTTP POST`
4. Guardar

---

## 7. Verificar el deploy

### Health check
Abre en el navegador:
```
https://tu-url.railway.app/
```

Deberias ver:
```json
{
  "status": "ok",
  "service": "Notion LATAM WhatsApp Bot",
  "version": "1.0.0",
  "uptime": 123.45,
  "timestamp": "2025-04-07T10:00:00.000Z"
}
```

### Prueba con WhatsApp
Envia `/ayuda` al numero del sandbox y deberias recibir la lista de comandos.

---

## 8. Monitoreo y logs

### Ver logs en tiempo real
En el Dashboard de Railway:
1. Haz clic en el servicio
2. Ve a la pestana **"Deployments"**
3. Haz clic en el ultimo deploy
4. **"View Logs"** para ver logs en tiempo real

### Alertas de error
Railway puede enviar emails cuando el servicio se cae:
1. **Settings > Notifications**
2. Activa las alertas de "Service crashed"

---

## 9. Deploy automatico

Railway hace deploy automatico en cada push a `main`:

```bash
# Cualquier cambio se despliega automaticamente
git add .
git commit -m "fix: mejorar parser de fechas"
git push origin main
# Railway detecta el push y hace deploy en ~1 minuto
```

Para desactivar el auto-deploy:
- **Settings > Source > Auto-Deploy**: Desactivar

---

## Alternativa: Deploy en Render

Si prefieres Render sobre Railway:

1. Ve a [render.com](https://render.com) y crea cuenta
2. **New > Web Service**
3. Conecta tu repo de GitHub
4. Configura:
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
   - **Environment:** Node
5. Agrega las variables de entorno
6. El plan gratuito tiene limitacion de "sleep" (hiberna tras 15 min de inactividad)
   - Para bots, considera el plan Starter ($7/mes) que no hiberna

---

## Posibles problemas en deploy

### "npm install failed"
- Verifica que `package.json` este bien formado
- Revisa que todas las dependencias esten listadas

### "Port already in use" o no responde
- Railway asigna el puerto via variable `PORT`
- El codigo ya usa `process.env.PORT || 3001`, no hagas cambios

### "Service keeps crashing"
- Revisa los logs para ver el error especifico
- Probablemente sea una variable de entorno faltante o incorrecta

### Health check falla
- Railway verifica que el servicio responda en `/`
- El codigo ya tiene el endpoint GET / que responde con JSON
