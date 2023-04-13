import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { Register } from "../store/action/actionCreatorUsers";


function RegisterPage() {
  const dispatch= useDispatch()
  const navigate = useNavigate()


  const [registerData, setRegister] = useState({
    username:'',
    email:'',
    password:'',
    phoneNumber:'',
    address:''
  });

  const inputLogin = (e) => {
    const {value,name} = e.target
    const newRegister= {
        ...registerData,
        [name]:value
    }
    setRegister(newRegister)
  };

  const submitInput =async(e) => {
    try {
      e.preventDefault();
      await dispatch(Register(registerData))
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Register Success',
        showConfirmButton: false,
        timer: 1000
      })
      navigate("/")
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: `${error.message}`
      })
      console.log(error.message);
    }
  };

  return (
    <>
    <div className="container">
    <h1>Register</h1> 
      <Form onSubmit={submitInput}>
      <Form.Group className="mb-3" >
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            name="username"
            placeholder="Username"
            value={registerData.username}
            onChange={inputLogin}
          />
        </Form.Group>
        <Form.Group className="mb-3" >
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            value={registerData.email}
            onChange={inputLogin}
          />
        </Form.Group>

        <Form.Group className="mb-3" >
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            value={registerData.password}
            onChange={inputLogin}
          />
        </Form.Group>
        <Form.Group className="mb-3" >
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="number"
            name="phoneNumber"
            placeholder="Phone Number"
            value={registerData.phoneNumber}
            onChange={inputLogin}
          />
        </Form.Group>
        <Form.Group className="mb-3" >
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="text"
            name="address"
            placeholder="Address"
            value={registerData.address}
            onChange={inputLogin}
          />
        </Form.Group>
        <Button variant="success" type="submit">
          register
        </Button>
      </Form>

    </div>
    </>
  );
}

export default RegisterPage;
