import { Router } from "express";
import { UserController } from "../../controllers/userController"; // Certifique-se de que o caminho está correto

const router = Router();

// Rota para criar um usuário
router.post("/", UserController.createUser);

// Rota para listar todos os usuários
router.get("/", UserController.getAllUsers);

export default router;
