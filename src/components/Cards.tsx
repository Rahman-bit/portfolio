import Card from "react-bootstrap/esm/Card"
import Col from "react-bootstrap/esm/Col";
import '../scss/app.scss';
import '../scss/serviceCards.scss';

interface CardProps {
        id : number,
        icon : any;
        title : string;
        description : string;
        features : string[]
    }
const Cards: React.FC<CardProps> = (elm:CardProps) => {
    const { id, icon, title, description, features } = elm;
  return (
    <>
        <Col key={id} lg="4" className="d-flex justify-content-center g-3">
            <Card className="card-hover card-fixed-width">
            <i className={`bi ${icon} my-3 text-center`} style={{ fontSize: '3.5rem', }}> </i>
                <Card.Body className="">
                    <Card.Title> {title} </Card.Title>
                    <Card.Text> {description} </Card.Text>
                    {
                        features.map((elm, i)=>( <Card.Text key={i}> {elm} </Card.Text> ))
                    }
                </Card.Body>
            </Card>
        </Col>
    </>
  )
}

export default Cards