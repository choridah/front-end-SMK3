import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { HiKey } from "react-icons/hi";

const ChangePassword = () => {
  return (
    <section className="hero has-background-white-light is-fullheight">
      <div className="hero-body">
        <div className="container">
          <div className="column is-centered">
            <div className="column is-4-desktop">
              <div  className="icon-key"><HiKey style={{color: '#FDCB00'}}/></div>
              <div className="label-sign">Forgot Your Password?</div>
              <from className="mb-5">
                  <div className="field mt-5">
                      <div className="controls">
                          <input type="password" className="col-input" placeholder="********"></input>
                      </div>
                  </div>
                  <Container>
                    <Row>
                      <Col xs={8} md={4}></Col>
                      <Col xs={4} md={4}><button className="btn-input text-bottom">Send</button></Col>
                    </Row>
                  </Container>
              </from>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ChangePassword