import express from "express";
import cors from "cors";
import userRoutes from "./routes/api/users";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/users", userRoutes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});
