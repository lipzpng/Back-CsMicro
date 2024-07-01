const express = require("express");
const servicoController = require("./controllers/servicoController");
const servicoMiddleware = require("./middlewares/servicoMiddleware");

const produtoController = require("./controllers/produtoController");
const produtoMiddleware = require("./middlewares/produtoMiddleware");

const marcaController = require("./controllers/marcaController");
const marcaMiddleware = require("./middlewares/marcaMiddleware");

const modeloController = require("./controllers/modeloController");
const modeloMiddleware = require("./middlewares/modeloMiddleware");

const tipoProdutoController = require("./controllers/tipoProdutoController");
const tipoProdutoMiddleware = require("./middlewares/tipoProdutoMiddleware");

const userController = require("./controllers/userController");
const userMiddleware = require("./middlewares/userMiddleware");

const router = express();

router.get("/servico", servicoController.getAllServico);
router.post("/servico", servicoMiddleware.validateBody, servicoController.addServico);
router.delete("/servico/:id", servicoController.delServico);
router.put("/servico/:id", servicoMiddleware.validateBody, servicoController.upServico);

router.get("/produto", produtoController.getAllProduto);
router.post("/produto", produtoMiddleware.validateBody, produtoController.addProduto);
router.delete("/produto/:id", produtoController.delProduto);
router.put("/produto/:id", produtoMiddleware.validateBody, produtoController.upProduto);

router.get("/marca", marcaController.getAllMarca);
router.post("/marca", marcaMiddleware.validateBody, marcaController.addMarca);
router.delete("/marca/:id", marcaController.delMarca);
router.put("/marca/:id", marcaMiddleware.validateBody, marcaController.upMarca);

router.get("/modelo", modeloController.getAllModelo);
router.post("/modelo", modeloMiddleware.validateBody, modeloController.addModelo);
router.delete("/modelo/:id", modeloController.delModelo);
router.put("/modelo/:id", modeloMiddleware.validateBody, modeloController.upModelo);

router.get("/tipoProduto", tipoProdutoController.getAllTipoProduto);
router.post("/tipoProduto", tipoProdutoMiddleware.validateBody, tipoProdutoController.addTipoProduto);
router.delete("/tipoProduto/:id", tipoProdutoController.delTipoProduto);
router.put("/tipoProduto/:id", tipoProdutoMiddleware.validateBody, tipoProdutoController.upTipoProduto);

router.get("/user", userController.getAllUser);
router.post("/user", userMiddleware.validateBody, userController.addUser);
router.delete("/user/:id", userController.delUser);
router.put("/user/:id", userMiddleware.validateBody, userController.upUser);

module.exports = router;