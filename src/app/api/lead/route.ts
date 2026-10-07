import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, phone, businessType, plan } = body;

    if (!name || !phone) {
      return NextResponse.json(
        { error: "Ism va telefon raqami kiritilishi shart." },
        { status: 400 }
      );
    }

    // Sanitize inputs to prevent HTML injection in Telegram message
    const cleanName = String(name).replace(/[<>&]/g, "");
    const cleanPhone = String(phone).replace(/[<>&]/g, "");

    const businessTypeLabels: Record<string, string> = {
      retail: "🛒 Do'kon & Supermarket",
      cafe: "☕ Kafe & Restoran & Fast Food",
      bakery: "🍰 Shirinliklar & Qandolat",
    };

    const planLabels: Record<string, string> = {
      basic: "🥉 Basic (100 000 so‘m/oy)",
      standard: "💎 Standart (150 000 so‘m/oy)",
      standart: "💎 Standart (150 000 so‘m/oy)",
    };

    const businessLabel = businessTypeLabels[businessType] || String(businessType || "Do'kon").replace(/[<>&]/g, "");
    const planLabel = planLabels[plan] || String(plan || "Standart").replace(/[<>&]/g, "");

    const now = new Date().toLocaleString("uz-UZ", {
      timeZone: "Asia/Tashkent",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    });

    const messageText = `🔥 <b>YANGI DEMO / TARIF ARIZASI!</b>
━━━━━━━━━━━━━━━━━━
👤 <b>Mijoz:</b> ${cleanName}
📞 <b>Telefon:</b> <code>${cleanPhone}</code>
🏪 <b>Biznes turi:</b> ${businessLabel}
💼 <b>Tanlangan tarif:</b> ${planLabel}
⏰ <b>Kelgan vaqti:</b> ${now}
━━━━━━━━━━━━━━━━━━
🤖 <i>Bot: @shop_admin_support_bot</i>
🌐 <i>Manba: Shop-Admin.uz Rasmiy Landing Sahifasi</i>`;

    const supportToken =
      process.env.TELEGRAM_BOT_SUPPORT_TOKEN ||
      "8777800037:AAHggHLBD-0oPvFcmtwmspUuqCJIRCTyo4w";

    // Target chat IDs: primary is Xurshid aka (8919726417)
    const targetChatIds = Array.from(
      new Set(
        [
          process.env.TELEGRAM_SUPPORT_CHAT_ID,
          "8919726417",
          "1545416521",
        ].filter(Boolean) as string[]
      )
    );

    let sent = false;

    // Send via Support Bot token (backend/.env TELEGRAM_BOT_SUPPORT_TOKEN)
    for (const chatId of targetChatIds) {
      try {
        const res = await fetch(`https://api.telegram.org/bot${supportToken}/sendMessage`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chat_id: chatId,
            text: messageText,
            parse_mode: "HTML",
          }),
        });
        const data = await res.json();
        if (data.ok) {
          sent = true;
        }
      } catch (err) {
        console.error(`Support bot send error for chat ${chatId}:`, err);
      }
    }

    return NextResponse.json({
      success: true,
      delivered: sent,
      message: "Arizangiz muvaffaqiyatli qabul qilindi!",
    });
  } catch (error) {
    console.error("Lead submission error:", error);
    return NextResponse.json(
      { error: "Server xatoligi yuz berdi" },
      { status: 500 }
    );
  }
}
