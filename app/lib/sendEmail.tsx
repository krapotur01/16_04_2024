import nodemailer from 'nodemailer';
import React from "react"
import {render} from '@react-email/components';
import Email from '@/app/(auth)/Login/email/email';

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_MAIL_PROVIDER,
    port: 465,
    secure: true,
    auth: {
        user: process.env.MAIL_SEND_LOGIN,
        pass: process.env.MAIL_SEND_PASS,
    },
});

export async function sendEmail(email: string, randomNumber: string, currentMail: string) {
    const emailHtml = render(<Email verificationCode={randomNumber} currentMail={currentMail}/>);

    const options = {
        from: process.env.MAIL_SEND_LOGIN,
        to: email,
        subject: 'Код подтверждения электронной почты',
        html: emailHtml,
    };

    await transporter.sendMail(options);
}
