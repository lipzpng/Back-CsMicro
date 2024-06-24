const conexao = require("./conexao");

const getAllTipoProduto = async () => {
    const [tipoPdt] = await conexao.query("SELECT * FROM TipoProduto");
    return tipoPdt;
};

const addTipoProduto = async (tipoPdt) => {
    const { desc } = tipoPdt;
    
    const [addTipoProduto] = await conexao.query(
        `CALL SP_Ins_TipoProduto(?, @message)`, [desc]
    );
    return addTipoProduto;
};

const delTipoProduto = async (id) => {
    const delTipoProduto = await conexao.query(
        `CALL SP_Del_TipoProduto(?, @message)`, [id]
    );
    return delTipoProduto;
};

const upTipoProduto = async (id, tipoPdt) => {
    const { desc } = tipoPdt;
    
    const [upTipoProduto] = await conexao.query(
        `CALL SP_Up_TipoProduto(?, ?, @message)`, [desc, id]
    );
    return upTipoProduto;
};

module.exports = {
    getAllTipoProduto,
    addTipoProduto,
    delTipoProduto,
    upTipoProduto,
}