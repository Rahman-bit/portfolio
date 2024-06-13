import { Button, Col, Container, Row } from "react-bootstrap";
import '../scss/app.scss';

const Resume = () => {
  return (
    <Container fluid className="p-0">
      <div className="download_wraper">
        <Row className='text-white m-0' style={{ height: '100vh' }} >
            <Col className="d-flex flex-column justify-content-center align-items-center">
                {/* <h2 className="p-3">Rahmana S</h2> */}
              <h2 className="pb-4">I'm a <span className="text-danger">Reactjs</span> | <span className="text-danger">JavaScript</span> Developer</h2>

                <a href="/resume.pdf" download>
                  <Button variant="success">Download Resume</Button>
                </a>
            </Col>
        </Row>
       </div>
    </Container>
  )
}

export default Resume