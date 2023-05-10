const heroesDao = require('./dao.js');
const { logger } = require('../../utils/logger.js');

const getHeroes = () => {
  try {
    logger.info('Obteniendo información de heroes, en capa MODEL');
    return heroesDao.getHeroes();
  } catch (error) {
    logger.error(`Función: getHeroes, ${error.message}, Code: ${error.code}, en capa MODEL`);
    return false
  }
}

const createHeroe = (informationHeroe) => {
  try {
    logger.info('Creando registro de heroe, en capa MODEL');
    return heroesDao.createHeroe(informationHeroe);
  } catch (error) {
    logger.error(`${error.message}, Code: ${error.code}, en capa MODEL`);
    return false
  }
}

const editHeroe = (informationHeroe) => {
  try {
    logger.info('Editando registro de heroe, en capa MODEL');
    return heroesDao.editHeroe(informationHeroe);
  } catch (error) {
    logger.error(`${error.message}, Code: ${error.code}, en capa MODEL`);
    return false
  }
}

const deleteHeroe = (id) => {
  try {
    logger.info('Eliminando registro de heroe, en capa MODEL');
    return heroesDao.deleteHeroe(id);
  } catch (error) {
    logger.error(`${error.message}, Code: ${error.code}, en capa MODEL`);
    return false
  }
}

module.exports = {
  getHeroes,
  createHeroe,
  editHeroe,
  deleteHeroe,
};