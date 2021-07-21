import React from "react";
import { ContactList } from "../components/Styled-components";
import EmailIcon from "@material-ui/icons/Email";
import GitHubIcon from "@material-ui/icons/GitHub";
import PhoneIcon from "@material-ui/icons/Phone";
function Contacts() {
  return (
    <div>
      <ContactList>
        <h1>Bob</h1>
        <p>Front-End Developer</p>
        <EmailIcon style={{ textAlign: "center" }} className="icon">
          <p>bobpakhriev@gmail.com</p>
        </EmailIcon>
        <GitHubIcon className="icon">Bobstyle23</GitHubIcon>
        <PhoneIcon className="icon">+82 (10) 4303-4443</PhoneIcon>
      </ContactList>
    </div>
  );
}

export default Contacts;
