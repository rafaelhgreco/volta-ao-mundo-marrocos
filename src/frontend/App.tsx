import { Header } from "./components/header/header";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/homepage";

export const App = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
            </Routes>
        </>
    );
};
