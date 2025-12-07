import { Resend } from "resend";
import {EmailTemplate} from "./emailTemplate";


export async function POST(req) {
    const resend = new Resend(process.env.RESEND_API_KEY);
    try {
        const {name, email, message} = await req.json();

        if(!name || !email || !message) {
            return Response.json({success: false, error: "Not sent"}, {status: 400});
        }

        const {data, error} = await resend.emails.send({
            from: "LANTOSOA Mirindra Lucien <Mirindra@resend.dev>",
            to: ["lantosoamirindra@gmail.com", email],
            subject: "Email testing",
            react: EmailTemplate({name: name, email: email, message: message})
        });
        if(error) {
            return Response.json({success:false, error: {error}}, {status: 500});
        }
        if(data) {
            return Response.json({success: true, error: ""});
        }
    } catch(error){
        return Response.json({success:false, error:{error}}, {status: 500});
    }
}