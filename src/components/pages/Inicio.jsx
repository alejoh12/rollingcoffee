import { Container } from "react-bootstrap";
import banner from "../../assets/bannerHome.png";
import GrillaInicio from "./GrillaInicio";

const Inicio = () => {
  return (
    <main>
      <img
        src={banner}
        alt="Una foto de nuestra sucursal."
        className="img-fluid w-100"
      />
      <Container className="my-4">
        <h1>Nuestros Productos</h1>
        <hr />
        <GrillaInicio></GrillaInicio>
      </Container>
    </main>
  );
};

export default Inicio;
