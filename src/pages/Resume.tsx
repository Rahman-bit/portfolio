import { Button, Col, Container, Row } from "react-bootstrap"
import '../scss/app.scss';
// import CarouselImg from "../components/CarouselImg";
// import pdf from '.'

const Resume = () => {
  return (
    <Container fluid className="p-0">
      
       <Row className='download_wraper text-white m-0 d-flex justify-content-center align-items-center'
        style={{height: '100vh'}}
        >
          <Col className="d-flex flex-column justify-content-center align-items-center">
              <h2 className="p-3">Rahmana</h2>
              <a href="/resume.pdf" download>
                <Button variant="success">Download Resume</Button>
              </a>
          </Col>
       </Row>
    </Container>
  )
}

export default Resume