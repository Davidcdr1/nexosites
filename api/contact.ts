export default async function handler(req: any, res: any) {
    if (req.method !== "POST") {
      return res.status(405).json({ error: "Method not allowed" });
    }
  
    const {
      name,
      email,
      phone,
      business,
      budget,
      message,
      website,
    } = req.body || {};
  
    // Protección básica contra spam
    if (website) {
      return res.status(200).json({ ok: true });
    }
  
    if (!name || !email || !message) {
      return res.status(400).json({
        error: "Faltan campos obligatorios",
      });
    }
  
    const apiKey = process.env.RESEND_API_KEY;
    const to =
      process.env.CONTACT_TO_EMAIL ||
      "dcuencadelrio@gmail.com";
    const from = process.env.CONTACT_FROM_EMAIL;
  
    if (!apiKey || !from) {
      return res.status(500).json({
        error: "Email service not configured",
      });
    }
  
    const emailResponse = await fetch(
      "https://api.resend.com/emails",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from,
          to: [to],
          reply_to: email,
          subject: `Nueva solicitud web — ${name}`,
          html: `
            <h2>Nueva solicitud de presupuesto — NexoSites</h2>
  
            <p><strong>Nombre:</strong> ${escapeHtml(name)}</p>
            <p><strong>Email:</strong> ${escapeHtml(email)}</p>
            <p><strong>Teléfono:</strong> ${escapeHtml(
              phone || "No indicado"
            )}</p>
            <p><strong>Negocio:</strong> ${escapeHtml(
              business || "No indicado"
            )}</p>
            <p><strong>Presupuesto:</strong> ${escapeHtml(
              budget || "No indicado"
            )}</p>
  
            <hr>
  
            <p><strong>Idea del cliente:</strong></p>
            <p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>
          `,
        }),
      }
    );
  
    const result = await emailResponse.json();
  
    if (!emailResponse.ok) {
      return res.status(500).json({
        error: result?.message || "Error enviando el correo",
      });
    }
  
    return res.status(200).json({
      ok: true,
    });
  }
  
  function escapeHtml(value: string) {
    return String(value).replace(
      /[&<>"']/g,
      (char) =>
        ({
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#039;",
        })[char] || char
    );
  }