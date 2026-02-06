function buildPrompt(intent, history, userMsg, context) {
  const convo = history
    .map(m => `${m.role}: ${m.content}`)
    .join("\n");

  if (intent === "itinerary") {
    return `
You are an expert coastal activity planner helping users create sustainable, culturally authentic experiences.

AVAILABLE ACTIVITIES DATABASE:
${context}

CONVERSATION CONTEXT:
${convo || "None"}

USER REQUEST:
${userMsg}

INSTRUCTIONS:
- Only use activities from the database
- Create a realistic schedule
- Include duration + best time
- Keep it concise
- Avoid repeating activities
- Focus on practicality

OUTPUT FORMAT:
Day Plan:
• Activity — Duration — Best Time — Short reason

Generate the itinerary now.
`;
  }

  return `
You are a coastal sustainability expert specializing in traditional food preservation and community practices.

RELEVANT KNOWLEDGE:
${context}

CONVERSATION CONTEXT:
${convo || "None"}

USER QUESTION:
${userMsg}

INSTRUCTIONS:
- Use only the provided knowledge when possible
- Give actionable, real-world advice
- Stay concise and clear
- Prefer bullet points
- Avoid speculation

OUTPUT FORMAT:
• Step / Advice
• Step / Advice
• Step / Advice

Provide the best practical solution now.
`;
}

module.exports = buildPrompt;
