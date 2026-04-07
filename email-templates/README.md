# Email Templates — Notion LATAM

27 templates HTML responsivos para las secuencias de email de Notion LATAM. Diseño ADN Notion: limpio, profesional, tipografía Arial (fallback de Inter), colores oficiales de Notion.

---

## Estructura de carpetas

```
email-templates/
├── 01-welcome/          # 5 emails — Secuencia de bienvenida
├── 02-nurture/          # 10 emails — Nutrición y educación
├── 03-sales/            # 7 emails — Secuencia de ventas (carrito abandonado)
└── 04-post-purchase/    # 5 emails — Post-compra y onboarding
```

---

## Diseño y tokens visuales

| Token | Valor | Uso |
|---|---|---|
| Azul Notion | `#2383E2` | CTAs, acentos, headers |
| Texto principal | `#37352F` | Cuerpo, títulos |
| Fondo | `#F7F6F3` | Background general, cards secundarias |
| Texto secundario | `#787774` | Subtítulos, metadata, footer |
| Texto desactivado | `#AEACA7` | Precios tachados, texto inactivo |
| Blanco | `#ffffff` | Card principal |
| Urgencia | `#E03E3E` | Banners de urgencia (solo sales) |

**Layout:** Tabla-based, max-width 600px, centrado. Compatible con Gmail, Outlook 2007-2021, Apple Mail, Yahoo Mail.

---

## Personalization tags

Todos los templates usan los siguientes tags de personalización:

| Tag | Descripción | Plataformas |
|---|---|---|
| `{{first_name}}` | Nombre del suscriptor | Mailchimp: `*|FNAME|*` / ConvertKit: `{{ subscriber.first_name }}` |
| `{{email}}` | Email del suscriptor | Mailchimp: `*|EMAIL|*` / ConvertKit: `{{ subscriber.email_address }}` |
| `{{order_id}}` | ID de pedido (post-compra) | Variable personalizada |
| `{{access_token}}` | Token de acceso a downloads | Variable personalizada |

---

## Configuración en Mailchimp

### 1. Reemplazar personalization tags

Antes de importar, reemplaza los tags del formato `{{variable}}` por el formato de Mailchimp:

```
{{first_name}}  →  *|FNAME|*
{{email}}       →  *|EMAIL|*
```

### 2. Importar template

1. Ve a **Campaigns** → **Email templates** → **Create template**
2. Selecciona **Code your own** → **Paste in code**
3. Pega el HTML completo del archivo
4. Haz clic en **Save**

### 3. Crear automatizaciones

**Welcome Sequence (01-welcome/):**
- Trigger: Suscripción al formulario
- Email 1: Inmediato
- Email 2: +2 días
- Email 3: +4 días
- Email 4: +6 días
- Email 5: +8 días

**Nurture Sequence (02-nurture/):**
- Trigger: Completó welcome sequence
- Frecuencia: 1 email cada 7 días

**Sales Sequence (03-sales/):**
- Trigger: Visitó página de precios + no compró en 2 horas (requiere integración con tu e-commerce o pixel)
- Email 1: +2 horas
- Email 2: +24 horas
- Email 3: +48 horas
- Email 4: +72 horas (descuento 48h empieza aquí)
- Email 5: +84 horas
- Email 6: +120 horas
- Email 7: +126 horas

**Post-Purchase Sequence (04-post-purchase/):**
- Trigger: Compra completada (webhook desde tu e-commerce)
- Email 1: Inmediato
- Email 2: +1 día
- Email 3: +3 días
- Email 4: +7 días
- Email 5: +14 días

---

## Configuración en ConvertKit

### 1. Reemplazar personalization tags

```
{{first_name}}  →  {{ subscriber.first_name }}
{{email}}       →  {{ subscriber.email_address }}
```

### 2. Importar template

1. Ve a **Broadcasts** o **Sequences** → crea nuevo
2. En el editor, selecciona **Source** o **HTML**
3. Pega el código del template
4. Guarda

### 3. Crear secuencias

En ConvertKit, crea una **Sequence** para cada carpeta:

1. Ve a **Sequences** → **New Sequence**
2. Nombra la secuencia (ej: "Welcome Sequence", "Nurture", "Sales", "Post-Purchase")
3. Agrega los emails en orden y configura los delays (días entre cada uno)
4. Conecta la secuencia a la automation correspondiente

**Automatización sugerida:**
- **Welcome:** Form submit → Add to Welcome Sequence
- **Nurture:** Tag "completed_welcome" → Add to Nurture Sequence
- **Sales:** Tag "visited_pricing" → Add to Sales Sequence (configurar via Zapier o la API de ConvertKit)
- **Post-Purchase:** Purchase event → Add to Post-Purchase Sequence

---

## UTM Parameters

Todos los links llevan UTM parameters configurados. El patrón es:

```
?utm_source=email
&utm_medium=email
&utm_campaign=[nombre-secuencia]
&utm_content=[identificador-email]
```

Los valores de `utm_campaign` usados son:
- `welcome-sequence`
- `nurture-sequence`
- `sales-sequence`
- `post-purchase`

Asegúrate de que tu Google Analytics o herramienta de analytics esté configurado para capturar estos parámetros.

---

## Código de descuento

La secuencia de ventas usa el código `LATAM20` para un 20% de descuento. Para clientes post-compra se usa `CLIENTE20` (curso) y `CLIENTE15` (consultoría). Configura estos códigos en tu plataforma de pagos antes de activar las secuencias.

---

## Preheader texts

Cada template tiene un preheader oculto configurado (el texto que aparece en la bandeja de entrada después del asunto). Está en el primer `<div>` con `display:none`. Puedes editarlo directamente en el HTML antes de importar.

---

## Checklist antes de activar

- [ ] Reemplazar todos los `{{first_name}}` por el merge tag de tu plataforma
- [ ] Verificar que los links de unsubscribe funcionan
- [ ] Configurar los códigos de descuento (LATAM20, CLIENTE20, CLIENTE15)
- [ ] Configurar UTM en Google Analytics
- [ ] Enviar email de prueba a una cuenta tuya en Gmail, Outlook y móvil
- [ ] Verificar que los CTAs apuntan a las URLs correctas (están en `notionlatam.com` como placeholder)
- [ ] Configurar los delays entre emails de cada secuencia
- [ ] Conectar el trigger de post-purchase a tu plataforma de pagos

---

## Soporte

Para preguntas sobre implementación: **hola@notionlatam.com**

© 2025 Notion LATAM
