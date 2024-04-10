import { Container, Button } from "react-bootstrap";
import TablaProductosAdmin from "./producto/TablaProductosAdmin";

const Admin = () => {
  return (
    <Container className="my-3">
      <div className="d-flex justify-content-between">
        <h1 className="display-4">Productos Disponibles</h1>
        <div className="pt-4">
          <Button variant="primary" to="/administrador/agregar">
          <i className="bi bi-file-earmark-plus"></i>
          </Button>
        </div>
      </div>
      <hr />
      <TablaProductosAdmin></TablaProductosAdmin>
    </Container>
  );
};

export default Admin;
