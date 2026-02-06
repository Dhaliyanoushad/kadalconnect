const fs = require("fs");

const raw = fs.readFileSync("knowledge.txt", "utf-8");

const knowledgeMap = raw.split("\n").reduce((acc, line) => {
  const [key, value] = line.split(":");
  if (key && value) acc[key.trim()] = value.trim();
  return acc;
}, {});

function retrieveKnowledge(message) {
  const text = message.toLowerCase();

  for (let key in knowledgeMap) {
    if (text.includes(key)) {
      return knowledgeMap[key];
    }
  }

  return "Use traditional preservation and sharing practices.";
}

module.exports = retrieveKnowledge;
