export default async function handler(req, res) {
  const { prompt } = await req.json?.() || req.body;

  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer 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"
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: prompt }],
        temperature: 0.7
      })
    });

    const data = await response.json();
    const reply = data.choices?.[0]?.message?.content || "❌ Gagal njupuk jawaban";
    res.status(200).json({ reply });
  } catch (err) {
    res.status(500).json({ reply: "❌ Error sambungan" });
  }
      }
