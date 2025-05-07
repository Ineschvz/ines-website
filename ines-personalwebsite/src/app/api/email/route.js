import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(req) {

    // Extracting name, email, and message from the JSON body of the request
    const { name, email, message } = await req.json();
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        }
    });

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: 'ineschvz21@gmail.com',
        subject: 'website contact form',
        text: `Name: ${name}\n  Email: ${email}\n Message: ${message}`
    };

    try {
        await transporter.sendMail(mailOptions);
        return new Response('Email sent successfully', { status: 200 });
    } catch (error) {
        console.error('Error sending email:', error);
        return new Response('Error sending email', { status: 500 });
    }
    
}