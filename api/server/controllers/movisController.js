const peliculas = require('../v1/js/module/peliculas.js')

const getAllMovis = async(req, res)=>{
    const obj = new peliculas();
    res.status(201).json(await obj.getAllPeliculasConLugarYDuracion())
}

const getMovisInBillboard = async(req, res)=>{
    const obj = new peliculas();
    res.status(201).json(await obj.getAllPeliculasConLugarYDuracion())
}


const getMovie = async (req, res) => {
    const obj = new peliculas();
    const nombrePelicula = req.query.nombre; 
    let resModel = await obj.getPelicula(nombrePelicula);
    if (resModel) {
        res.status(200).json(resModel);
    } else {
        res.status(404).json({ message: 'Película no encontrada' });
    }
};

const getMovieForId = async (req, res) => {
    const obj = new peliculas();
    const id_pelicula = req.query.id; 
    let resModel = await obj.getPeliculaForId(id_pelicula);
    if (resModel) {
        res.status(200).json(resModel);
    } else {
        res.status(404).json({ message: 'Película no encontrada' });
    }
};


module.exports = {
    getAllMovis,
    getMovisInBillboard,
    getMovie,
    getMovieForId
}