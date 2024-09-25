import { Container, Row, Col, Image, Button } from "react-bootstrap"
import '../scss/app.scss';
import { Link } from "react-router-dom";
import SocialMediaLinks from './SocialMediaLinks';
import { useEffect, useRef } from "react";
import Typed from "typed.js";

const Home = () => {
    let elm = useRef<HTMLDivElement>(null);
    useEffect(()=>{
        const typed = new Typed(elm.current, {
            strings : ['React | FrontEnd'],
            typeSpeed: 100,
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
    <Container fluid className="p-0">
        <div className="home_wraper bg-dark">
            <Row className="pt-5 responsive_home align-items-center text-white">
                <Col className="py-2 pr-1 d-flex flex-column align-items-center">
                    <div>   
                        <div className="d-flex align-items-center">
                            <h6 className="d-flex align-items-center">Hello<span className="line_wraper"></span></h6>
                            {/* <div className='line-wraper'>
                                <span className='line'></span>
                            </div> */}
                        </div>
                        <h3 className="py-2" style={{lineHeight:'1.6'}}><span>I'm</span> <span style={{color:'#FC0136'}}>Sayyed</span> Abdul Rahaman</h3>
                        <div className="pb-4"><span className='designation_title' ref={elm}></span> <span style={{color:'#FC0136', fontWeight: 'bold'}}>Developer</span></div>
                        <Button variant="danger"><Link className='text-white text-decoration-none' to={'/about'}>About</Link></Button>
                        <SocialMediaLinks />
                    </div>
                </Col>
                <Col>
                    <Image className="bannerImg" src={'assets/syednobg.png'} fluid />
                </Col>
            </Row>
        </div>
    </Container>
  )
}

export default Home