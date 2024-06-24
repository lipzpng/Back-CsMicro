const tipoProdutoModel = require("../models/tipoProdutoModel");

const getAllTipoProduto = async (req, res) => {
    const tipoPdt = await tipoProdutoModel.getAllTipoProduto();
    return res.status(200).json(tipoPdt);
};

const addTipoProduto = async (req, res) => {
    const tipoPdt = await tipoProdutoModel.addTipoProduto(req.body);
    return res.status(201).json(tipoPdt), console.log("TipoProduto adicionada");
}

const delTipoProduto = async (req, res) => {
    const { id } = req.params;

    await tipoProdutoModel.delTipoProduto(id);
    return res.status(200).json({message: "TipoProduto deletada"}), console.log("TipoProduto deletada");
}

const upTipoProduto = async (req, res) => {
    const { id } = req.params;

    await tipoProdutoModel.upTipoProduto(id, req.body);
    return res.status(200).json({message: "TipoProduto alterada"}), console.log("TipoProduto alterada");
}

module.exports = {
    getAllTipoProduto,
    addTipoProduto,
    delTipoProduto,
    upTipoProduto,
};