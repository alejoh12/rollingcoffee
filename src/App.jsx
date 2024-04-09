import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/common/Footer.jsx";
import Menu from "./components/common/Menu.jsx";
import Inicio from "./components/pages/Inicio.jsx";

function App() {
  return (
    <>
      <div className="mainPage">
        <Menu></Menu>
        <Inicio></Inicio>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
