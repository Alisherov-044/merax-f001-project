import { Header } from "@/components";
import { HomePage } from "@/pages";
import { Route, Routes } from "react-router-dom";

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
            </Routes>
        </>
    );
}

export default App;
