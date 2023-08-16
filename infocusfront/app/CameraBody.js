import React from 'react';
import { Container, Row, Col, Form, FormGroup } from 'react-bootstrap';

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
                  <Form.Control type="range" />
                </FormGroup>
                <FormGroup>
                  <Form.Label className="text-light">Shutter Speed</Form.Label>
                  <Form.Control type="range" />
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
