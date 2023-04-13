import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Login } from "../store/action/actionCreatorUsers";
import Swal from 'sweetalert2'

function LoginPage() {
  const dispatch = useDispatch()
  const [loginData, setLoginData] = useState({
    email:'',
    password:''
  });
  const navigate = useNavigate()

  const inputLogin = (e) => {
    const {value,name} = e.target
    const newLoginData= {
        ...loginData,
        [name]:value
    }
    setLoginData(newLoginData)
  };

  const submitInput = async (e) => {
    try {
      e.preventDefault();
      const data = await dispatch(Login(loginData))
      localStorage.setItem('access_token', data.access_token )
      Swal.fire('go Home')
      navigate('/')
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: `${error.message}`,
      })
    }
  };

  return (
    <>
    <div className="container">
    <h1>Login</h1> 
      <Form onSubmit={submitInput}>
        <Form.Group className="mb-3" >
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            onChange={inputLogin}
          />
        </Form.Group>

        <Form.Group className="mb-3" >
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            onChange={inputLogin}
          />
        </Form.Group>
        <Button variant="success" type="submit">
          Login
        </Button>
      </Form>

    </div>
    </>
  );
}

export default LoginPage;
