const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const router = require('./routes/index.js');

const app = express();

app.set('port', process.env.PORT || 3000);
dotenv.config({ path: './.env'});

app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(cors());

app.use('/', router);

app.listen(app.get('port'), () => {
 console.log(`Servidor corriendo en el puerto ${app.get('port')}`);
});