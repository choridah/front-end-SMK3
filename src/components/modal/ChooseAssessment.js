import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function ChooseAssessment() {
  const [smShow, setSmShow] = useState(false);

  const handleClose = () => setSmShow(false);

  return (
    <>
        <ul type="radio" className="text-center list-circle">
            <li className="btn-list mx-1">
                <Button onClick={() => setSmShow(true)} className="btn-list">
                    0
                </Button>
            </li>
            <li className="btn-list mx-1">1</li>
        </ul>
      
        <Modal
            size="sm"
            show={smShow}
            onHide={() => setSmShow(false)}
            aria-labelledby="example-modal-sizes-title-sm"
            className="p-modal"
        >
            <Modal.Body>
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Minor</Form.Label>
                <Row className="mx-7">
                    <Col xs={6}>
                        <Form.Control
                            type="radio"
                            placeholder="0"
                            value="0"
                            autoFocus
                        />
                    </Col>
                    <Col xs={6}>
                        <Form.Control
                            type="radio"
                            placeholder="1"
                        />
                    </Col>
                </Row>
                </Form.Group>
            </Form>
            </Modal.Body>
            <Modal.Footer>
            <Row>
            <Col xs={6}>
                <Button variant="secondary" onClick={handleClose}>
                Close
                </Button>
            </Col>
            <Col xs={6}>
                <Button variant="warning" onClick={handleClose}>
                Save
                </Button>
            </Col>
            </Row>
            </Modal.Footer>
        </Modal>
    </>
  );
}

// render(<Example />);
export default ChooseAssessment;