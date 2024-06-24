const validateBody = (req, res, next) => {
    const { body } = req;

    const campo = ["desc", "logo", "url"];
    const nomeCampo = {
        desc: "desc",
        logo: "logo",
        url: "url"
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