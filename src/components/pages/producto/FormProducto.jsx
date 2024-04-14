import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import "../../../helpers/queries.js";
import { crearProductoAPI } from "../../../helpers/queries.js";
import Swal from "sweetalert2";

const FormProducto = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (producto) => {
    console.log(producto);
    // Llamar a la funcion encargada de pedirle a la api crear un producto
    const respuesta = await crearProductoAPI(producto);
    // Agregar mensaje si es cod 201, sino mostrar error.
    if (respuesta.status === 201) {
      Swal.fire({
        title: "Producto Creado",
        text: `El producto ${producto.nombreProducto} fué creado con total exito.`,
        icon: "success",
      });
      reset();
    } else {
      Swal.fire({
        title: "Ocurrio un error",
        text: `El producto ${producto.nombreProducto} no pudo ser creado. Intenta esta operación en unos minutos`,
        icon: "error",
      });
    }
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
        <Form.Text className="text-danger">
          {errors.nombreProducto?.message}
        </Form.Text>
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
          {...register("imagen", {
            required: "La imagen del producto es obligatorio.",
            pattern: {
              value: /(http)?s?:?(\/\/[^"']*\.(?:png|jpg|jpeg|gif|png|svg))/i,
              message:
                "Debe ingresar URL de imagen valida (png | jpg | jpeg | gif | png | svg).",
            },
          })}
        />
        <Form.Text className="text-danger">{errors.imagen?.message}</Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="inputCategoria">
        <Form.Label>Categoria</Form.Label>
        <Form.Select
          aria-label="Default select example"
          {...register("categoria", {
            required: "La categoria del producto es obligatorio.",
          })}
        >
          <option value="">Seleccione una categoria</option>
          <option value="infusion">Infusion</option>
          <option value="batido">Batido</option>
          <option value="dulce">Dulce</option>
          <option value="salado">Salado</option>
        </Form.Select>
        <Form.Text className="text-danger">
          {errors.categoria?.message}
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="inputDescBreve">
        <Form.Label>Descripción Breve</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          type="text"
          placeholder="Ej: Un cafe rico."
          {...register("descripcionBreve", {
            required: "La descripción breve del producto es obligatorio.",
            minLength: {
              value: 5,
              message: "Debe ingresar como mínimo 5 caracteres.",
            },
            maxLength: {
              value: 15,
              message: "Debe ingresar como maximo 15 caracteres.",
            },
          })}
        />
        <Form.Text className="text-danger">
          {errors.descripcionBreve?.message}
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="inputDescAmplia">
        <Form.Label>Descripción Amplia</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          type="text"
          placeholder="Ej: Un cafe rico bla bla bla bla bla bla bla..."
          {...register("descripcionAmplia", {
            required: "La descripción amplia del producto es obligatorio.",
            minLength: {
              value: 30,
              message: "Debe ingresar como mínimo 30 caracteres.",
            },
            maxLength: {
              value: 250,
              message: "Debe ingresar como maximo 250 caracteres.",
            },
          })}
        />
        <Form.Text className="text-danger">
          {errors.descripcionAmplia?.message}
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="inputDisponibilidad">
        <Form.Label>Disponibilidad</Form.Label>
        <Form.Select
          aria-label="disponibilidad"
          {...register("disponible", {
            required: "La disponibilidad del producto es obligatorio.",
          })}
        >
          <option value="">Seleccione una opción</option>
          <option value="si">Si</option>
          <option value="no">No</option>
        </Form.Select>
        <Form.Text className="text-danger">
          {errors.disponible?.message}
        </Form.Text>
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
