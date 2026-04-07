# Notion LATAM WhatsApp Bot

Bot de WhatsApp para gestionar tu base de datos de Notion directamente desde WhatsApp. Crea tareas, consulta pendientes, completa items y configura recordatorios — todo sin salir de WhatsApp.

---

## Descripcion

Este bot conecta WhatsApp (via Twilio) con Notion (via API oficial) para que puedas gestionar tus tareas en lenguaje natural desde cualquier chat. Esta optimizado para español latinoamericano y tiene soporte para:

- Crear tareas con fechas en lenguaje natural ("mañana", "el lunes", "15 marzo")
- Listar tareas con filtros (hoy, esta semana, urgentes, por proyecto)
- Marcar tareas como completadas por número o nombre
- Programar recordatorios que llegan por WhatsApp
- Organizar tareas por proyectos con hashtags (#trabajo, #personal)

---

## Requisitos previos

- Node.js 18 o superior
- Cuenta en [Twilio](https://twilio.com) (plan gratuito funciona para pruebas)
- Cuenta en [Notion](https://notion.so) con acceso a Integrations
- Una base de datos de Notion con las propiedades configuradas (ver abajo)

---

## Setup paso a paso

### Paso 1 — Clonar y preparar el proyecto

```bash
git clone <repo-url>
cd whatsapp-bot
npm install
cp .env.example .env
```

### Paso 2 — Configurar Notion

Sigue la guia completa en `docs/setup-notion.md`. Necesitas:
1. Crear una Integration en [notion.so/my-integrations](https://notion.so/my-integrations)
2. Obtener el API key de la integration
3. Crear la base de datos de tareas con las propiedades requeridas
4. Dar acceso a la integration en tu base de datos
5. Copiar el ID de la base de datos

### Paso 3 — Configurar Twilio

Sigue la guia completa en `docs/setup-twilio.md`. Necesitas:
1. Crear cuenta en Twilio
2. Activar el WhatsApp Sandbox
3. Guardar tu Account SID y Auth Token

### Paso 4 — Configurar variables de entorno

Edita el archivo `.env` con tus credenciales:

```env
TWILIO_ACCOUNT_SID=ACxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
TWILIO_AUTH_TOKEN=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
TWILIO_PHONE_NUMBER=whatsapp:+14155238886

NOTION_API_KEY=secret_xxxxxxxxxxxxxxxxxxxxxxxxxxxxx
NOTION_TASKS_DB_ID=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

PORT=3001
```

### Paso 5 — Iniciar el bot

```bash
# Modo desarrollo (con auto-reload)
npm run dev

# Modo produccion
npm start
```

El bot estara disponible en `http://localhost:3001/webhook`

---

## Como obtener las credenciales

### Twilio

1. Ve a [console.twilio.com](https://console.twilio.com)
2. En la pagina principal, copia el **Account SID** y **Auth Token**
3. Para WhatsApp Sandbox: ve a **Messaging > Try it out > Send a WhatsApp message**
4. Sigue las instrucciones del sandbox (enviar un mensaje de activacion)
5. El numero del sandbox es: `+1 415 523 8886`

### Notion

1. Ve a [notion.so/my-integrations](https://notion.so/my-integrations)
2. Crea una nueva integration ("Notion LATAM Bot")
3. Copia el **Internal Integration Token** (empieza con `secret_`)
4. En tu base de datos de Notion: **... > Add connections > tu integration**
5. El ID de la DB esta en la URL: `notion.so/xxxxx/`**`xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`**`?v=...`

---

## Comandos disponibles

### `/tarea [descripcion] [fecha opcional]`
Crea una nueva tarea en Notion.

```
/tarea Revisar el contrato
/tarea Llamar al cliente mañana
/tarea Enviar propuesta el lunes #trabajo
/tarea Pagar factura 15 marzo
/tarea Reunion importante en 2 horas
```

### `/lista [filtro opcional]`
Muestra tus tareas pendientes.

```
/lista              → ultimas 10 pendientes
/lista hoy          → tareas de hoy
/lista esta semana  → proximos 7 dias
/lista urgente      → prioridad alta
/lista completadas  → tareas completadas
```

### `/completar [numero o nombre]`
Marca una tarea como completada.

```
/completar 3                → tarea numero 3 de la lista
/completar Llamar a Maria   → busca por nombre
```

### `/recordatorio [mensaje] [cuando]`
Programa un recordatorio que llega por WhatsApp.

```
/recordatorio Llamar al medico en 2 horas
/recordatorio Reunion con equipo mañana 9am
/recordatorio Pagar renta el viernes
/recordatorio Revisar correos en 30 minutos
```

### `/proyecto [nombre opcional]`
Gestiona proyectos.

```
/proyecto           → ver todos los proyectos
/proyecto trabajo   → tareas del proyecto "trabajo"
/proyecto personal  → tareas del proyecto "personal"
```

### `/ayuda`
Muestra todos los comandos con ejemplos.

### Mensaje libre
Si escribes sin comando, el bot te preguntara si quieres crear una tarea:

```
"Llamar a Pedro mañana"
→ Bot: ¿Quieres que cree esta tarea? Responde SI para confirmar.
```

---

## Como hacer deploy en Railway

```
+------------------------------------------+
|  1. Fork del repositorio en GitHub       |
|                                          |
|  2. Ir a railway.app y crear cuenta      |
|     con tu cuenta de GitHub              |
|                                          |
|  3. New Project > Deploy from GitHub     |
|     Seleccionar el repo del bot          |
|                                          |
|  4. Variables > Add all variables        |
|     (copiar de tu .env local)            |
|                                          |
|  5. Settings > Generate Domain           |
|     Ejemplo: tu-bot.railway.app          |
|                                          |
|  6. Deploy automaticamente               |
|     Ver logs en Railway Dashboard        |
+------------------------------------------+
```

Para instrucciones detalladas, ver `docs/deploy-railway.md`.

---

## Como configurar el webhook en Twilio

Una vez que tengas tu URL de Railway:

1. Ve a [console.twilio.com](https://console.twilio.com)
2. **Messaging > Try it out > Send a WhatsApp message**
3. En el campo **"When a message comes in"**, pega:
   ```
   https://tu-bot.railway.app/webhook
   ```
4. Metodo: **HTTP POST**
5. Guardar

Ahora cada mensaje que reciba el numero de Twilio lo enviara a tu bot.

---

## Estructura del proyecto

```
whatsapp-bot/
├── src/
│   ├── index.js                 ← Servidor Express + webhook
│   ├── handlers/
│   │   ├── commandHandler.js    ← Dispatcher principal
│   │   ├── taskHandler.js       ← /tarea
│   │   ├── listHandler.js       ← /lista
│   │   ├── completeHandler.js   ← /completar
│   │   ├── reminderHandler.js   ← /recordatorio
│   │   ├── projectHandler.js    ← /proyecto
│   │   └── helpHandler.js       ← /ayuda
│   ├── services/
│   │   ├── notionService.js     ← CRUD con Notion API
│   │   ├── twilioService.js     ← Enviar mensajes
│   │   └── reminderService.js   ← Cron para recordatorios
│   └── utils/
│       ├── parser.js            ← Parser de fechas en español
│       └── formatter.js         ← Formateador de mensajes
├── docs/
│   ├── setup-notion.md
│   ├── setup-twilio.md
│   └── deploy-railway.md
├── .env.example
├── package.json
├── Procfile
└── README.md
```

---

## Propiedades de la base de datos Notion

La base de datos de tareas debe tener estas propiedades:

| Propiedad       | Tipo      | Notas                              |
|-----------------|-----------|-----------------------------------|
| Nombre          | Title     | Titulo de la tarea                 |
| Estado          | Select    | Pendiente / En Progreso / Completado |
| Fecha           | Date      | Fecha de vencimiento               |
| Prioridad       | Select    | Alta / Media / Baja                |
| Proyecto        | Select    | Nombre del proyecto                |
| Creado por Bot  | Checkbox  | Marcado si viene del bot           |
| WhatsApp From   | Text      | Numero que creo la tarea           |

---

## Troubleshooting

### El bot no responde a mis mensajes
- Verifica que el webhook este configurado en Twilio con la URL correcta
- Revisa los logs en Railway/Render para ver errores
- Comprueba que el numero este en la whitelist (o que `ALLOWED_NUMBERS` este vacio)

### Error "notion_validation_error" o parecido
- Verifica que las propiedades de la DB tengan exactamente los nombres indicados arriba
- Confirma que la integration tiene acceso a la base de datos
- El ID de la DB debe ser sin guiones: `abc123def456...` (32 caracteres)

### Los recordatorios no llegan
- Twilio solo permite mensajes salientes dentro de la ventana de 24 horas
- Si el recordatorio es para mas de 24h despues, necesitaras plantillas aprobadas por Meta
- Verifica que `TWILIO_PHONE_NUMBER` incluya el prefijo `whatsapp:`

### Error al parsear fechas
- El parser soporta: "mañana", "el lunes", "15 marzo", "en 2 horas", "15/03"
- Si la fecha no se detecta, se crea la tarea sin fecha

---

## Roadmap

- [ ] Soporte para multiples bases de datos (inbox, proyectos, etc.)
- [ ] Plantillas de Twilio para mensajes fuera de ventana de 24h
- [ ] Persistencia de recordatorios en Redis (actualmente en memoria)
- [ ] Comando `/buscar [query]` para buscar tareas por texto
- [ ] Comando `/mover [tarea] [proyecto]` para reorganizar
- [ ] Soporte para adjuntar archivos/imagenes a tareas
- [ ] Dashboard web para ver estadisticas del bot
- [ ] Soporte para multiples usuarios con bases de datos separadas
- [ ] Integration con Google Calendar para sincronizar fechas
- [ ] Comando `/informe` para resumen semanal automatico

---

## Licencia

MIT — Uso libre para proyectos personales y comerciales.
