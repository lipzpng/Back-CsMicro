const validateBody = (req, res, next) => {
    const { body } = req;

    if(body.title == undefined) {
        return res.status(400).json({message: "O campo 'title' é necessário"});
    }

    if(body.title == "") {
        return res.status(400).json({message: "O campo 'title' deve ser preenchido"});
    }

    next();
};

module.exports = {
    validateBody,
}