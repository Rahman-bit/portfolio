import { useState } from "react";
import { Container, Row, Col, Form, InputGroup, Button, Card } from "react-bootstrap"
import CustomeTextArea from "../components/CustomeTextArea";
import axios from 'axios';
import './contact.scss';

interface FormData {
    firstName : string;
    lastName : string;
    email : string;
    city : string,
    state : string,
    message : string
}
const Contact: React.FC  = () => {
  const[formData, setFormData] = useState<FormData>({
    firstName : "",
    lastName : "",
    email : "",
    city : "",
    state : "",
    message : ""
  });

  const{ firstName, lastName, email, city, state, message} = formData;
  const[ validated, setValidated] = useState(false);

  const handleSubmit = async (event: any) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
    event.preventDefault(); // Prevent the default form submission

    try {
      console.log("Form Data onSubmit:", formData);
      // Send a POST request
      const response = await axios.post('http://localhost:5500/user', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true, 
      });
      console.log("Response from server:", response.data);
    } catch (error) {
      console.error("There was an error submitting the form:", error);
    }
  }

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
                              <CustomeTextArea required = {true} type={'text'} value = {firstName} onChange = {handleInputs} name = "firstName"  />
                              <Form.Label>First name</Form.Label>
                            </InputGroup>
                          </Form.Group>
                          <Form.Group as={Col} className="mb-3 input-group " controlId="validationCustom02" >
                            <InputGroup>
                              <CustomeTextArea required = {true} type={'text'} value = {lastName} onChange = {handleInputs} name = "lastName"  />
                              <Form.Label>Last name</Form.Label>
                            </InputGroup>
                          </Form.Group>
                          <Form.Group as={Col} className="mb-3 input-group" controlId="validationCustom03">
                            <InputGroup hasValidation>
                              <CustomeTextArea required = {true} type={'text'} value = {email} onChange = {handleInputs} name = "email"  />
                              <Form.Label>Email</Form.Label>
                            </InputGroup>
                          </Form.Group>
                          <Form.Group as={Col} className="mb-3 input-group" controlId="validationCustom04">
                            <InputGroup>
                              <CustomeTextArea required = {true} type={'text'} value = {city} onChange = {handleInputs} name = "city" />
                              <Form.Label>City</Form.Label>
                            </InputGroup>
                          </Form.Group>
                          <Form.Group as={Col} className="mb-3 input-group" controlId="validationCustom05">
                            <InputGroup>
                              <CustomeTextArea required = {true} type={'text'} value = {state} onChange = {handleInputs} name = "state" />
                              <Form.Label>State</Form.Label>
                            </InputGroup>
                          </Form.Group>
                          <Form.Group as={Col} className="mb-1 input-group" controlId="validationCustom06">
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