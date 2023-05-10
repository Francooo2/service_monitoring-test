const { format } = require('winston');
const winston = require('winston');

const logger = winston.createLogger({
  transports: [
    new winston.transports.Console({
        levels: { info: 0, error: 1 },
        format: format.combine(
            format.simple(),
            format.timestamp(),
            format.printf(info => `[${info.timestamp}], Level: ${info.level}, Message: ${info.message}`)
        )
    }),
  ],
});

module.exports = {
    logger
}