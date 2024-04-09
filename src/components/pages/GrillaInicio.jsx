import CardProductoInicio from "./producto/CardProductoInicio.jsx";
import { Row } from "react-bootstrap";

const GrillaInicio = () => {
  return (
    <Row className="my-2 mt-4 mb-4">
      <CardProductoInicio></CardProductoInicio>
      <CardProductoInicio></CardProductoInicio>
      <CardProductoInicio></CardProductoInicio>
      <CardProductoInicio></CardProductoInicio>
    </Row>
  );
};

export default GrillaInicio;
