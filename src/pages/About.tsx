import { Container, Row, Col, Image, Card, Button } from 'react-bootstrap';
import Typed from 'typed.js';
import '../scss/app.scss';
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Cards from '../components/Cards';
import { homeCadsData } from '../components/CardsContent';

const About = () => {
    let elm = useRef<HTMLDivElement>(null);
    useEffect(()=>{
        const typed = new Typed(elm.current, {
            strings : ['React | FrontEnd'],
            typeSpeed: 50,
            loop: true,
            loopCount: Infinity,
            fadeOut: true,
            fadeOutClass: 'typed-fade-out',
            fadeOutDelay: 100,
            showCursor: false,
        })
        return () => {
            // Destroy Typed instance during cleanup to stop animation
            typed.destroy();
          };
    },[])
    
  return (
    <>
        <Container fluid className="py-5 d-flex justify-content-center align-items-center text-center header">
            <Row className='d-flex flex-column justify-content-center align-items-center banner_wraper'>
                <Col className='pt-3 pb-4'>
                    <Image className="imger_wraper" src={'src/assets/syednobg.png'} />
                </Col>
                <Col><h3 className='text-white'>Rahaman</h3></Col>
                <Col className='pt-2'>
                    <div><span className='designation_title' ref={elm}></span> <span className='text-info'>Developer</span></div>
                </Col>
            </Row>            
        </Container>
        <Container fluid className='bg-dark text-white'>
                <Row className='about_wraper d-flex justify-content-center align-items-center'>
                    <Col lg={10}>
                    <Card className='card_body d-flex' >
                        <Card.Text className='m-0 p-3'>
                            <Card.Img className='card_img bg-warning rounded' variant="left" src={'src/assets/syednobg.png'} style={{ objectFit: 'cover' }} />
                        </Card.Text>
                        <Card.Body>
                            <h3 className='text-danger'>Discover</h3>
                            <Card.Text className='card_about text-white'>About Me</Card.Text> 
                            <Card.Text className='text-white'>I have 3+ years of IT experience developing accessible and performant web interfaces. Adept in HTML 5, CSS2/CSS3, Bootstrap, SCSS, JavaScript, React JS, Redux, JQuery, JSON, AJAX, GIT, GitLab.</Card.Text>
                            <Card.Text>
                                <Row className='m-0 p-2 text-white d-flex justify-content-center border border-1 border-danger rounded'>
                                    <Col className='p-0'>
                                        <Card.Text>Name : Rahaman S</Card.Text>
                                        <Card.Text>Phone : +91 9885266537</Card.Text>
                                        <Card.Text>Experience : 3.4 Years</Card.Text>
                                    </Col>
                                    <Col className='p-0'>
                                        <Card.Text>Age : 27</Card.Text>
                                        <Card.Text>Address : Nandyala</Card.Text>
                                        <Card.Text>Freelance : Available</Card.Text>
                                    </Col>
                                </Row>
                            </Card.Text>
                            <Button variant="danger"><Link className='text-white text-decoration-none' to={'/about'}>About</Link></Button>
                        </Card.Body>
                    </Card>
                    </Col>
                </Row>
                <Row className='bg-s pt-4 pb-4'> 
                    <Col className='d-flex align-items-center'>
                        <h2>Services</h2>
                        <div className='line-wraper'>
                            <span className='line'></span>
                        </div>
                    </Col>
                </Row>
                <Row xs={1} md={2} className="g-3">
                    {homeCadsData.map((elm, index:any) => (
                        <Cards key={index} elm={elm} />
                    ))}
                </Row>
        </Container>
    </>
  )
}

export default About