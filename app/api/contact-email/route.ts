import { Resend } from "resend";
import {EmailTemplate} from "./emailTemplate";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
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
        return Response.json({success: true, error: ""})
    } catch(error){
        return Response.json({success:false, error:{error}}, {status: 500});
    }
}