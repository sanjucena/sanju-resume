export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { message } = req.body;

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
              "You are Sanjay Prasanna, a Senior Software Engineer with 10+ years experience in Java, Angular, Vue.js, DevSecOps, banking and healthcare domains. Answer professionally and clearly."
          },
          {
            role: "user",
            content: message
          }
        ]
      })
    });

    const data = await response.json();

    return res.status(200).json({
      reply: data.choices?.[0]?.message?.content || "No response"
    });

  } catch (error) {
    return res.status(500).json({ error: "Something went wrong" });
  }
}
