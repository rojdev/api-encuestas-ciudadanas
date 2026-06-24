const path = require('path'); // Importa el módulo path

async function Cintillo(req, res) {
    const imagePath = path.join(__dirname, '..', 'public', 'CINTILLO.png');
res.sendFile(imagePath);
}

async function admfinanciera(req, res) {
    const imagePath = path.join(__dirname, '..', 'public','logo-direcciones-institutos', 'administracion-financiera.png');
    res.sendFile(imagePath);
}

async function camerbasma(req, res) {
    const imagePath = path.join(__dirname, '..', 'public','logo-direcciones-institutos', 'camerbasma.png');
    res.sendFile(imagePath);
}

async function catastro(req, res) {
    const imagePath = path.join(__dirname, '..', 'public','logo-direcciones-institutos', 'catastro.png');
    res.sendFile(imagePath);
}

async function cednna(req, res) {
    const imagePath = path.join(__dirname, '..', 'public','logo-direcciones-institutos', 'CEDNNA.png');
    res.sendFile(imagePath);
}

async function companias(req, res) {
    const imagePath = path.join(__dirname, '..', 'public','logo-direcciones-institutos', 'companias.png');
    res.sendFile(imagePath);
}

async function comresis(req, res) {
    const imagePath = path.join(__dirname, '..', 'public','logo-direcciones-institutos', 'COMRESIS.png');
    res.sendFile(imagePath);
}

async function comter(req, res) {
    const imagePath = path.join(__dirname, '..', 'public','logo-direcciones-institutos', 'comter.png');
    res.sendFile(imagePath);
}

async function prensa(req, res) {
    const imagePath = path.join(__dirname, '..', 'public','logo-direcciones-institutos', 'comunicacion-y-prensa.png');
    res.sendFile(imagePath);
}

async function fundanino(req, res) {
    const imagePath = path.join(__dirname, '..', 'public','logo-direcciones-institutos', 'funda-nino.png');
    res.sendFile(imagePath);
}

async function iapacep(req ,res) {
    const imagePath = path.join(__dirname, '..', 'public','logo-direcciones-institutos', 'IAPACEP.png');
    res.sendFile(imagePath);
}

async function imdep(req, res) {
    const imagePath = path.join(__dirname, '..', 'public','logo-direcciones-institutos', 'IMDEP.png');
    res.sendFile(imagePath);
}

async function infraestructura(req, res) {
    const imagePath = path.join(__dirname, '..', 'public','logo-direcciones-institutos', 'INFRAESTRUCTURA.png');
    res.sendFile(imagePath);
}

async function inmujer(req ,res) {
    const imagePath = path.join(__dirname, '..', 'public','logo-direcciones-institutos', 'inmujer.png');
    res.sendFile(imagePath);
}

async function innovacion(req, res) {
    const imagePath = path.join(__dirname, '..', 'public','logo-direcciones-institutos', 'inovacion-digital.png');
    res.sendFile(imagePath);
}

async function imderpaez(req, res) {
    const imagePath = path.join(__dirname, '..', 'public','logo-direcciones-institutos', 'imderpaez.png');
    res.sendFile(imagePath);
}

async function talentohumano(req, res) {
    const imagePath = path.join(__dirname, '..', 'public','logo-direcciones-institutos', 'logo-talento-humano.png');
    res.sendFile(imagePath);
}

async function pc(req, res) {
    const imagePath = path.join(__dirname, '..', 'public','logo-direcciones-institutos', 'pc.png');
    res.sendFile(imagePath);
}

async function planificacionydesarrollo(req, res) {
    const imagePath = path.join(__dirname, '..', 'public','logo-direcciones-institutos', 'plan-desarrollo.jpg');
    res.sendFile(imagePath);
}

async function polsociales(req, res) {
    const imagePath = path.join(__dirname, '..', 'public','logo-direcciones-institutos', 'pol-sociales.png');
    res.sendFile(imagePath);
}

async function regcivil(req, res) {
    const imagePath = path.join(__dirname, '..', 'public','logo-direcciones-institutos', 'reg-civil.png');
    res.sendFile(imagePath);
}

async function servpublicos(req, res) {
    const imagePath = path.join(__dirname, '..', 'public','logo-direcciones-institutos', 'serv-publicos.png');
    res.sendFile(imagePath);
}

async function protecfamiliar(req, res) {
    const imagePath = path.join(__dirname, '..', 'public','logo-direcciones-institutos', 'sis-protec-familiar.png');
    res.sendFile(imagePath);
}

async function tatiana(req, res) {
    const imagePath = path.join(__dirname, '..', 'public','logo-direcciones-institutos', 'tatiana_.png');
    res.sendFile(imagePath);
}

async function turismo(req, res) {
    const imagePath = path.join(__dirname, '..', 'public','logo-direcciones-institutos', 'turismo.png');
    res.sendFile(imagePath);
}

module.exports = { 
    Cintillo, 
    polsociales, 
    admfinanciera, 
    camerbasma, 
    catastro, 
    cednna, 
    companias, 
    comresis, 
    comter,
    prensa,
    fundanino,
    iapacep,
    imdep,
    infraestructura,
    inmujer,
    innovacion,
    imderpaez,
    talentohumano,
    pc,
    planificacionydesarrollo,
    regcivil,
    servpublicos,
    protecfamiliar,
    tatiana,
    turismo
};