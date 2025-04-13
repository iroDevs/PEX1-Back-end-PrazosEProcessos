
import nodemailer from 'nodemailer';

type SendEmailParams = {
  sendTo: string
  subject: string
  html: string
}

export async function sendEmail({ sendTo, subject, html }: SendEmailParams) {
  try {

    

    let transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        type: 'OAuth2',
        user: process.env.GMAIL_USER,
        clientId: process.env.OAUTH_CLIENTE_ID,
        clientSecret: process.env.OAUTH_SECRET_CLIENT,
        refreshToken: process.env.OAUTH_REFRESH_TOKEN,
        accessToken: process.env.OAUTH_ACESS_TOKEN, // opcional, mas pode ajudar
      },
    });
    

    let mailOptions = {
      from: process.env.GMAIL_USER,
      to: sendTo,
      
      subject: subject,
      html: html,

      
    };
    // Enviar o email
    let info = await transporter.sendMail(mailOptions);
    
    console.log( info);
    
    
    console.log('Email enviado para: ', sendTo)
    return { success: true, message:'envio de email concluido' }
  } catch (error: any) {
    console.error('Erro ao enviar email:', error)
    return { success: false, error: error.message }
  }
}
