import { Form } from "react-bootstrap";
import '../pages/contact.scss';

const CustomeTextArea = (props: any) => {

    const { value, type, required, onChange, name, placeholder } = props; 

    return (
      <Form.Control 
          className="input_filed"
          type={type}
          required={required}
          value={value} 
          onChange={onChange}
          placeholder= {placeholder}
          name= {name} 
      />
    )
  }

export default CustomeTextArea