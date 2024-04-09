import { Card, Button, Col } from "react-bootstrap";

const CardProductoInicio = () => {
  return (
    <Col xs={12} md={6} lg={4}>
      <Card className="my-1">
        <Card.Img
          variant="top"
          src="https://cdn.pixabay.com/photo/2018/01/31/09/57/coffee-3120750_960_720.jpg"
          alt="Foto de cafe."
          className="img-fluid"
        />
        <Card.Body>
          <Card.Title>Cafe</Card.Title>
          <Card.Text>
            Descripción: Una taza de café suave y aromático.
            <br />
            <b>Precio: $2500</b>
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-end">
          <Button variant="success">Ver más</Button>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default CardProductoInicio;
