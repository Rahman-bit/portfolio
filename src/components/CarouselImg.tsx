
import { Container, Carousel } from 'react-bootstrap'

interface CarouselImgs{
  imgOne: String;
  imgTwo : String;
  imgThree : String;
}
const CarouselImg:React.FC<CarouselImgs> = ({imgOne, imgTwo, imgThree}) => {
  return (
    <Container fluid className="p-0">
      <Carousel className="bg-dark text-white">
        <Carousel.Item interval={1500}>
            <img
              className="d-block w-100"
              src={`${imgOne}`}
              alt="First slide"
            />
          <Carousel.Caption>
            <h3>First slide label</h3>
          </Carousel.Caption>
        </Carousel.Item>
       <Carousel.Item interval={1500}>
          <img
              className="d-block w-100"
              src={`${imgTwo}`}
              alt="First slide"
            />
          <Carousel.Caption>
            <h3>Second slide label</h3>
          </Carousel.Caption>
        </Carousel.Item>
      
        <Carousel.Item interval={1500}>
          <img
              className="d-block w-100"
              src={`${imgThree}`}
              alt="First slide"
            />
          <Carousel.Caption>
            <h3>Third slide label</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  )
}

export default CarouselImg