/**
 * Handler para el comando /ayuda
 * Muestra todos los comandos disponibles con ejemplos.
 */
function handle() {
  return (
    `🤖 *Notion LATAM Bot — Ayuda*\n` +
    `━━━━━━━━━━━━━━━━━━━━━\n\n` +

    `📝 *Crear tarea*\n` +
    `\`/tarea [descripción] [fecha]\`\n` +
    `Ej: \`/tarea Revisar informe mañana\`\n` +
    `Ej: \`/tarea Llamar cliente el lunes #trabajo\`\n\n` +

    `📋 *Ver tareas*\n` +
    `\`/lista [filtro]\`\n` +
    `Filtros: \`hoy\` • \`esta semana\` • \`urgente\` • \`completadas\`\n` +
    `Ej: \`/lista hoy\`\n` +
    `Ej: \`/lista urgente\`\n\n` +

    `✅ *Completar tarea*\n` +
    `\`/completar [número o nombre]\`\n` +
    `Ej: \`/completar 3\`\n` +
    `Ej: \`/completar Llamar a María\`\n\n` +

    `⏰ *Recordatorio*\n` +
    `\`/recordatorio [mensaje] [cuándo]\`\n` +
    `Ej: \`/recordatorio Reunión en 2 horas\`\n` +
    `Ej: \`/recordatorio Pagar renta mañana 9am\`\n\n` +

    `📁 *Proyectos*\n` +
    `\`/proyecto\` → ver todos los proyectos\n` +
    `\`/proyecto [nombre]\` → tareas del proyecto\n` +
    `Ej: \`/proyecto trabajo\`\n\n` +

    `━━━━━━━━━━━━━━━━━━━━━\n` +
    `💡 *Tip:* También puedes escribir cualquier cosa directamente y te preguntaré si quieres crear una tarea.\n\n` +
    `Ej: "Llamar a Pedro mañana" → pregunto si creo la tarea\n\n` +
    `🔖 *Etiquetas de proyecto:* Agrega \`#nombre\` al final de tu tarea para asignar proyecto.\n` +
    `Ej: \`/tarea Revisar contrato #legal\``
  );
}

module.exports = { handle };
