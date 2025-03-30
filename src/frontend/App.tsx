import { Header } from "./components/header/header";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/homepage";
import { ReligionPage } from "./pages/religion";
import { AboutPage } from "./pages/about";
import { GaleriaPage } from "./pages/galeriapage";

export const App = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/religion" element={<ReligionPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/galeria" element={<GaleriaPage />} />
            </Routes>
        </>
    );
};
