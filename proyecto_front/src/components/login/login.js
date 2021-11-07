import React from 'react';
import { Container } from 'react-bootstrap';
import { Button, Form, Row, Col } from 'react-bootstrap';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      usuario: '',
      pass: "",
    };
  }
  render() {
    return (
      <Container id="login-container" style={{ marginTop: 200 }}>
        <Row>
          <Col>
            <Row>
              <h2>Iniciar sesión</h2>
            </Row>
            <Row>
              <Col
                sm="12"
                xs="12"
                md={{ span: 4, offset: 4 }}
                lg={{ span: 4, offset: 4 }}
                xl={{ span: 4, offset: 4 }}
              >
                <Form>
                  <Form.Group>
                    <Form.Label style={{ float: 'left' }}>Usuario</Form.Label>
                    <Form.Control
                      onChange={(e) =>
                        this.setState({ usuario: e.target.value })
                      }
                    />
                    {this.state.usuario}
                  </Form.Group>

                  <Form.Group>
                    <Form.Label style={{ float: 'left' }}>
                      Contraseña
                    </Form.Label>
                    <Form.Control type="password"
                        onChange={(e)=>
                            this.setState({pass: e.target.value})
                        }
                    />
                    {this.state.pass}
                  </Form.Group>
                  <Button
                    variant="success"
                    style={{ marginTop: 20, width: '100%' }}
                  >
                    Iniciar sesión
                  </Button>
                </Form>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}

// ccc para crear un constructor
