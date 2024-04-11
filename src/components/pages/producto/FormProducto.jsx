import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";

const FormProducto = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (producto) => {
    console.log(producto);
  };

  return (
    <Form className="my-2 py-1" onSubmit={handleSubmit(onSubmit)}>
      <Form.Group className="mb-3" controlId="inputNombre">
        <Form.Label>Producto</Form.Label>
        <Form.Control
          type="text"
          placeholder="Ej: Café"
          {...register("nombreProducto", {
            required: "El nombre del producto es obligatorio.",
            minLength: {
              value: 2,
              message: "Debe ingresar como mínimo 2 caracteres.",
            },
            maxLength: {
              value: 30,
              message: "Debe ingresar como maximo 30 caracteres.",
            },
          })}
        />
        <Form.Text className="text-danger">{errors.nombreProducto?.message}</Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="inputPrecio">
        <Form.Label>Precio</Form.Label>
        <Form.Control
          type="number"
          placeholder="Ej: $1000"
          {...register("precio", {
            required: "El precio del producto es obligatorio.",
            min: {
              value: 100,
              message: "El precio mínimo es $100.",
            },
            max: {
              value: 50000,
              message: "El precio máximo es $50.000.",
            },
          })}
        />
        <Form.Text className="text-danger">{errors.precio?.message}</Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="inputURL">
        <Form.Label>URL imagen</Form.Label>
        <Form.Control
          type="text"
          placeholder="Ej: https://Pexels.com/Imagenes/cafe.png"
        />
        <Form.Text className="text-danger">prueba de error</Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="inputCategoria">
        <Form.Label>Categoria</Form.Label>
        <Form.Select aria-label="Default select example">
          <option>Seleccione una categoria</option>
          <option value="1">Infusiones</option>
          <option value="2">Batidos</option>
          <option value="3">Dulce</option>
          <option value="4">Salado</option>
        </Form.Select>
        <Form.Text className="text-danger">prueba de error</Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="inputDescBreve">
        <Form.Label>Descripción Breve</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          type="text"
          placeholder="Ej: Un cafe rico."
        />
        <Form.Text className="text-danger">prueba de error</Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="inputDescAmplia">
        <Form.Label>Descripción Amplia</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          type="text"
          placeholder="Ej: Un cafe rico bla bla bla bla bla bla bla..."
        />
        <Form.Text className="text-danger">prueba de error</Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="inputDisponibilidad">
        <Form.Label>Disponibilidad</Form.Label>
        <Form.Select aria-label="disponibilidad">
          <option>Seleccione una opción</option>
          <option value="1">Si</option>
          <option value="2">No</option>
        </Form.Select>
        <Form.Text className="text-danger">prueba de error</Form.Text>
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
