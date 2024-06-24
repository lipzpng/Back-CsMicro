const validateBody = (req, res, next) => {
    const { body } = req;

    if (body.desc === undefined) {
        return res.status(400).json({ message: `O campo "desc" é necessário` });
    }
    if (body.desc === "") {
        return res.status(400).json({ message: `O campo "desc" deve ser preenchido` });
    }

    next();
};

module.exports = {
    validateBody,
}