const produtoModel = require("../models/produtoModel");

const getAllProduto = async (req, res) => {
    const produto = await produtoModel.getAllProduto();
    return res.status(200).json(produto);
};

const addProduto = async (req, res) => {
    const produto = await produtoModel.addProduto(req.body);
    return res.status(201).json(produto), console.log("Produto adicionado");
}

const delProduto = async (req, res) => {
    const { id } = req.params;

    await produtoModel.delProduto(id);
    return res.status(200).json({message: "Produto deletado"}), console.log("Produto deletado");
}

const upProduto = async (req, res) => {
    const { id } = req.params;

    await produtoModel.upProduto(id, req.body);
    return res.status(200).json({message: "Produto alterado"}), console.log("Produto alterado");
}

module.exports = {
    getAllProduto,
    addProduto,
    delProduto,
    upProduto,
};