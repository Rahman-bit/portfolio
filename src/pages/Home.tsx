import { Container, Row, Col, Image, Button } from "react-bootstrap"
import '../scss/app.scss';
import { Link } from "react-router-dom";
import SocialMediaLinks from './SocialMediaLinks';

const Home = () => {
  return (
    <Container fluid className="p-0">
        <div className="homeBanner bg-dark">
            <Row className="pt-5 align-items-center text-white">
                <Col className="py-2 pr-1 d-flex flex-column align-items-center">
                    <div>   
                        <div className="d-flex align-items-center">
                            <div className="pr-2">
                                <h6>Hello</h6>
                            </div> 
                            <div className='line-wraper'>
                                <span className='line'></span>
                            </div>
                        </div>
                        <h3 className="py-2" style={{lineHeight:'1.6'}}><span>I'm</span> <span style={{color:'#FC0136'}}>Sayyed</span> Abdul Rahaman</h3>
                        {/* <h4>I'm a <span className="text-danger">Reactjs</span> | <span className="text-danger">JavaScript</span> Developer</h4> */}
                        <p>This is Syed Looking for React Developer Job.</p>
                        <Button variant="danger"><Link className='text-white text-decoration-none' to={'/about'}>About</Link></Button>
                        <SocialMediaLinks />
                    </div>
                </Col>
                <Col>
                    <Image className="bannerImg" src={'assets/syednobg.png'} fluid />
                </Col>
            </Row>
            <Row>
                <Col>            
                {/* <Image className="" src={'src/assets/moon.svg'} fluid /> */}
                </Col>
            </Row>
        </div>
    </Container>
  )
}

export default Home