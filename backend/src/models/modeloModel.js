const conexao = require("./conexao");

const getAllModelo = async () => {
    const [modelo] = await conexao.query("SELECT * FROM Modelo");
    return modelo;
};

const addModelo = async (modelo) => {
    const { desc } = modelo;
    
    const [addModelo] = await conexao.query(
        `CALL SP_Ins_Modelo(?, @message)`, [desc]
    );
    return addModelo;
};

const delModelo = async (id) => {
    const delModelo = await conexao.query(
        `CALL SP_Del_Modelo(?, @message)`, [id]
    );
    return delModelo;
};

const upModelo = async (id, modelo) => {
    const { desc } = modelo;
    
    const [upModelo] = await conexao.query(
        `CALL SP_Up_Modelo(?, ?, @message)`, [desc, id]
    );
    return upModelo;
};

module.exports = {
    getAllModelo,
    addModelo,
    delModelo,
    upModelo,
}