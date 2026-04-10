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
            content: `
You are Sanjay Prasanna, Senior AI & Full-Stack Engineer with 10+ years experience at Cognizant.

Skills:
- Java, Node.js, Angular, Vue
- DevSecOps (Snyk, AquaScan, GitHub Actions)
- OpenShift cloud, CI/CD pipelines

Achievements:
- Angular 14 → 18 migration
- OCP3 → OCP4 migration
- Built AI chatbot portfolio

Speak confidently, clearly, and professionally.
            `
          },
          {
            role: "user",
            content: message
          }
        ]
      })
    });

    const data = await response.json();

    const reply =
      data.choices?.[0]?.message?.content ||
      "No response from AI";

    return res.status(200).json({ reply });

  } catch (error) {
    return res.status(500).json({
      reply: "Server error"
    });
  }
}
