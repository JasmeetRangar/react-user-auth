import { Form, Button } from "react-bootstrap";
import './register.css';
import { AiOutlineMail, AiFillUnlock } from "react-icons/ai";

const RegisterForm = () => {

  return (
    <div className="sign-up">
       <h1>Sign up</h1>
      
      <Form data-ms-form="signup" className="form-signup">
        <Form.Group className="form-email" controlId="formBasicEmail">
          <AiOutlineMail />
          <Form.Label> &nbsp; Email address</Form.Label>
          <Form.Control data-ms-member="email" type="email" placeholder="Enter email" />
        </Form.Group>
      
        <Form.Group className="form-password" controlId="formBasicPassword">
          <AiFillUnlock />
          <Form.Label> &nbsp; Password</Form.Label>
          <Form.Control data-ms-member="password" type="password" placeholder="Password" />
        </Form.Group>

        <Button className="form-button" variant="primary" type="submit">
          Sign up
        </Button>
      </Form>
      <a className="to-login" href="/login">Already a member? (Log in)</a>
    </div>
  );
}

export default RegisterForm;