import Base from "../components/Base";
import { Card, CardBody, CardHeader, Container, Form, FormGroup, Label, Input, Button, Row,Col } from "reactstrap";
import { useEffect, useState } from "react";
import { doLogin } from "../auth";
import './Login.css'
const Login=()=>{

    const [loginDetail,setLoginDetail]=useState({
            username:'',
            password:''
    })

    const handleChange=(event,field)=>{
        let actualValue=event.target.value
        setLoginDetail({
            ...loginDetail,
            username:'sumer.ali@mitaoe.ac.in',
            password:'Sumer@5581'
        })
    }

    const handleFormSubmit=(event)=>{
        event.preventDefault();

        // loginUser(loginDetail).then((data)=>{
        //     console.log(data)
        // })
        doLogin(loginDetail,()=>{
            console.log("login detail is stored to local storage")
        })
    }
    const resetData=()=>{
        setLoginDetail({
            name:'',
        email:'',
        password:'',
    })
    }
    return(

        
        <Base>
        <Container >
            <Row className="mt-4" >
                <Col sm={{size:15, offset:1}}>
                <Card color="dark" outline>
                <CardHeader>
                    <h3>Login</h3>
                </CardHeader>
                <CardBody>
        
    <Form onSubmit={handleFormSubmit}>  
        <FormGroup>
        <Label for="email">Enter Email</Label>
        <Input type="email" id="email" placeholder="Email" name="email" required value={loginDetail.username} onChange={(e)=>handleChange(e,'email')}/>
        </FormGroup>
        <FormGroup>
        <Label for="password">Enter Password</Label>
        <Input type="password" id="password" placeholder="Password" name="password" required value={loginDetail.password} onChange={(e)=>handleChange(e,'password')}/>
        </FormGroup>
      <Container className="text-center">
      
        <Button color="dark">Login</Button>
        <Button onClick={resetData}color="secondary" type="reset" className="ms-2">Reset</Button>
        </Container>
    </Form>
  
  </CardBody>
  </Card>
                </Col>
            </Row>
  </Container>
        </Base>
    );
};
export default Login;