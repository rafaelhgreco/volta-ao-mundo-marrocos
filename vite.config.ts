import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
    plugins: [react(), tailwindcss()],
    build: {
        outDir: "dist", // Alterado para a raiz do projeto
        emptyOutDir: true,
    },
    base: "/volta-ao-mundo-marrocos/",
});
