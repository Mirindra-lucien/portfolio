"use server"

import nodemailer from "nodemailer";

export async function POST(req) {
    try {
        const {name, email, message} = await req.json();
        if(!name || !email || !message) {
            return Response.json({success: false, error: "email doesn\'t exist"}, {status: 400});
        }
        const transporter = nodemailer.createTransport({
            host: process.env.MAIL_HOST,
            port: process.env.MAIL_PORT,
            secure: false,
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS
            }
        });
        await transporter.sendMail({
            from: `"LANTOSOA Mirindra" <${process.env.MAIL_USER}>`,
            to: "lantosoamirindra@gmail.com",
            subject: "Noveau message depuis le portfolio",
            html: `"<h2>Nouveau message from ${name}</h2>"`
        });
        return Response.json({success: true});
    } catch (error) {
        return Response.json({success: false, error: "Email could not sent"}, {status: 500});
    }
}