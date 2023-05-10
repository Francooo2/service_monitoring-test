const { logger } = require('../../utils/logger.js');
const fs = require('fs');
const filePath = `${__dirname}/../../data/heroes.json`;

const getHeroes = () => {
  try {
    logger.info('Obteniendo información de heroes, en capa DAO');
    const data = fs.readFileSync(filePath, { encoding: 'utf-8' });
    const parsedData = JSON.parse(data);
    return parsedData;
} catch (error) {
    logger.error(`Función: getHeroes, ${error.message}, Code: ${error.code}, en capa DAO`);
    return false;
  }
}

const createHeroe = (informationHeroe) => {
  try {
    logger.info('Creando registro de heroe, en capa DAO');
    const data = fs.readFileSync(filePath, { encoding: 'utf-8' });
    const parsedData = JSON.parse(data);
    const verifyIdHeroe = parsedData.filter(heroe => heroe.id === informationHeroe.id);
    
    if (verifyIdHeroe.length > 0) {
        return { "message": "Ya existe un heroe que ocupa este id" }
    }

    parsedData.push(informationHeroe);
    parsedData.sort((a, b) => {
        if (a.id > b.id) { return 1; }
        if (a.id < b.id) { return -1; }
        return 0;
    })

    fs.unlinkSync(filePath);
    fs.writeFileSync(filePath, JSON.stringify(parsedData));

    return parsedData;

  } catch (error) {
    logger.error(`Función: createHeroe, ${error.message}, Code: ${error.code}, en capa DAO`);
    return false;
  }
}

const editHeroe = (informationHeroe) => {
  try {
    logger.info('Editando registro de heroe, en capa DAO');
    const data = fs.readFileSync(filePath, { encoding: 'utf-8' });
    const parsedData = JSON.parse(data);
    const verifyIdHeroe = parsedData.filter(heroe => heroe.id === informationHeroe.id);
    
    if (verifyIdHeroe.length === 0) {
        return { "message": "No existe un heroe con este id" }
    };

    parsedData.map(heroe => {
        if (heroe.id === informationHeroe.id) {
            heroe.id = informationHeroe.id
            heroe.name = informationHeroe.name
            heroe.owner = informationHeroe.owner
        }
    })

    fs.unlinkSync(filePath);
    fs.writeFileSync(filePath, JSON.stringify(parsedData));

    return parsedData;

  } catch (error) {
    logger.error(`Función: editHeroe, ${error.message}, Code: ${error.code}, en capa DAO`);
    return false;
  }
}

const deleteHeroe = (id) => {
  try {
    logger.info('Eliminando registro de heroe, en capa DAO');
    const data = fs.readFileSync(filePath, { encoding: 'utf-8' });
    const parsedData = JSON.parse(data);
    const verifyIdHeroe = parsedData.filter(heroe => heroe.id === parseInt(id));
    
    if (verifyIdHeroe.length === 0) {
      return { "message": "No existe un heroe con este id" }
    };
    
    const updateParsedData = parsedData.filter(heroe => heroe.id !== parseInt(id));

    fs.unlinkSync(filePath);
    fs.writeFileSync(filePath, JSON.stringify(updateParsedData));

    return updateParsedData;

  } catch (error) {
    logger.error(`Función: deleteHeroe, ${error.message}, Code: ${error.code}, en capa DAO`);
    return false;
  }
}

module.exports = {
  getHeroes,
  createHeroe,
  editHeroe,
  deleteHeroe,
}
