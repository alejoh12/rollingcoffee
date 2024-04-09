import { Container, Table, Button } from "react-bootstrap";
import TablaAdmin from "./TablaAdmin";

const Admin = () => {
  return (
    <Container className="my-3">
      <div className="d-flex justify-content-between">
        <h1 className="display-4">Productos Disponibles</h1>
        <div className="pt-4">
          <Button variant="primary">Agregar</Button>
        </div>
      </div>
      <hr />
      <TablaAdmin></TablaAdmin>
    </Container>
  );
};

export default Admin;
