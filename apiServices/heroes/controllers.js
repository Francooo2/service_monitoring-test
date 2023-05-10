const heroeModel = require('./model.js');
const heroeDto = require('./dto.js');
const { logger } = require('../../utils/logger.js');

const getHeroes = (req, res) => {
  try {
    logger.info('Obteniendo información de heroes, en capa CONTROLLER');
    const heroesData = heroeModel.getHeroes();
    
    if ( !heroesData ) {
        logger.info('Error al obtener el array de heroes, en capa CONTROLLER');
        return res.status(500).json({ "message": "Los heroes no estan disponibles en este momento" });
    }
    
    logger.info('Información de heroes obtenida exitosamente, en capa CONTROLLER');
    return res.status(200).json(heroesData);
  } catch (error) {
    logger.error(`Función: getHeroes, ${error.message}, Code: ${error.code}, en capa CONTROLLER`);
    return res.status(500).json({ "message": "Los heroes no estan disponibles en este momento" });
  }
}

const createHeroe = (req, res) => {
    try {
        logger.info('Creando registro de heroe, en capa CONTROLLER');
        const informationHeroe = heroeDto.singleHeroe(req.body);
      
        const heroe = heroeModel.createHeroe(informationHeroe);

        if (!heroe) {
            logger.error('El heroe no se ha podido crear en este momento, en capa CONTROLLER');
            return res.status(500).json({ "message": "El heroe no se ha podido crear en este momento" });
        };

        return res.status(200).json(heroe);
    } catch (error) {
        logger.error(`Función: createHeroe, ${error.message}, Code: ${error.code}, en capa CONTROLLER`);
        return res.status(500).json({ "message": "El heroe no se ha podido crear en este momento" });
    }
}

const editHeroe = (req, res) => {
    try {
        logger.info('Editando registro de heroe, en capa CONTROLLER');
        const informationHeroe = heroeDto.singleHeroe(req.body);
      
        const heroe = heroeModel.editHeroe(informationHeroe);

        if (!heroe) {
            logger.error('El heroe no se ha podido editar en este momento, en capa CONTROLLER');
            return res.status(500).json({ "message": "El heroe no se ha podido editar en este momento" });
        };

        return res.status(200).json(heroe);
    } catch (error) {
        logger.error(`Función: createHeroe, ${error.message}, Code: ${error.code}, en capa CONTROLLER`);
        return res.status(500).json({ "message": "El heroe no se ha podido crear en este momento" });
    }
}

const deleteHeroe = (req, res) => {
    try {
        logger.info('eliminando registro de heroe, en capa CONTROLLER');
        const { id } = heroeDto.singleId(req.params);
      
        const heroe = heroeModel.deleteHeroe(id);

        if (!heroe) {
            logger.error('El heroe no se ha podido eliminar en este momento, en capa CONTROLLER');
            return res.status(500).json({ "message": "El heroe no se ha podido eliminar en este momento" });
        };

        return res.status(200).json(heroe);
    } catch (error) {
        logger.error(`Función: createHeroe, ${error.message}, Code: ${error.code}, en capa CONTROLLER`);
        return res.status(500).json({ "message": "El heroe no se ha podido eliminar en este momento" });
    }
}

module.exports = {
    getHeroes,
    createHeroe,
    editHeroe,
    deleteHeroe,
}