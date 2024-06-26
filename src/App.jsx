import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import Footer from "./components/common/Footer.jsx";
import Menu from "./components/common/Menu.jsx";
import Inicio from "./components/pages/Inicio.jsx";
import Admin from "./components/pages/Admin.jsx";
import Error404 from "./components/pages/Error404.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetalleProducto from "./components/pages/DetalleProducto.jsx";
import CrearProducto from "./components/pages/CrearProducto.jsx";

function App() {
  return (
    // administrador de rutas
    <BrowserRouter>
      <Menu></Menu>
      <Routes>
        <Route exact path="/" element={<Inicio></Inicio>}></Route>
        <Route exact path="/producto" element={<DetalleProducto></DetalleProducto>}></Route>
        <Route exact path="/administrador" element={<Admin></Admin>}></Route>
        <Route exact path="/administrador/agregar" element={<CrearProducto></CrearProducto>}></Route>
        <Route path="*" element={<Error404></Error404>}></Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
