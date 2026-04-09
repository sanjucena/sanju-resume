export default async function handler(req, res) {
  console.log("METHOD:", req.method);

  // Only allow POST
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({
        reply: "No message received"
      });
    }

    console.log("USER MESSAGE:", message);

    // Call OpenAI
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          {
            role: "system",
            content:
              "You are Sanjay Prasanna, a Senior Software Engineer with 10+ years of experience in Java, Vue.js, Angular, DevSecOps, banking and healthcare domains. Answer professionally and clearly."
          },
          {
            role: "user",
            content: message
          }
        ]
      })
    });

    const data = await response.json();

    console.log("OPENAI RAW RESPONSE:", JSON.stringify(data));

    // Handle OpenAI errors clearly
    if (!data || data.error) {
      console.error("OPENAI ERROR:", data);

      return res.status(200).json({
        reply: "⚠️ OpenAI not responding. Check API key or billing."
      });
    }

    const reply =
      data.choices?.[0]?.message?.content ||
      "⚠️ AI returned empty response";

    return res.status(200).json({ reply });

  } catch (error) {
    console.error("SERVER ERROR:", error);

    return res.status(500).json({
      reply: "⚠️ Server error occurred"
    });
  }
}
