import React, { useState } from 'react';
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
        <ul className="text-center list-circle">
            <li className="btn-list mx-1">
                <input type="radio" name="assessment-result" value="0" placeholder="0" height="44px" className="btn-list mr-1" checked onClick={() => setSmShow(true)} /> 0
            </li>
            <li className="btn-list mx-1">
                <input type="radio" name="assessment-result" value="1" placeholder="1" height="44px" className="btn-list mr-1" />1
            </li>
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
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Minor</Form.Label>
                    <ul className="text-center list-circle">
                        <li className="btn-list mx-1">
                            <input type="radio" name="minor" value="0" placeholder="0" height="44px" className="btn-list mr-1" checked onClick={() => setSmShow(true)} /> 0
                        </li>
                        <li className="btn-list mx-1">
                            <input type="radio" name="minor" value="1" placeholder="1" height="44px" className="btn-list mr-1" />1
                        </li>
                    </ul>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Mayor</Form.Label>
                    <ul className="text-center list-circle">
                        <li className="btn-list mx-1">
                            <input type="radio" name="mayor" value="0" placeholder="0" height="44px" className="btn-list mr-1" checked onClick={() => setSmShow(true)} /> 0
                        </li>
                        <li className="btn-list mx-1">
                            <input type="radio" name="mayor" value="1" placeholder="1" height="44px" className="btn-list mr-1" />1
                        </li>
                    </ul>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Kritikal</Form.Label>
                    <ul className="text-center list-circle">
                        <li className="btn-list mx-1">
                            <input type="radio" name="kritikal" value="0" placeholder="0" height="44px" className="btn-list mr-1" checked onClick={() => setSmShow(true)} /> 0
                        </li>
                        <li className="btn-list mx-1">
                            <input type="radio" name="kritikal" value="1" placeholder="1" height="44px" className="btn-list mr-1" />1
                        </li>
                    </ul>
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