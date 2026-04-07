# Setup Notion — Guia completa

## 1. Crear una Integration en Notion

1. Ve a [notion.so/my-integrations](https://www.notion.so/my-integrations)
2. Haz clic en **"New integration"**
3. Rellena los datos:
   - **Name:** `Notion LATAM WhatsApp Bot`
   - **Logo:** (opcional, puedes subir uno)
   - **Associated workspace:** Selecciona tu workspace
4. En **"Capabilities"**, asegurate de marcar:
   - Read content
   - Update content
   - Insert content
5. Haz clic en **"Submit"**
6. Copia el **Internal Integration Token** (empieza con `secret_`)
   - Este es tu `NOTION_API_KEY`

---

## 2. Crear la base de datos de tareas

### Opcion A — Duplicar plantilla

Si tienes acceso a la plantilla del bot, duplicala en tu workspace y salta al paso 3.

### Opcion B — Crear manualmente

1. En Notion, crea una nueva pagina
2. Escribe `/database` y selecciona **"Table - Full page"**
3. Nombra la base de datos: **"Tareas Bot"** (o como prefieras)
4. Agrega las siguientes propiedades:

| Propiedad       | Tipo      | Opciones                              |
|-----------------|-----------|--------------------------------------|
| Nombre          | Title     | (por defecto, no cambiar)            |
| Estado          | Select    | Pendiente, En Progreso, Completado   |
| Fecha           | Date      | (sin opciones extra)                  |
| Prioridad       | Select    | Alta, Media, Baja                    |
| Proyecto        | Select    | (agregar opciones segun tus proyectos)|
| Creado por Bot  | Checkbox  | (sin opciones)                        |
| WhatsApp From   | Text      | (sin opciones)                        |

**IMPORTANTE:** Los nombres de las propiedades deben ser exactamente iguales (con mayusculas y espacios) para que el bot funcione correctamente.

---

## 3. Conectar la Integration a la base de datos

1. Abre tu base de datos en Notion
2. Haz clic en los tres puntos `...` en la esquina superior derecha
3. Selecciona **"Add connections"** (o "Connections" > "Add a connection")
4. Busca el nombre de tu integration: `Notion LATAM WhatsApp Bot`
5. Haz clic en **"Confirm"**

Sin este paso, el bot no podra leer ni escribir en tu base de datos.

---

## 4. Obtener el ID de la base de datos

El ID de la base de datos esta en la URL cuando la tienes abierta en Notion.

Hay dos formatos posibles:

**Formato 1 — Vista de pagina completa:**
```
https://www.notion.so/mi-workspace/xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx?v=yyyyyyyy
                                   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
                                   Este es el DB ID (32 caracteres)
```

**Formato 2 — URL corta:**
```
https://www.notion.so/xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx?v=yyyyyyyy
                      ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
```

**Como extraerlo:**
1. Abre la base de datos en Notion
2. Copia la URL completa del navegador
3. Extrae los 32 caracteres hexadecimales antes del `?v=`
4. Elimina los guiones si los hay: `abc123-def456` → `abc123def456`

El ID final debe tener 32 caracteres sin guiones.

---

## 5. Configurar el archivo .env

Abre tu `.env` y agrega:

```env
NOTION_API_KEY=secret_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
NOTION_TASKS_DB_ID=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

---

## 6. Verificar la conexion

Una vez configurado, puedes verificar que todo funciona ejecutando:

```bash
node -e "
const { Client } = require('@notionhq/client');
const notion = new Client({ auth: process.env.NOTION_API_KEY });
require('dotenv').config();
notion.databases.retrieve({ database_id: process.env.NOTION_TASKS_DB_ID })
  .then(db => console.log('OK! Base de datos:', db.title[0]?.plain_text))
  .catch(err => console.error('Error:', err.message));
"
```

Si ves `OK! Base de datos: Tareas Bot` (o el nombre que le pusiste), todo esta correcto.

---

## Posibles errores

### "Could not find database with ID..."
- El ID de la base de datos esta incorrecto
- Asegurate de extraerlo correctamente de la URL

### "API token is invalid"
- El `NOTION_API_KEY` esta mal copiado
- Verifica que empiece con `secret_`

### "Integration does not have access to database"
- La integration no esta conectada a la base de datos
- Repite el paso 3

### "Property 'Nombre' not found"
- Las propiedades de la base de datos no coinciden con los nombres esperados
- Revisa que los nombres sean exactamente iguales (sensible a mayusculas)
