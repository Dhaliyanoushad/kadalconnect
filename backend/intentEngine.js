function detectIntent(message) {
  const text = message.toLowerCase();

  if (text.includes("itinerary") || text.includes("plan"))
    return "itinerary";

  return "knowledge";
}

module.exports = detectIntent;
