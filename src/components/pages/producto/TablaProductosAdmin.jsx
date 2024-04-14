import { Table, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import { leerProductoAPI } from "../../../helpers/queries";

const TablaProductosAdmin = () => {
  const [productos, setProductos] = useState([]);

  useEffect( () => {
    obtenerProductos();
  }, []);
  
  const obtenerProductos = async() => {
    const respuesta = await leerProductoAPI();
    if(respuesta.status === 200) {
      // Guardar el array en el state.
      const datos = await respuesta.json();
      setProductos(datos);
    } else {
      s
    }    
  }

  return (
    <Table striped bordered hover>
      <thead>
        <tr className="text-center">
          <th>Cod</th>
          <th>Producto</th>
          <th>Precio</th>
          <th>URL de la Imagen</th>
          <th>Categoria</th>
          <th>Opciones</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Café Americano</td>
          <td>$2500</td>
          <td>
            <img
              src="https://cdn.pixabay.com/photo/2018/01/31/09/57/coffee-3120750_960_720.jpg"
              alt="Imagen de Cafe americano"
              className="img-fluid"
              width={150}
            />
          </td>
          <td>Bebida Caliente</td>
          <td className="d-flex">
            <Button variant="warning" className="me-1">
              🖊️
            </Button>
            <Button variant="danger">🗑️</Button>
          </td>
        </tr>
        <tr>
          <td>2</td>
          <td>Capuchino</td>
          <td>$3500</td>
          <td>
            <img
              src="https://cdn.pixabay.com/photo/2017/08/07/22/57/coffee-2608864_960_720.jpg"
              alt="Imagen de Cafe americano"
              className="img-fluid"
              width={150}
            />
          </td>
          <td>Bebida Caliente</td>
          <td className="d-flex">
            <Button variant="warning" className="me-1">
              🖊️
            </Button>
            <Button variant="danger">🗑️</Button>
          </td>
        </tr>
        <tr>
          <td>3</td>
          <td>Croissant de Chocolate</td>
          <td>$1800</td>
          <td>
            <img
              src="https://media.istockphoto.com/id/935360324/es/foto/cruasanes-reci%C3%A9n-hechos-con-chocolate-sobre-la-mesa-desayuno-delicioso.jpg?s=1024x1024&w=is&k=20&c=UINPWFHGd2X-9oz0C6Ir77shfJUtMBMAaRjJHG4siw8="
              alt="Imagen de Cafe americano"
              className="img-fluid"
              width={150}
            />
          </td>
          <td>Reposteria</td>
          <td className="d-flex">
            <Button variant="warning" className="me-1">
              🖊️
            </Button>
            <Button variant="danger">🗑️</Button>
          </td>
        </tr>
        <tr>
          <td>4</td>
          <td>Té Verde</td>
          <td>$2000</td>
          <td>
            <img
              src="https://media.istockphoto.com/id/628986454/es/foto/taza-de-vidrio-con-t%C3%A9-verde-fresco.jpg?s=1024x1024&w=is&k=20&c=aZWFO8JZ3KqKxJrtaq-ALG-geZKg4bCqWgmsQOLb7Z4="
              alt="Imagen de Cafe americano"
              className="img-fluid"
              width={150}
            />
          </td>
          <td>Bebida Caliente</td>
          <td className="d-flex">
            <Button variant="warning" className="me-1">
              🖊️
            </Button>
            <Button variant="danger">🗑️</Button>
          </td>
        </tr>
      </tbody>
    </Table>
  );
};

export default TablaProductosAdmin;
