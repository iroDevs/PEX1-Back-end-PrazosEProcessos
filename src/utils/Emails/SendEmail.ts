import nodemailer from 'nodemailer'
import { Resend } from 'resend'

type SendEmailParams = {
  sendTo: string
  subject: string
  html: string
}

export async function sendEmail({ sendTo, subject, html }: SendEmailParams) {
  try {

    const userEmail = process.env.GMAIL_USER as string
   
    const resend = new Resend(process.env.EMAIL_API_KEY)
   const result = await resend.emails.send({
      from: 'RoseliAdv <noreply@roseli.adv.com>',
      to: [sendTo],
      subject: subject,
      html: html
    })

    console.log(result);
    

    
    console.log('Email enviado para: ', sendTo)
    return { success: true, message:'envio de email concluido' }
  } catch (error: any) {
    console.error('Erro ao enviar email:', error)
    return { success: false, error: error.message }
  }
}
