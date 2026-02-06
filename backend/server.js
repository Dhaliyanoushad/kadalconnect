require("dotenv").config();

const express = require("express");
const cors = require("cors");
const { HfInference } = require("@huggingface/inference");

const app = express();

app.use(cors());
app.use(express.json());

// Hugging Face client
const hf = new HfInference(process.env.HF_TOKEN);

// ---- CHAT ROUTE ----
app.post("/chat", async (req, res) => {
  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({
        reply: "No message provided."
      });
    }

    // Prompt injection (you’ll later add knowledge/context here)
    const prompt = `
You are a coastal sustainability assistant.

User question:
${message}

Give a brief, practical answer.
`;

    const response = await hf.chatCompletion({
      model: "meta-llama/Meta-Llama-3-8B-Instruct",
      messages: [
        {
          role: "system",
          content:
            "You are a coastal sustainability expert. Be concise and actionable."
        },
        {
          role: "user",
          content: prompt
        }
      ],
      max_tokens: 500,
      temperature: 0.7
    });

    const reply = response.choices[0].message.content;

    res.json({ reply });

  } catch (err) {
    console.error("Chat error:", err.message);

    res.status(500).json({
      reply: "Chatbot error — check backend logs."
    });
  }
});

// ---- SERVER START ----
app.listen(5001, () => {
  console.log("Chatbot backend running on port 5001");
});
