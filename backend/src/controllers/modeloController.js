const modeloModel = require("../models/modeloModel");

const getAllModelo = async (req, res) => {
    const modelo = await modeloModel.getAllModelo();
    return res.status(200).json(modelo);
};

const addModelo = async (req, res) => {
    const modelo = await modeloModel.addModelo(req.body);
    return res.status(201).json(modelo), console.log("Modelo adicionada");
}

const delModelo = async (req, res) => {
    const { id } = req.params;

    await modeloModel.delModelo(id);
    return res.status(200).json({message: "Modelo deletada"}), console.log("Modelo deletada");
}

const upModelo = async (req, res) => {
    const { id } = req.params;

    await modeloModel.upModelo(id, req.body);
    return res.status(200).json({message: "Modelo alterada"}), console.log("Modelo alterada");
}

module.exports = {
    getAllModelo,
    addModelo,
    delModelo,
    upModelo,
};