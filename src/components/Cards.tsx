import Card from "react-bootstrap/esm/Card"
import Col from "react-bootstrap/esm/Col";
import '../scss/app.scss';
interface CardProps {
    key : any;
    elm : {
        icon : any;
        title : String;
        text : String;
    }
}
const Cards: React.FC<CardProps> = ({key, elm}) => {
    const { icon, title, text } = elm;
  return (
    <>
        <Col key={key} lg="4">
            <Card>
            <Card.Img variant="top" src={icon} />
                <Card.Body>
                    <Card.Title> {title} </Card.Title>
                    <Card.Text> {text} </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    </>
  )
}

export default Cards