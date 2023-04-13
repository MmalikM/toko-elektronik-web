import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchCategories } from '../store/action/actionCreatorCategories';
import { createProduct, fetchProducts, updateProduct } from '../store/action/actionCreatorProduct';
import Swal from 'sweetalert2';

function ModalProduct(props) {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {categories} = useSelector((state)=> state.categories)
    
    const [newProduct, setNewProduct] = useState({
        name:'',
        description:'',
        price:'',
        mainImg:'',
        categoryId:0,
        image1:'',
        image2:'',
        image3:'',
    })  
    
    useEffect(()=>{     
        dispatch(fetchCategories())
    },[props])

    useEffect(()=>{
        if(props.dataProduct){
            setNewProduct({
                name:props.dataProduct.name,
                description:props.dataProduct.description,
                price:props.dataProduct.price,
                mainImg:props.dataProduct.mainImg,
                categoryId:props.dataProduct.categoryId,
                image1:props?.dataProduct?.Images[0]?.imgUrl,
                image2:props?.dataProduct?.Images[1]?.imgUrl,
                image3:props?.dataProduct?.Images[2]?.imgUrl,
                
            })
        }
    },[props])

    const inputProduct = (e) =>{
        const {value,name} = e.target
        const product = {
            ...newProduct,
            [name]:value
        }
        setNewProduct(product)
    }

    const submit = async (e) =>{
        try {       
            e.preventDefault()
            if(!props.dataProduct){
                const sendData = {
                    ...newProduct,
                    images:[
                        {imgUrl:newProduct.image1},
                        {imgUrl:newProduct.image2},
                        {imgUrl:newProduct.image3},
                    ]
                }
                // console.log(sendData);
               await dispatch(createProduct(sendData));
               Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Product Created',
                showConfirmButton: false,
                timer: 1000
              })
            }else{
                const sendData = {
                    ...newProduct,
                    images:[
                        {id:props.dataProduct.Images[0].id,imgUrl:newProduct.image1},
                        {id:props.dataProduct.Images[1].id,imgUrl:newProduct.image2},
                        {id:props.dataProduct.Images[2].id,imgUrl:newProduct.image3},
                    ]
                }
                // console.log(sendData);
               await dispatch(updateProduct(props.dataProduct.id,sendData))
               Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Product Updated',
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
          {props.type} Product
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={submit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Product Name</Form.Label>
            <Form.Control 
                type="text" 
                placeholder="Enter Product Name" 
                name='name'
                value={newProduct?.name}
                onChange={inputProduct}
            />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Description</Form.Label>
            <Form.Control 
                type="text" 
                placeholder="Enter Description" 
                name='description'
                value={newProduct?.description}
                onChange={inputProduct}
            />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Price</Form.Label>
            <Form.Control 
                type="number" 
                placeholder="Enter Price" 
                name='price'
                value={newProduct?.price}
                onChange={inputProduct}
            />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Product Image</Form.Label>
            <Form.Control 
                type="text" 
                placeholder="Enter Product Image" 
                name='mainImg'
                value={newProduct?.mainImg}
                onChange={inputProduct}
            />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Category</Form.Label>
            <Form.Select 
                aria-label="Default select example"
                name='categoryId'
                value={newProduct.categoryId? newProduct.categoryId:"default"}
                onChange={inputProduct}
            >
                <option selected disabled value={"default"} >Chosee Category</option>
                {
                    categories?.map(category=>(
                        <option key={category.id} value={category.id}>{category.name}</option>
                    ))
                }
            </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>image</Form.Label>
            <Form.Control 
                type="text" 
                placeholder="Enter image" 
                name='image1'
                value={newProduct?.image1}
                onChange={inputProduct}
            />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>image</Form.Label>
            <Form.Control 
                type="text" 
                placeholder="Enter image" 
                name='image2'
                value={newProduct?.image2}
                onChange={inputProduct}
            />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>image</Form.Label>
            <Form.Control 
                type="text" 
                placeholder="Enter image" 
                name='image3'
                value={newProduct?.image3}
                onChange={inputProduct}
            />
        </Form.Group>
        <Button variant="primary" type="submit">
            Submit
        </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default ModalProduct