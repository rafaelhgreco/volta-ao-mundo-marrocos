import express from "express";
import cors from "cors";
import userRoutes from "./routes/api/users"; // Importando as rotas dos usuários

const app = express();

app.use(express.json()); // Para parsear JSON no corpo das requisições
app.use(cors()); // Para permitir requisições de diferentes origens

// Registrando as rotas de usuários com o prefixo "/users"
app.use("/users", userRoutes);

// Configurando a porta em que o servidor vai escutar
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});
