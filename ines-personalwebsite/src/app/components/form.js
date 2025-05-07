'use client'

import React, {FormEvet} from 'react';
import { useState } from 'react';


//creating the form component that will be used in the contact page

export default function Form() {    

    //creating the state variables fro the form 
const [name, setName] = useState('');
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
        body: JSON.stringify({ name, email, message }),
    });
    if (res.ok) {
        alert('Email sent successfully');
    } else {
        alert('Error sending email');
    }

};



return (

    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className='p-4 bg-gray-100 rounded-lg shadow-md flex flex-col gap-4'>
            <h1 className="text-3xl font-bold text-center mb-4">
                Contact Me 
            </h1>
            <p className="text-center text-gray-600 mb-4">
                If you have any questions or just want to say hi, feel free to reach out!
            </p>

        <input 
            type="text" 
            placeholder="Name" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            className="border border-gray-300 rounded p-2"
        />
        <input 
            type="email" 
            placeholder="Email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            className="border border-gray-300 rounded p-2"
        />
        <textarea 
            placeholder="Message" 
            value={message} 
            onChange={(e) => setMessage(e.target.value)} 
            className="border border-gray-300 rounded p-2"
        ></textarea>
        <button type="submit" className="bg-blue-500 text-white rounded p-2">Send</button>
        </div>
    </form>
)

}