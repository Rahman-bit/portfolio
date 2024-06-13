import { useState } from "react";
import { Container, Row, Col, Form, InputGroup, Button, Card } from "react-bootstrap"
import CustomeTextArea from "../components/CustomeTextArea";
import './contact.scss';

interface FormData {
  firstname: String;
  email: String;
  city: String;
  state: String;
  message : any;
}
const Contact: React.FC  = () => {
  const[formData, setFormData] = useState<FormData>({
    firstname : "",
    email : "",
    city : "",
    state : "",
    message : ""
  });

  const{ firstname, email, city, state, message} = formData;
  const[ validated, setValidated] = useState(false);

  const handleSubmit = (event:any) => {
    const form = event.currentTarget;
    console.log("form:", event)
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
    console.log("From Data onsubmit:", formData)
  };

  const handleInputs = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((formData) => ({
          ...formData,
          [name]: value
    }));
  };

  return (
    <Container fluid className="p-0">
     <div className="bg-dark text-white contact_wraper">
        <Row>
          <Col>
              <Card className='m-4 form_card text-white'>
                <Card.Title className="pt-3 text-white d-flex align-items-center justify-content-center">Contact Me</Card.Title>
                <Card.Body className="pt-0">
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                      <Row className="mb-3 p-2 flex-column align-items-center justify-content-center">
                          <Form.Group as={Col} className="mb-3 input-group " controlId="validationCustom01" >
                            <InputGroup>
                              <CustomeTextArea required = {true} type={'text'} value = {firstname} onChange = {handleInputs} name = "firstname"  />
                              <Form.Label>First name</Form.Label>
                            </InputGroup>
                          </Form.Group>
                          <Form.Group as={Col} className="mb-3 input-group" controlId="validationCustomUsername">
                            <InputGroup hasValidation>
                              <CustomeTextArea required = {true} type={'text'} value = {email} onChange = {handleInputs} name = "email"  />
                              <Form.Label>Email</Form.Label>
                            </InputGroup>
                          </Form.Group>
                          <Form.Group as={Col} className="mb-3 input-group" controlId="validationCustom02">
                            <InputGroup>
                              <CustomeTextArea required = {true} type={'text'} value = {city} onChange = {handleInputs} name = "city" />
                              <Form.Label>City</Form.Label>
                            </InputGroup>
                          </Form.Group>
                          <Form.Group as={Col} className="mb-3 input-group" controlId="validationCustom03">
                            <InputGroup>
                              <CustomeTextArea required = {true} type={'text'} value = {state} onChange = {handleInputs} name = "state" />
                              <Form.Label>State</Form.Label>
                            </InputGroup>
                          </Form.Group>
                          <Form.Group as={Col} className="mb-1 input-group" controlId="validationCustom04">
                            <InputGroup>
                              <Form.Control className="input_filed" required = {true} type={'textArea'} value = {message} onChange = {handleInputs} name = "message" as="textarea" rows={1} />
                              <Form.Label>Send A Message</Form.Label>
                            </InputGroup>
                          </Form.Group>
                          <Col xs md ={10}>
                            <Button className="mt-4 w-100" size='sm' type="submit">Submit form</Button>
                          </Col>
                      </Row>
                    </Form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
      </div>
    </Container>
  )
}

export default Contact