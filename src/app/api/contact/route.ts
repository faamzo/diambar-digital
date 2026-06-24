import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface ContactPayload {
  name?: string;
  email?: string;
  phone?: string;
  service?: string;
  message?: string;
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload;
    const { name, email, phone, service, message } = body;

    if (!name?.trim() || !email?.trim() || !service?.trim() || !message?.trim()) {
      return NextResponse.json(
        { error: "Veuillez remplir tous les champs obligatoires." },
        { status: 400 }
      );
    }

    const gmailUser = process.env.GMAIL_USER?.trim();
    const gmailAppPassword = process.env.GMAIL_APP_PASSWORD?.replace(/\s/g, "");
    const contactEmail = process.env.CONTACT_EMAIL?.trim() ?? "diambardigital@gmail.com";

    if (!gmailUser || !gmailAppPassword) {
      return NextResponse.json(
        {
          error:
            "Configuration email manquante. Ajoutez GMAIL_USER et GMAIL_APP_PASSWORD dans .env.local",
        },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: gmailUser,
        pass: gmailAppPassword,
      },
    });

    await transporter.sendMail({
      from: `"Diamabar Digital" <${gmailUser}>`,
      to: contactEmail,
      replyTo: email.trim(),
      subject: `Nouveau contact — ${name.trim()} (${service.trim()})`,
      text: [
        `Nom : ${name.trim()}`,
        `Email : ${email.trim()}`,
        `Téléphone : ${phone?.trim() || "Non renseigné"}`,
        `Service : ${service.trim()}`,
        "",
        "Message :",
        message.trim(),
      ].join("\n"),
      html: `
        <h2>Nouveau message depuis le site Diamabar Digital</h2>
        <p><strong>Nom :</strong> ${name.trim()}</p>
        <p><strong>Email :</strong> ${email.trim()}</p>
        <p><strong>Téléphone :</strong> ${phone?.trim() || "Non renseigné"}</p>
        <p><strong>Service :</strong> ${service.trim()}</p>
        <p><strong>Message :</strong></p>
        <p>${message.trim().replace(/\n/g, "<br>")}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);

    const isAuthError =
      error instanceof Error &&
      "code" in error &&
      (error as { code?: string }).code === "EAUTH";

    return NextResponse.json(
      {
        error: isAuthError
          ? "Erreur d'authentification Gmail. Vérifiez GMAIL_USER et GMAIL_APP_PASSWORD dans .env.local."
          : "Impossible d'envoyer le message. Réessayez plus tard.",
      },
      { status: 500 }
    );
  }
}
