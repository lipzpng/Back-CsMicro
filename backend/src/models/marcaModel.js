const conexao = require("./conexao");

const getAllMarca = async () => {
    const [marca] = await conexao.query("SELECT * FROM Marca");
    return marca;
};

const addMarca = async (marca) => {
    const { desc, logo, url } = marca;
    
    const [addMarca] = await conexao.query(
        `CALL SP_Ins_Marca(?, ?, ?, @message)`, [desc, logo, url]
    );
    return addMarca;
};

const delMarca = async (id) => {
    const delMarca = await conexao.query(
        `CALL SP_Del_Marca(?, @message)`, [id]
    );
    return delMarca;
};

const upMarca = async (id, marca) => {
    const { desc, logo, url } = marca;
    
    const [upMarca] = await conexao.query(
        `CALL SP_Up_Marca(?, ?, ?, ?, @message)`, [desc, logo, url, id]
    );
    return upMarca;
};

module.exports = {
    getAllMarca,
    addMarca,
    delMarca,
    upMarca,
}