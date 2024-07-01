const conexao = require("./conexao");

const getAllUser = async () => {
    const [user] = await conexao.query("SELECT * FROM Users");
    return user;
};

const addUser = async (user) => {
    const { nome_completo, nome_user, cell_user, email_user, senha_user } = user;
    
    const [addUser] = await conexao.query(
        `CALL SP_Ins_User(?, ?, ?, ?, ?, @message)`, [nome_completo, nome_user, cell_user, email_user, senha_user]
    );
    return addUser;
};

const delUser = async (id) => {
    const delUser = await conexao.query(
        `CALL SP_Del_User(?, @message)`, [id]
    );
    return delUser;
};

const upUser = async (id, user) => {
    const { nome_completo, nome_user, cell_user, email_user, senha_user } = user;
    
    const [upUser] = await conexao.query(
        `CALL SP_Up_User(?, ?, @message)`, [nome_completo, nome_user, cell_user, email_user, senha_user, id]
    );
    return upUser;
};

module.exports = {
    getAllUser,
    addUser,
    delUser,
    upUser,
}