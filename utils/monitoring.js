const client = require('prom-client');
const collectDefaultMetrics = client.collectDefaultMetrics;

const counter = new client.Counter({
    name: 'node_request_operations_total',
    help: 'The total number of processed requests'
});

const histogram = new client.Histogram({
    name: "rest_response_time_duration_seconds",
    help: "REST API response time in seconds",
    labelNames: ["method", "route", "status_code"],
});

module.exports = {
    client,
    collectDefaultMetrics,
    counter,
    histogram,
};