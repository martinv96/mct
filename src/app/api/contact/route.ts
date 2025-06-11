import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: Request) {
  const { nom, email, message } = await request.json()

  if (!nom || !email || !message) {
    return NextResponse.json({ success: false, error: 'Champs manquants' }, { status: 400 })
  }

  // Transporteur SMTP (ici Gmail)
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER, // à définir dans .env.local
      pass: process.env.GMAIL_PASS, // mot de passe ou app password
    },
  })

  const mailOptions = {
    from: `"${nom}" <${email}>`,
    to: process.env.GMAIL_USER, // destinataire (toi)
    subject: 'Nouveau message depuis le formulaire de contact',
    text: `
      Nom : ${nom}
      Email : ${email}
      Message : ${message}
    `,
  }

  try {
    await transporter.sendMail(mailOptions)
    return NextResponse.json({ success: true, message: 'Message envoyé avec succès' })
  } catch (error) {
    console.error('Erreur envoi mail :', error)
    return NextResponse.json({ success: false, error: 'Erreur envoi email' }, { status: 500 })
  }
}
