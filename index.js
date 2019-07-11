require( 'dotenv' ).config();
const express = require( 'express' );
const massive = require( 'massive' );
const app = express();
const products_controller = require('./products_controller');
app.use( express.json() );

app.post('/api/products', products_controller.create);
app.get('/api/products', products_controller.getAll);
app.get('/api/products/:id', products_controller.getOne);
app.put('/api/products/:id', products_controller.update);
app.delete('/api/products/:id', products_controller.delete);

console.log( process.env.CONNECTION_STRING );

massive(process.env.CONNECTION_STRING).then( db => {
    app.set( 'db' , db );
    console.log( 'database is responsive' );
})
    .catch(err => console.log( err ));

const port = process.env.SERVER_PORT;
app.listen(port, () => {
    console.log( `Server listening on port ${ port }.` );
})
