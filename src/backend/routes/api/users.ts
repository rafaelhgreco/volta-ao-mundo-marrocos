import express from "express";
import userController from "../../controllers/userController"; // 🔥 Caminho correto para o controller

const router = express.Router();

// Definindo as rotas da API
router.get("/", userController.getAllUsers);
// router.get("/:id", userController.getUserById);

export default router;
