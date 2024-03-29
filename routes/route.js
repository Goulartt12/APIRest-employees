const express = require("express");
const controller = require("../controller/controller.js");

const router = express.Router();

router.get("/api", controller.get);
router.get("/api/:employee_id", controller.getById);
router.post("/api", controller.create);
router.put("/api/:employee_id", controller.updateById);
router.delete("/api/:employee_id", controller.deleteById);

module.exports = router;