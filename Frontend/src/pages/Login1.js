import {  useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import Base from "../components/Base";
import "./Login.css"
import { doLogin } from "../auth";


function Login1() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function login(event) {
    event.preventDefault();
    try{
      await axios.post("http://localhost:8081/users/login", {
        email: email,
        password: password,
      }).then((res) => 
      {
        console.log(res.data); 
        if (res.data.message === "Email not exits") 
        {
          alert("Email not exits");
        } 
        else if(res.data.message === "Login Success")
        {   
          navigate('/user/dashboard');
        } 
        else 
        { 
          alert("Incorrect Email and Password not match");
        }
      }, 
      fail => {
        console.error(fail); // Error!
      });
      // loginUser(email).then((data)=>{
      //       console.log(data)
      //   })
      //   loginUser(password).then((data)=>{
      //     console.log(data)
      // })
    }
    catch (err) {
      alert(err);
    }    
  }
  const handleFormSubmit=(event)=>{
    event.preventDefault();

    // loginUser(loginDetail).then((data)=>{
    //     console.log(data)
    // })
    doLogin(email,password,()=>{
        console.log("login detail is stored to local storage")
    })
}
  const resetData=()=>{
    setEmail("")
    setPassword("")
  }
      
  return (
    <Base>
      <div>
        <div class="container">
          <div class="row">
            <div class="col-sm-6">
              <form1 onSubmit={handleFormSubmit}>
                <h1>Login</h1>
                <div class="form-group">
                  <label>Email</label>
                  <input type="email"  class="form-control" id="email" placeholder="Enter Name"
                  value={email}
                  onChange={(event) => {
                    setEmail(event.target.value);
                    }}
                  />
                </div>

                <div class="form-group">
                  <label>Password</label>
                  <input type="password"  class="form-control" id="password" placeholder="Enter Password"
                  value={password}
                  onChange={(event) => {
                    setPassword(event.target.value);
                    }}
                  />
                </div>
                <button type="submit" class="btn btn-primary" onClick={login} >Login</button>
                {/* <button onClick={resetData}color="secondary" type="reset" className="ms-2">Reset</button> */}
                <button type="reset" class="btn btn-primary" onClick={resetData}>Reset</button>
              </form1>
            </div>
          </div>
        </div>
      </div>
    </Base>
    );
  }
  
  export default Login1;