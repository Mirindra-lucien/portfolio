"use client"
import React, { useState } from 'react';

export default function Contact(){
  const [loading, setLoading] = useState(false);
  const [msg, SetMsg] = useState("");
  const [error, setErr] = useState(false);
  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const form = e.target as HTMLFormElement;
    const data = {
      name: form.nom.value,
      email: form.email.value,
      message: form.message.value
    }
    const res = await fetch("/api/contact-email", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(data)
    });
    const response = await res.json();
    setLoading(false);
    if(response.success) {
      SetMsg("Email sent successfuly");
      form.reset();
    } else {
      setErr(true);
      SetMsg("Error: "+response.error);
    }
  }
  return <div className="flex justify-center items-center h-screen w-full">
    <form onSubmit={sendEmail} className="flex w-80 flex-col gap-2 border border-secondary shadow-inner shadow-secondary p-4 rounded-md hover:shadow-lg hover:shadow-secondary focus:shadow-lg">
      <h2 className="text-center font-bold border-b-2 pb-1">Contact</h2>
      <label htmlFor="name">Name</label>
      <input type="text" name="nom" id="name" className="focus:shadow-lg focus:shadow-foreground rounded-md p-2 text-background bg-foreground"/>
      <label htmlFor="email">Email</label>
      <input type="email" name="email" id="email"  className="focus:shadow-lg focus:shadow-foreground rounded-md p-2 text-background bg-foreground"/>
      <label htmlFor="message" >Message</label>
      <textarea name="message" id="message" cols={100} rows={2}  className="focus:shadow-lg focus:shadow-foreground rounded-md p-2 text-background bg-foreground"></textarea>
      <button type="submit" className="rounded-md py-2 bg-foreground dark:bg-background dark:border-foreground dark:border-2 dark:text-foreground text-background hover:shadow-lg hover:shadow-foreground">{
        loading? "Sending..." : "Send"
      }</button>
      <p className={(error ? "text-red-500":"text-green-500") + " text-center"}>{msg}</p>
    </form>
  </div>
}