import { Table, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import { leerProductoAPI } from "../../../helpers/queries";
import Swal from "sweetalert2";
import ItemProductoAdmin from "./ItemProductoAdmin";

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
      Swal.fire({
        title: "Ocurrio un error",
        text: `Intenta esta operación en unos minutos`,
        icon: "error",
      });
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
        {
          productos.map((producto)=> <ItemProductoAdmin key={producto.id} producto={producto}></ItemProductoAdmin>)
        }
      </tbody>
    </Table>
  );
};

export default TablaProductosAdmin;
