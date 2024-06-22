const conexao = require("../models/conexao");
const servicoModel = require("../models/servicoModel");

const getAllServico = async (req, res) => {
    const servico = await servicoModel.getAllServico();
    return res.status(200).json(servico);
};

const addServico = async (req, res) => {
    const servico = await servicoModel.addServico(req.body);
    return res.status(201).json(servico), console.log("Servico adicionado");
}

const delServico = async (req, res) => {
    const { id } = req.params;

    await servicoModel.delServico(id);
    return res.status(200).json({message: "Servico deletado"}), console.log("Servico deletado");
}

const upServico = async (req, res) => {
    const { id } = req.params;

    await servicoModel.upServico(id, req.body);
    return res.status(200).json({message: "Servico alterado"}), console.log("Servico alterado");
}

module.exports = {
    getAllServico,
    addServico,
    delServico,
    upServico,
};