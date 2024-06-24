const conexao = require("./conexao");

const getAllServico = async () => {
    const [servico] = await conexao.query("SELECT * FROM Servico");
    return servico;
};

const addServico = async (servico) => {
    const { title, desc, img, ordem, url } = servico;
    
    const [addServico] = await conexao.query(
        `CALL SP_Ins_Servico(?, ?, ?, ?, ?, ?, @message)`, [title, desc, img, ordem, url, true]
    );
    return addServico;
};

const delServico = async (id) => {
    const delServico = await conexao.query(
        `CALL SP_Del_Servico(?, ?, @message)`, [id, false]
    );
    return delServico;
};

const upServico = async (id, servico) => {
    const { title, desc, img, ordem, url} = servico;
    
    const [upServico] = await conexao.query(
        `CALL SP_Up_Servico(?, ?, ?, ?, ?, ?, @message)`, [title, desc, img, ordem, url, id]
    );
    return upServico;
};

module.exports = {
    getAllServico,
    addServico,
    delServico,
    upServico,
}