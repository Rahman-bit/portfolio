import { Container, Row, Col,  } from "react-bootstrap"
import CarouselImg from "../components/CarouselImg"

const Portfolio = () => {
  return (
    <Container fluid className="p-0">

      <Row>
        <Col>
        <CarouselImg
          imgOne = {'src/assets/sunset.jpg'}
          imgTwo = {'src/assets/sunset2.jpg'}
          imgThree = {'src/assets/hells.jpg'}
          />
        </Col>
      </Row>
    </Container>
  )
}

export default Portfolio