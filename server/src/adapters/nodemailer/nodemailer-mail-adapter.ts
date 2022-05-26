import nodemailer from "nodemailer";
import { MailAdapter, SendMailData } from "../mail-adapter";

export const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "1b59cfe8c7265b",
        pass: "9e69d406771c3c"
    }
});

export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({ subject, body }: SendMailData) {
        await transport.sendMail({
            from: 'Equipe Feedget <oi@feedget.com>',
            to: 'Leandro Antunes <leandro.tune@hotmail.com>',
            subject: subject,
            html: body,
        });
    }
}