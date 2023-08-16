import React from 'react';
import { Container, Row, Col, Form, FormGroup } from 'react-bootstrap';
import { Slider } from 'primereact/slider';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

const CameraBody = () => {
  return (
    <div className="camera-body bg-dark py-5">
      <Container>
        <Row>
          <Col className="mx-auto">
            <div className="slider-container">
              <Form>
                <FormGroup>
                  <Form.Label className="text-light">ISO</Form.Label>
                  <Slider className="p-mb-3" />
                </FormGroup>
                <FormGroup>
                  <Form.Label className="text-light">Shutter Speed</Form.Label>
                  <Slider className="p-mb-3" />
                </FormGroup>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CameraBody;
