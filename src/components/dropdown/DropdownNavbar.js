import Dropdown from 'react-bootstrap/Dropdown';
import SplitButton from 'react-bootstrap/SplitButton';
import { FiLogOut } from "react-icons/fi";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Logout() {
  return (
    <>
      <div className="mb-2">
        {[''].map((direction) => (
          <SplitButton
            key={direction}
          >
            <Dropdown.Item as="button">
              <Row>
                <Col xs={4}>
                  <a href="/"><FiLogOut style={{color: '#FDCB00', fontSize: '25px'}} /></a>
                </Col>
                <Col xs={8}>
                  <h4 className="text-black text-bold mt-1">Logout</h4>
                </Col>
              </Row>
            </Dropdown.Item>
          </SplitButton>
        ))}
      </div>
    </>
  );
}

export default Logout;