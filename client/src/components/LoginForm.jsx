import { Form, Button } from "react-bootstrap";
import './login.css';
import { AiOutlineMail, AiFillUnlock } from "react-icons/ai";
const LoginForm = () => {

  return (
    <div className="login">
       <h1>Log in</h1>
      
      <Form data-ms-form="login" className="form-login">
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
          Login
        </Button>
      </Form>

      <a className="to-signup" href="/signup">Not a member? (Sign up)</a>
    </div>
  );
}

export default LoginForm;