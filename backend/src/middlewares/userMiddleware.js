const validateBody = (req, res, next) => {
    const { body } = req;

    const campo = ["nome_completo", "nome_user", "cell_user", "email_user", "senha_user"];
    const nomeCampo = {
        nome_completo: "nome_completo",
        nome_user: "nome_user",
        cell_user: "cell_user",
        email_user: "email_user",
        senha_user: "senha_user"
    };

    for (const field of campo) {
        if (body[field] === undefined) {
            return res.status(400).json({ message: `O campo "${nomeCampo[field]}" é necessário` });
        }
        if (body[field] === "") {
            return res.status(400).json({ message: `O campo "${nomeCampo[field]}" deve ser preenchido` });
        }
    }

    next();
};

module.exports = {
    validateBody,
}