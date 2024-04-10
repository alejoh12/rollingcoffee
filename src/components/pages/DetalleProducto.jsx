import { Card, Row, Container, Col } from "react-bootstrap";

const DetalleProducto = () => {
  return (
    <Container className="my-4 mainPage">
      <Card>
        <Row>
          <Col md={6} className="d-flex align-items-center">
            <Card.Img
              variant="top"
              src="https://cdn.pixabay.com/photo/2018/01/31/09/57/coffee-3120750_960_720.jpg"
              alt="imagen de café americano"
              className="img-fluid"
            />
          </Col>
          <Col md={6} className="row">
            <Card.Header>
              <Card.Title className="text-center">Café Americano</Card.Title>
            </Card.Header>
            <Card.Body>
              <Card.Text>
                El café americano es una bebida caliente que consiste en un
                espresso diluido con agua caliente, lo que resulta en una taza
                de café suave y aromático. Es una opción popular para aquellos
                que prefieren un café menos intenso que el espresso tradicional.
                Perfecto para disfrutar en cualquier momento del día.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <b>Categoria:</b> Bebidas Calientes <br />
              <b>Precio: $1000</b>
            </Card.Footer>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default DetalleProducto;
