import Dropdown from 'react-bootstrap/Dropdown';
import SplitButton from 'react-bootstrap/SplitButton';
import { CgProfile } from "react-icons/cg";
import { FiLogOut } from "react-icons/fi";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function DropDirectioLogOut() {
  return (
    <>
      <div className="mb-2">
        <a role="button" href="/schedule:id" className="navbar-burger burger mt-2" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <div>
            <CgProfile style={{color: '#FDCB00', fontSize: '45px'}}/>
          </div>
        </a>
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
                  <h4 className="link-modal-black text-bold mt-1">Logout</h4>
                </Col>
              </Row>
            </Dropdown.Item>
          </SplitButton>
        ))}
      </div>
    </>
  );
}

export default DropDirectioLogOut;