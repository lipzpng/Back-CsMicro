const marcaModel = require("../models/marcaModel");

const getAllMarca = async (req, res) => {
    const marca = await marcaModel.getAllMarca();
    return res.status(200).json(marca);
};

const addMarca = async (req, res) => {
    const marca = await marcaModel.addMarca(req.body);
    return res.status(201).json(marca), console.log("Marca adicionada");
}

const delMarca = async (req, res) => {
    const { id } = req.params;

    await marcaModel.delMarca(id);
    return res.status(200).json({message: "Marca deletada"}), console.log("Marca deletada");
}

const upMarca = async (req, res) => {
    const { id } = req.params;

    await marcaModel.upMarca(id, req.body);
    return res.status(200).json({message: "Marca alterada"}), console.log("Marca alterada");
}

module.exports = {
    getAllMarca,
    addMarca,
    delMarca,
    upMarca,
};