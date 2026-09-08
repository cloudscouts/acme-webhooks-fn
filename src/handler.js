// Recibe webhooks del procesador de pagos y los encola.
exports.handler = async (event) => {
  const body = JSON.parse(event.body || "{}");
  return { statusCode: 200, body: JSON.stringify({ received: body.id ?? null }) };
};
