import { Container, Row, Col, Image, Card, Button } from 'react-bootstrap';
import '../scss/app.scss';
import { Link } from 'react-router-dom';
import Cards from '../components/Cards';
import { services } from '../components/Services';
import '../scss/serviceCards.scss';

const About = () => {
    
  return (
    <>
        <Container fluid className="pt-5 bg-dark d-flex justify-content-center align-items-center text-center header">
            <Row className='d-flex flex-column justify-content-center align-items-center banner_wraper'>
                {/* <Col className='pt-3 pb-4'>
                    <Image className="imger_wraper" src={'assets/syednobg.png'} />
                </Col> */}
                <Col>
                    <h2 className='text-white' >About Me<span className='line_wraper'></span></h2> 
                </Col>
            </Row>            
        </Container>
        <Container fluid className='bg-dark text-white pb-5'>
                <Row className='about_wraper d-flex justify-content-center align-items-center'>
                    <Col lg={10}>
                        <Card className='card_body d-flex' >
                            <Card.Text className='m-0 p-3'>
                                <Card.Img className='card_img rounded' variant="left" src={'assets/rahaman.png'} style={{ objectFit: 'cover' }} />
                            </Card.Text>
                            <Card.Body>
                                <h3 className='text-danger'>Discover</h3>
                                <Card.Text className='text-white'>Hi, I'm Rahaman, a passionate Frontend Developer with a knack for creating stunning web applications. 
                                    With a background in computer science and over 3.5 years of experience in the industry, I specialize in React, JavaScript, and responsive design. I'm committed to building efficient and scalable web solutions.</Card.Text>
                                <Card.Text>
                                    <Row className='m-0 p-2 text-white d-flex justify-content-center border border-1 rounded'>
                                        <Col className='p-0'>
                                            <Card.Text>Name : Rahaman S</Card.Text>
                                            <Card.Text>Phone : +91 9392306208</Card.Text>
                                            <Card.Text>Experience : 3.5 Years</Card.Text>
                                        </Col>
                                        <Col className='p-0'>
                                            <Card.Text>Age : 27</Card.Text>
                                            <Card.Text>Address : Bangaluru</Card.Text>
                                            <Card.Text>Freelance : Available</Card.Text>
                                        </Col>
                                    </Row>
                                </Card.Text>
                                <Button variant="danger"><Link className='text-white text-decoration-none' to={'/contact'}>Contact Me</Link></Button>
                            </Card.Body>
                        </Card>                 
                    </Col>
                </Row>
                <Row> 
                    <Col className='d-flex align-items-center justify-content-center'>
                        <h2>Services<span className='line_wraper'></span></h2>
                    </Col>
                </Row>
                <Row xs={1} md={2} className="g-5" id="card-wraper">
                    {services.map((elm) => (
                        <Cards key={elm.id} {...elm} />
                    ))}
                </Row>
        </Container>
    </>
  )
}

export default About