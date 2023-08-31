import Base from "../components/Base";
import {  useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import './contact.css'
import {AiOutlineEnvironment} from "react-icons/ai";
import {AiOutlinePhone} from "react-icons/ai";
import {AiOutlineMail } from "react-icons/ai";


const Us=()=>{

  const [name, setname] = useState("");
    const [email, setEmail] = useState("");
    const [message, setmessage] = useState("");
    const navigate = useNavigate();


    async function save(event) {
        event.preventDefault();
        try {
          await axios.post("http://localhost:8081/users/feedback", {
          name: name,
          email: email,
          message: message,
          });
          alert("Feedback successfuly saved");
          setname("")
          setEmail("")
          setmessage("")

        } catch (err) {
          alert(err);
        }
      }
    return(
        <Base>
        <body>
        <div className="content">
          <h2>Contact Us</h2>
          <p>For any help you may contact us at</p>
        </div>
        <div className="container">
          <div className="contactInfo">
            <div className="box">
              {/* <div className="icon"><i class="AiTwotonePushpin" aria-hidden="true"></i></div> */}
              <div className="text">
                <h3>< AiOutlineEnvironment/>Address</h3>
                <p>MIT ACADEMY OF ENGINEERING , Alandi<br/>Dehu Phata Pune-412105</p>
              </div>
            </div>
            <div className="box">
              {/* <div className="icon"><i class="fa fa-phone" aria-hidden="true"></i></div> */}
              <div className="text">
                <h3><AiOutlinePhone/>Phone</h3>
                <p>942-567-20987</p>
              </div>
            </div>
            <div className="box">
              {/* <div className="icon"><i class="fa fa-envelope-o" aria-hidden="true"></i></div> */}
              <div className="text">
                <h3><AiOutlineMail/>Email</h3>
                <p>extensionhelper@gmail.com</p>
              </div>
            </div>
          </div>
          {/* <div className="contactForm"> */}
            <form>
              <h2>Send Message</h2>
              <div class="inputBox">
                <input type="text" name="" required="required"  value={name}
          onChange={(event) => {
            setname(event.target.value);
          }}/>
                <span>Full Name</span>
              </div>
              <div className="inputBox">
                <input type="text" name="" required="required" value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }} />
                <span>Email</span>
              </div>
              <div className="inputBox">
              <input type="text" name="" required="required" value={message}
          onChange={(event) => {
            setmessage(event.target.value);
          }}/>
                <span>Type your Message...</span>
              </div>
              <div className="inputBox">
                <input type="submit" name="" value="Send"  onClick={save}/>
                
              </div>
            </form>
          </div>
        {/* </div> */}
        </body>
        </Base>
    );
};
export default Us;