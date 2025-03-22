import express from "express";
import userController from "../../controllers/userController";

const router: express.Router = express.Router();

router.get("/", userController.getAllUsers);
router.get("/:id", userController.getUserById);

export default router;
