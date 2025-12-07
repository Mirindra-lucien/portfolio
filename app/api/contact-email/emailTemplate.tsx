interface EmailProps {
    name: string;
    email: string;
    message: string;
}

export function EmailTemplate({name, email, message}: EmailProps){
    return <div>
        <h2>Mirindra Contact</h2>
        <h3>From: {name + `: <${email}>`}</h3>
        <p>
            {message}
        </p>
    </div>
}