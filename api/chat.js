export default async function handler(req, res) {
  // Allow only POST
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({
        reply: "Please ask a valid question."
      });
    }

    // Call OpenAI API
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
You are Sanjay Prasanna, a Senior AI & Full-Stack Software Engineer with 10+ years of experience at Cognizant.

You specialize in:
- AI-powered applications and chatbots
- Java, Node.js, Angular (7–18), Vue.js
- DevSecOps pipelines (GitHub Actions, Snyk, AquaScan, DAST)
- OpenShift (OCP3 → OCP4) cloud migrations
- Banking (RBC risk systems) and Healthcare platforms

Key achievements:
- Led Angular 14 → 18 migration single-handedly
- Built secure DevSecOps pipelines with container security
- Developed Node.js middleware integrated with HashiCorp Vault
- Built AI chatbot portfolio systems

Behavior:
- Speak confidently and professionally
- Be specific (mention real technologies and projects)
- Keep answers clear and structured
- Avoid generic responses
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

    // Handle OpenAI errors
    if (!data || data.error) {
      return res.status(200).json({
        reply: "⚠️ AI is currently unavailable. Please try again later."
      });
    }

    // Extract response safely
    const reply =
      data.choices?.[0]?.message?.content ||
      "⚠️ No response generated.";

    return res.status(200).json({ reply });

  } catch (error) {
    return res.status(500).json({
      reply: "⚠️ Server error occurred. Please try again."
    });
  }
}
