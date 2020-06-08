import path from 'path';
// Update with your config settings.

module.exports = {
  client: 'mysql', // Será usado o sqlite3 para a aplicação
    connection: {
      host     : '127.0.0.1',
      user     : 'smarkio',
      password : 'smarkio',
      database : 'smarkio_test'
    },
    migrations: {
        directory: path.resolve(__dirname, 'src', 'database', 'migrations')
    }
};
