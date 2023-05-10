const singleHeroe = (heroe) => ({
    id: heroe.id,
    name: heroe.name,
    owner: heroe.owner,
});

const singleId = (heroe) => ({
    id: heroe.id,
});

module.exports = { 
    singleHeroe,
    singleId,
};