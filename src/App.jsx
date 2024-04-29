import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./pages/inicio/Inicio"
import Sobre from "./pages/sobre/Sobre"
import Contato from "./pages/contato/Contato"
import Projects from "./pages/routs/Projects"
import { GlobalStyle } from "./components/Header/styled";



export default function App() {
  return (
    <>
    <GlobalStyle/>
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio/>}/>
        <Route path="/sobre" element={<Sobre/>}/>
        <Route path="/routs" element={<Projects/>}/>
        <Route path="/contato" element={<Contato/>}/>
      </Routes>
   </BrowserRouter>

    </>
  )
}

