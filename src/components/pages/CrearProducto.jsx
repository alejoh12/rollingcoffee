import {Container,Form} from "react-bootstrap";
import FormProducto from "./producto/FormProducto";

const CrearProducto = () => {
    return (
        <Container className="my-3">
            <h1 className="display-3">Nuevo Producto</h1>
            <hr />
            <FormProducto></FormProducto>
        </Container>
    );
};

export default CrearProducto;