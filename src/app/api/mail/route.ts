import { NextRequest as req, NextResponse as res } from 'next/server';
import { EmailTemplate } from '../../../components/email-template';
import { Resend } from 'resend';

export function GET() {
  return res.json({ message: 'hola mundo' });
}

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const formData = await request.formData();
  const name = formData.get('name');
  const email = formData.get('email');
  const phone = formData.get('phone');
  const msg = formData.get('msg');
  try {
    const data = await resend.emails.send({
      from: 'Form <form@nh-digital.dev>',
      to: ['tino.navarrod@gmail.com'],
      subject: 'Correo Recibido desde tinonavarro.nh-digital.dev',
      react: EmailTemplate({
        name: name,
        email: email,
        phone: phone,
        msg: msg,
      }),
      text: '',
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}
