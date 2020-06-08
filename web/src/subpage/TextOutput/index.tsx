import React, { useState, useEffect } from 'react';
import './styles.css';

import api from '../../services/api';

interface Message {
    id: number
    message: string
}

const TextOutput = () => {
    const [messages, setMessages] = useState<Message[]>([]);

    useEffect(() => {
        api.get('texts').then(response => {
            setMessages(response.data);
        })
    })

    return (
        <div>
            <h2>Comentários</h2>
            {messages.map(message => (
                <div className="hold-div" key={message.id}>
                    <p>{message.message}</p>
                    <button className="ouvir-button">Ouvir</button>
                </div>
            ))}
        </div>
    );
};

export default TextOutput;