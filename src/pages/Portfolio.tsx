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
                ReactJS developer with over 3.5 years of expertise in building high- performance, scalable web applications. Proficient in ReactJS, JavaScript (ES6), and modern frontend technologies, with deep experience in developing Single Page Applications (SPAs) and optimizing web performance.
                 Skilled in Redux for efficient state management and seamlessly integrating backend services. A strong collaborator, committed to delivering responsive, high-quality code in dynamic, fast-paced environments.
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
                  <p><b>Frontend Technologies: </b>ReactJS, JavaScript (ES6+), HTML5, CSS3, Bootstrap 3/4/5, jQuery, SCSS, JSON, AJAX.</p>
                  <p><b>State Management: </b>Redux, React Hooks (useState, useEffect, useMemo, useCallback).</p>
                  <p><b>Version Control: </b>Git, SVN.</p>
                  <p><b>Responsive Web Design: </b>Experience with UI Compatibility across Desktop, Tablet, and Mobile (iOS, Android).</p>                </Card.Text>
                  <p><b>Theming with SCSS: </b>Expertise in @import, @mixin, @extend, and SCSS functions for reusable, scalable styles.</p>
                  <p><b>Debugging Tools: </b>Chrome Developer Tools, Firebug.</p>
                  <p><b>Soft Skills: </b>Strong communication, leadership, decision-making, and problem-solving skills.                  </p>
                  <p><b>Agile Methodologies: </b>SCRUM, JIRA</p>
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
                    <p>GPA : 7.7</p>
                  </Card.Text>
                </Card.Body>
              </Card>
          </Col>
      </Row>
      <Row className="flex-column pb-5">
          <Col className='py-3 d-flex align-items-center'>
              <h2 className="title_wraper"><span>Get</span> In Touch</h2>
          </Col>
          <Col>
              <SocialMediaLinks />
          </Col>
      </Row>
    </Container>
  )
}

export default Portfolio