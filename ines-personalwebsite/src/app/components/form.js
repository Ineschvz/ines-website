'use client'

import React, {FormEvet} from 'react';
import { useState } from 'react';


//creating the form component that will be used in the contact page

export default function Form() {    

    //creating the state variables fro the form 
const [name, setName] = useState('');
const [last, setLast] = useState('');
const [email, setEmail] = useState(''); 
const [message, setMessage] = useState('');

//creating the handleSubmit function that will be used to handle the form submission
const handleSubmit = async (e) =>{
    e.preventDefault();
    const res = await fetch('/api/email', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, last, email, message }),
    });
    if (res.ok) {
        alert('Email sent successfully');
    } else {
        alert('Error sending email');
    }

};



return (

    <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4 font-[ivyPresto]">
        <div 
            className='w-full flex justify-center' 
            style={{ 
                backgroundImage: "url('/InesTyping.jpg'), linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.3))", 
                backgroundBlendMode: 'overlay', 
                backgroundSize: 'cover', 
                backgroundPosition: 'center', 
            }}
        >
        <div className='p-8 px-24 bg-orange-200/95 shadow-md flex flex-col gap-6 max-w-2xl w-full mx-auto min-h-screen items-center'>
            <h1 className="font-medium text-4xl text-center mb-4 text-green-900">
                Contact Me
            </h1>
            <img src="/flower.png" alt="Flower" className="w-16 h-16 mx-auto" />
            <p className="text-center text-green-900 mb-4 text-4xl font-bold">
                If you have any questions or just want to say hi, feel free to reach out!
            </p>

        <div className='flex flex-row gap-4 items-center justify-center w-full'>
            <div className="w-full">
                <h1 className="text-lg text-green-900">First Name</h1>
                <input 
                    type="text" 
                    placeholder="First Name" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                    className="border border-gray-300 rounded p-2 w-full text-lg"
                />
            </div>
            <div className="w-full">
                <h1 className="text-lg text-green-900">Last Name</h1>
                <input
                    type="text" 
                    placeholder="Last Name" 
                    value={last} 
                    onChange={(e) => setLast(e.target.value)} 
                    className="border border-gray-300 rounded p-2 w-full text-lg"
                />
            </div>
        </div>
        <div className="w-full">
            <h1 className="text-lg text-green-900">Email</h1>
            <input 
                type="email" 
                placeholder="Email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                className="border border-gray-300 rounded p-2 w-full text-lg"
            />
        </div>
        <div className="w-full">
            <h1 className="text-lg text-green-900">Message</h1>
            <textarea 
                placeholder="Message" 
                value={message} 
                onChange={(e) => setMessage(e.target.value)} 
                className="border border-gray-300 rounded p-2 w-full text-lg"
            ></textarea>
        </div>
        <button type="submit" className="text-orange-600/90 rounded-full outline-white outline-double outline-4 p-3 px-10 text-xl">Send</button>
        </div>

        
        </div>
    </form>
)

}