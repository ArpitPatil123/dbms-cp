import { createConnection } from 'mysql';

export const db = createConnection({
    port: 3306,
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'ngo_database'
});

const conn = () => db.connect((err) => {
    if (err) {
        console.error('Error connecting to database: ', err);
    } else {
        console.log('Connection to database successful!');
    }
});

export default conn;