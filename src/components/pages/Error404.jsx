import { Container, Button } from "react-bootstrap";
import imgError from "../../assets/error404.png";

const Error404 = () => {
  return (
    <main className="mainPage">
    <Container className="text-center">
      <div className="d-flex justify-content-center">
        <img
          src={imgError}
          alt="Imagen del error 404."
          className="img-fluid"
          width={300}
        />
      </div>
      <Button variant="success">Volver a inicio</Button>
    </Container>
    </main>
  );
};

export default Error404;
