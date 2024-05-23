import { Button, Table } from "react-bootstrap";

const ItemProductoAdmin = ({producto}) => {
    return (
        <tr>
          <td>{producto.id}</td>
          <td>{producto.nombreProducto}</td>
          <td>{producto.precio}</td>
          <td>
            <img
              src={producto.imagen}
              alt="Imagen del producto"
              className="img-fluid"
              width={150}
            />
          </td>
          <td>{producto.categoria}</td>
          <td className="d-flex">
            <Button variant="warning" className="me-1">
              🖊️
            </Button>
            <Button variant="danger">🗑️</Button>
          </td>
        </tr>
    );
};

export default ItemProductoAdmin;