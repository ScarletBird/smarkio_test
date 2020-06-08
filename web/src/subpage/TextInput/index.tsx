import React, { ChangeEvent, FormEvent, useState } from 'react';
import './styles.css';

import api from '../../services/api';

const CreateInput = () => {
    const [message, setMessage] = useState({
        message: ''
    });

    function handleInputChange(event: ChangeEvent<HTMLTextAreaElement>){
        const { value } = event.target;

        setMessage({message: value});
    }

    async function handleSubmit(event: FormEvent){
        event.preventDefault();

        await api.post('texts', message);
    }

    return (
        <div>
            <h2 className="Input-title">Comentário</h2>
            <form onSubmit={handleSubmit}>
                <textarea 
                    name="message"
                    id="message"
                    onChange={handleInputChange}/>
                <button className="Input-button" type="submit">
                    Cadastrar
                </button>
            </form>
        </div>
    );
};

export default CreateInput;