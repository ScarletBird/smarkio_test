import Knex from 'knex';

export async function up(knex: Knex) {
    // CRIAR a tabela
    return knex.schema.createTable('messages', table =>{
        table.increments('id').primary();
        table.string('message').notNullable();
    })
}

export async function down(knex: Knex) {
    // VOLTAR a tabela (DELETAR)
    return knex.schema.dropTable('messages');
}