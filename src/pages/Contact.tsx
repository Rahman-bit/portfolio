import { useState } from "react";
import { Container, Row, Col, Form, InputGroup, Button } from "react-bootstrap"
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
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
    console.log("From Data onsubmit:", formData)
  };

  const handleInputs = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    // console.log("Input Name:", name);
    // console.log("Input Value:", value);
    setFormData((formData) => ({
          ...formData,
          [name]: value
    }));
  };

  return (
    <Container fluid>
      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#0099ff" fill-opacity="1" d="M0,192L120,202.7C240,213,480,235,720,245.3C960,256,1200,256,1320,256L1440,256L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path>
      </svg> */}
      <Row className="bg-dark text-white p-4">
          <Col className="d-flex align-item-center justify-content-center">
          Rahaman
          </Col>
      </Row>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3 p-2 flex-column mx-auto">
        <Form.Group size={'sm'} as={Col} className="mb-1" controlId="validationCustom01" >
          <Form.Label>First name</Form.Label>
          <CustomeTextArea required = {true} type={'text'} value = {firstname} onChange = {handleInputs} name = "firstname" placeholder="Enter Name" />
        </Form.Group>
        <Form.Group as={Col} className="mb-1" controlId="validationCustomUsername">
          <Form.Label>Email</Form.Label>
          <InputGroup hasValidation>
            <CustomeTextArea required = {true} type={'text'} value = {email} onChange = {handleInputs} name = "email" placeholder="Enter Email" />
          </InputGroup>
        </Form.Group>
        <Form.Group as={Col} className="mb-1" controlId="validationCustom02">
          <Form.Label>City</Form.Label>
          <CustomeTextArea required = {true} type={'text'} value = {city} onChange = {handleInputs} name = "city" placeholder="Enter City" />
        </Form.Group>
        <Form.Group as={Col} className="mb-1" controlId="validationCustom03">
          <Form.Label>State</Form.Label>
          <CustomeTextArea required = {true} type={'text'} value = {state} onChange = {handleInputs} name = "state" placeholder="State" />
        </Form.Group>
        <Form.Group as={Col} className="mb-1" controlId="validationCustom04">
          <Form.Label>Send A Message</Form.Label>
          <CustomeTextArea required = {true} rows={'5'} type={'textarea'} value = {message} onChange = {handleInputs} name = "message" placeholder="Enter a Message" />
        </Form.Group>
      <Button type="submit">Submit form</Button>
    </Row>
    </Form>
    </Container>
  )
}

export default Contact