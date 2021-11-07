const express = require('express');
const router = express.Router();
const turnosController = require('../controllers/turnos.controller');
router.post("/", turnosController.create);
router.get("/", turnosController.find);
router.get("/:id", turnosController.findOne);
router.put("/:id", turnosController.update);
router.delete("/:id", turnosController.remove);
module.exports = router;
