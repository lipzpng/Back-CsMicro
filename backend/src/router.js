const express = require("express");
const servicoController = require("./controllers/servicoController");
const servicoMiddleware = require("./middlewares/servicoMiddleware")

const router = express();

router.get("/servico", servicoController.getAllServico);
router.post("/servico", servicoMiddleware.validateBody, servicoController.addServico);
router.delete("/servico/:id", servicoController.delServico);
router.put("/servico/:id", servicoController.upServico);

module.exports = router;