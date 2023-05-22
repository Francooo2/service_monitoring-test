const { client } = require('../../utils/monitoring.js')

const getMetrics = async (req, res) => {
    res.set('Content-Type', client.register.contentType)
    return res.send(await client.register.metrics())
};

module.exports = {
    getMetrics,
};