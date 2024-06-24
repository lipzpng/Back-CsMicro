const validateBody = (req, res, next) => {
    const { body } = req;

    const campo = ["desc", "id_cli", "id_tipo", "id_marca", "id_modelo", "num_serie", "capacidade", "problema"];
    const nomeCampo = {
        desc: "desc",
        id_cli: "id_cli",
        id_tipo: "id_tipo",
        id_marca: "id_marca",
        id_modelo: "id_modelo",
        num_serie: "num_serie",
        capacidade: "capacidade",
        problema: "problema"
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