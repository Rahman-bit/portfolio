import { Container, Row, Col, Card } from "react-bootstrap"
// import CarouselImg from "../components/CarouselImg"
import './portfolio.scss';
import '../scss/app.scss';
import SocialMediaLinks from './SocialMediaLinks';

const Portfolio = () => {
  return (
    <Container fluid className="bg-dark text-white">
      <Row className="flex-column">
          <Col className='py-3 '>
              <h2 className="title_wraper"><span className="">Abo</span>ut Me</h2>
          </Col>
          <Col>
            <Card className="text-white portfolioCard">
              <Card.Body>
                <Card.Text> 
                    Hi, I'm Rahaman, a passionate Frontend Developer with a knack for creating stunning web applications. With a background in computer science and over four years of experience in the industry, I specialize in React, JavaScript, and responsive design. I'm committed to building efficient and scalable web solutions.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
      </Row>
      <Row className="flex-column">
          <Col className='py-3 d-flex align-items-center'>
              <h2 className="title_wraper"><span>Ski</span>lls</h2>
          </Col>
          <Col>
          <Card className="text-white portfolioCard">
              <Card.Body>
                <Card.Text> 
                  <p>Languages: JavaScript, TypeScript, HTML, CSS</p>
                  <p>Frameworks: React</p>
                  <p>Tools: Git, GitHub, vsCode</p>
                  <p>Soft Skills: Team collaboration, Problem-solving, Agile methodologies.</p>                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
      </Row>
      <Row className="flex-column">
          <Col className='py-3 d-flex align-items-center'>
              <h2 className="title_wraper"><span>Pro</span>jects</h2>
          </Col>
          <Col>
            <Card className="text-white portfolioCard">
              <Card.Body>
                <Card.Text> 
                  <p>Truweight wellness private limited.</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
      </Row>
      <Row className="flex-column">
          <Col className='py-3 d-flex align-items-center'>
              <h2 className="title_wraper"><span>Exp</span>ereince</h2>
          </Col>
          <Col>
            <Card className="text-white portfolioCard">
              <Card.Body>
                <Card.Text> 
                  <ol typeof="1" style={{paddingLeft: '1rem'}}>
                    <li><p>Frontend Developer, Tech Solutions Inc.</p></li>
                    <li><p>Developed responsive web applications using React and Redux.</p></li>
                    <li><p>Collaborated with designers and backend developers to create seamless user experiences.</p></li>
                    <li><p>Improved application performance, reducing load times by 30%.</p></li>
                    <li><p>Enhanced website SEO, increasing organic traffic by 50%.</p></li>
                    <li><p>Managed hosting and deployment for client websites.</p></li>
                  </ol>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
      </Row>
      <Row className="flex-column">
          <Col className='py-3 d-flex align-items-center'>
              <h2 className="title_wraper"><span>Edu</span>cation</h2>
          </Col>
          <Col>
              <Card className="text-white portfolioCard">
                <Card.Body>
                  <Card.Text> 
                    <h5>Bachelor of Science in Computer Science</h5>
                    <p>Institution : Rayaalaseema Univercity Kurnool</p>
                    <p>Graduation Date : May 2019</p>
                  </Card.Text>
                </Card.Body>
              </Card>
          </Col>
      </Row>
      <Row className="flex-column mb-5">
          <Col className='py-3 d-flex align-items-center'>
              <h2 className="title_wraper"><span>Get</span> In Touch</h2>
          </Col>
          <Col>
              <SocialMediaLinks />
          </Col>
      </Row>
      <Row>
        <Col className="p-0">
        {/* <CarouselImgs
          imgOne = {'src/assets/sunset.jpg'}
          imgTwo = {'src/assets/sunset2.jpg'}
          imgThree = {'src/assets/hells.jpg'}
          /> */}
        </Col>
      </Row>
    </Container>
  )
}

export default Portfolio