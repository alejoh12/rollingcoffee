import { Form, Button } from "react-bootstrap";

const FormProducto = () => {
  return (
    <Form
      className="my-2 py-1"
    >
      <Form.Group className="mb-3" controlId="inputNombre">
        <Form.Label>Producto</Form.Label>
        <Form.Control
          type="text"
          placeholder="Ej: Café"
          required
          minLength={2}
          maxLength={20}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="inputPrecio">
        <Form.Label>Precio</Form.Label>
        <Form.Control
          type="text"
          placeholder="Ej: $1000"
          required
          minLength={3}
          maxLength={15}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="inputURL">
        <Form.Label>URL imagen</Form.Label>
        <Form.Control
          type="text"
          placeholder="Ej: https://Pexels.com/Imagenes/cafe.png"
          required
          minLength={5}
          maxLength={100}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="inputCategoria">
        <Form.Label>Categoria</Form.Label>
        <Form.Control
          type="text"
          placeholder="Ej: Bebidas."
          required
          minLength={5}
          maxLength={20}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="inputDescBreve">
        <Form.Label>Descripción Breve</Form.Label>
        <Form.Control
          type="text"
          placeholder="Ej: Un cafe rico."
          required
          minLength={3}
          maxLength={15}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="inputDescAmplia">
        <Form.Label>Descripción Amplia</Form.Label>
        <Form.Control
          type="text"
          placeholder="Ej: Un cafe rico bla bla bla bla bla bla bla..."
          required
          minLength={15}
          maxLength={250}
        />
      </Form.Group>
      <div className="text-center my-2">
        <Button variant="success" type="submit">
          Agregar
        </Button>
      </div>
    </Form>
  );
};

export default FormProducto;
