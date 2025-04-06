import { Header } from "./components/header/header";
import { Route, Routes, HashRouter } from "react-router-dom";
import { HomePage } from "./pages/homepage";
import { ReligionPage } from "./pages/religion";
import { AboutPage } from "./pages/about";
import { GaleriaPage } from "./pages/galeriapage";
import FormularioDuvida from "./pages/formsquestion";

export const App = () => {
    return (
        <HashRouter>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/religion" element={<ReligionPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/galeria" element={<GaleriaPage />} />
                <Route path="/formsquestion" element={<FormularioDuvida />} />
            </Routes>
        </HashRouter>
    );
};
