import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { createCategory, updateCategory } from '../store/action/actionCreatorCategories';
import Swal from 'sweetalert2';

function ModalCategory(props) {
    const dispatch= useDispatch()
    const navigate = useNavigate()

    const [newCategory,setNewCategory] = useState({
        name:''
    })

    useEffect(()=>{
        if(props.dataCategory){
            setNewCategory({
                name:props.dataCategory.name
            })
        }
    },[props])

    const inputCategory =(e)=>{
        const {value, name} = e.target
        const category ={
            ...newCategory,
            [name]:value
        }
        setNewCategory(category)
    }
    const submit = async(e) =>{
      try {
        e.preventDefault()
        if(!props.dataCategory){
            await dispatch(createCategory(newCategory))
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Category Created',
              showConfirmButton: false,
              timer: 1000
            })
        }else{
            await dispatch(updateCategory(props.dataCategory.id,newCategory))
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'update Category Success',
              showConfirmButton: false,
              timer: 1000
            })
        }
        props.onHide()
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: `${error.message}`
        })
        console.log(error.message);
      }
    }
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.type} Category
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={submit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Category Name</Form.Label>
            <Form.Control 
                type="text" 
                placeholder="Enter New Category" 
                value={newCategory.name}
                name="name"
                onChange={inputCategory}
            />
        </Form.Group>

        <Button variant="primary" type="submit">
            Submit
        </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalCategory;