import { Button } from "react-bootstrap";
import './welcome.css';
import { BiLogOut } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";

const Welcome = () => {

  return (
    <div className="welcome">
      <h1>Member Logged in!</h1>
      <div>
        <Button ms-profile="true" variant="primary" className="sample-button">
          <CgProfile />          
          &nbsp; Profile
        </Button>
        <Button href="#/ms/logout" variant="danger" className="sample-button">
          <BiLogOut />
          &nbsp; Log out
        </Button>
      </div>
    </div>
  );
}

export default Welcome;