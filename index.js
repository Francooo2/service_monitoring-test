const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const router = require('./routes/index.js');
const responseTime = require('response-time');
const { collectDefaultMetrics } = require('./utils/monitoring.js');
const { counter, histogram } = require('./utils/monitoring.js');

const app = express();
collectDefaultMetrics({ timeout: 5000 });

// Middleware global de histograma
app.use(
    responseTime((req, res, time) => {
        if (req?.route?.path && req?.route?.path !== '/') {
            histogram.observe(
                {
                    method: req.method,
                    route: req.route.path,
                    status_code: res.statusCode,
                },
                time * 1000
            );
        }
    })
)

// Middleware global como contador de requests
app.use(
    responseTime((req, res, time) => {
        if (req?.route?.path && req?.route?.path !== '/') {
            counter.inc();
        }
    })
)

app.set('port', process.env.PORT || 5000);
dotenv.config({ path: './.env' });

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.use('/', router);

app.listen(app.get('port'), () => {
    console.log(`Servidor corriendo en el puerto ${app.get('port')}`);
});