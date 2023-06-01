import Body from "./body";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Cadastro from "./cadastro";
import Login from "./login";
import Pesquisa from "./pesquisa";


export function Router() {

    return(
        <BrowserRouter>
            <Routes>
                <Route path="*" element={<Body />} />

                <Route path="/pesquisa" element={<Pesquisa />} />

                <Route path="/cadastro" element={<Cadastro />} />

                <Route path="/login" element={<Login/>} />
            </Routes>
        </BrowserRouter>
    )
}