import { Request, Response } from 'express';
import knex from './database/connection';

class TextController {
    async index(request: Request, response: Response){

        const msgs = await knex('messages').select('*');

        const msgsToShow = msgs.map(msg => {
            return{
                id: msg.id,
                message: msg.message
            }
        });

        return response.json(msgsToShow);
    }

    async create(request: Request, response: Response){

        const { message } = request.body;

        const msg = { message };

        await knex('messages').insert(msg);

        return response.json({mensagem: message});
    }
}

export default TextController;