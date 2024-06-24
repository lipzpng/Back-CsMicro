const conexao = require("./conexao");

const getAllProduto = async () => {
    const [produto] = await conexao.query("SELECT * FROM Produto");
    return produto;
};

const addProduto = async (produto) => {
    const { desc, id_cli, id_tipo, id_marca, id_modelo, num_serie, capacidade, problema } = produto;
    
    const [addProduto] = await conexao.query(
        `CALL SP_Ins_Produto(?, ?, ?, ?, ?, ?, ?, ?, @message)`, [desc, id_cli, id_tipo, id_marca, id_modelo, num_serie, capacidade, problema]
    );
    return addProduto;
};

const delProduto = async (id) => {
    const delProduto = await conexao.query(
        `CALL SP_Del_Produto(?, @message)`, [id]
    );
    return delProduto;
};

const upProduto = async (id, produto) => {
    const { desc, id_cli, id_tipo, id_marca, id_modelo, num_serie, capacidade, problema } = produto;
    
    const [upProduto] = await conexao.query(
        `CALL SP_Up_Produto(?, ?, ?, ?, ?, ?, ?, ?, ?, @message)`, [desc, id_cli, id_tipo, id_marca, id_modelo, num_serie, capacidade, problema, id]
    );
    return upProduto;
};

module.exports = {
    getAllProduto,
    addProduto,
    delProduto,
    upProduto,
}