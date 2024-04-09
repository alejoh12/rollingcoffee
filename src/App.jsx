import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/common/Footer.jsx";
import Menu from "./components/common/Menu.jsx";
import Inicio from "./components/pages/Inicio.jsx";
import Admin from "./components/pages/Admin.jsx";
import Error404 from "./components/pages/Error404.jsx";

function App() {
  return (
    <>
      <div className="mainPage">
        <Menu></Menu>
        <Inicio></Inicio>
        {/* <Admin></Admin> */}
        {/* <Error404></Error404> */}
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
