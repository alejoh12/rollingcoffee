import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer.jsx";
import { Container } from "react-bootstrap";

function App() {
  return (
    <>
      <Container className="my-4 mainPage"></Container>
      <Footer></Footer>
    </>
  );
}

export default App;
