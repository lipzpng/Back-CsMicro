const userModel = require("../models/userModel");

const getAllUser = async (req, res) => {
    const user = await userModel.getAllUser();
    return res.status(200).json(user);
};

const addUser = async (req, res) => {
    const user = await userModel.addUser(req.body);
    return res.status(201).json(user), console.log("User adicionada");
}

const delUser = async (req, res) => {
    const { id } = req.params;

    await userModel.delUser(id);
    return res.status(200).json({message: "User deletada"}), console.log("User deletada");
}

const upUser = async (req, res) => {
    const { id } = req.params;

    await userModel.upUser(id, req.body);
    return res.status(200).json({message: "User alterada"}), console.log("User alterada");
}

module.exports = {
    getAllUser,
    addUser,
    delUser,
    upUser,
};