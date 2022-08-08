import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function CreateSchedule() {
  const [smShow, setSmShow] = useState(false);

  const handleClose = () => setSmShow(false);

  return (
    <>
      <Button onClick={() => setSmShow(true)} className="btn-input btn-fullwidth text-bold">
        Create Schedule
      </Button>
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
              <Form.Label>Date</Form.Label>
              <Form.Control
                type="date"
                placeholder=""
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Schedule Name</Form.Label>
              <Form.Control
                type="text"
                placeholder=""
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Schedule Detail</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
        <Row>
          <Col xs={6}>
            <Button className="text-white" variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Col>
          <Col xs={6}>
            <Button type="submit" variant="warning" onClick={handleClose}>
              <a href="/" className="text-black">
                Save
              </a>
            </Button>
          </Col>
        </Row>
        </Modal.Footer>
      </Modal>
    </>
  );
}

// render(<Example />);
export default CreateSchedule;