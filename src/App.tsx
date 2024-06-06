import { Header } from "@/components";
import { HomePage } from "@/pages";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";

function App() {    
    const cart = useSelector((state) => state.cart)

    console.log(cart)

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
