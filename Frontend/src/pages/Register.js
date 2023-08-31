import {  useState } from "react";
import axios from "axios";
import Base from "../components/Base";
import { useNavigate } from 'react-router-dom';
import "./Register.css"

function Register() {  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function save(event) 
  {
    event.preventDefault();
    try 
    {
      await axios.post("http://localhost:8081/users/save", 
      {
        name: name,
        email: email,
        password: password,
      });
      alert("Student Registation Successfull");
      navigate('/login1')

    } 
    catch (err) 
    {
      alert(err);
    }
  }
  const resetData=()=>
  {
    setName("")
    setEmail("")
    setPassword("")
  }
  
  return (
    <Base>
      <div>
        <div class="container mt-4" >
          <form>
            <h1>Student Registation</h1>
            <div class="form-group">
              <label>Name</label>
              <input type="email"  class="form-control" id="name" placeholder="Enter Name" required="required"
              value={name}
              onChange={(event) => {
                setName(event.target.value);
              }}
              />
            </div>

            <div class="form-group">
              <label>Email</label>
              <input type="email"  class="form-control" id="email" placeholder="Enter Email" required="required"
              value={email}
              onChange={(event) => {
              setEmail(event.target.value);
              }}
              />
            </div>

            <div class="form-group">
              <label>Password</label>
              <input type="password"  class="form-control" id="password" placeholder="Enter password" required="required"
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
              }}
              />
            </div>
            <button type="submit" class="btn btn-primary mt-4" onClick={save} >Save</button>
            <button type="reset" class="btn btn-primary" onClick={resetData}>Reset</button>
          </form>
        </div>
      </div>
    </Base>
  );
}
  
  export default Register;