import knex from 'knex';

const connection = knex({
    client: 'mysql',
    connection: {
        host     : '127.0.0.1',
        user     : 'smarkio',
        password : 'smarkio',
        database : 'smarkio_test'
    }
});

export default connection;