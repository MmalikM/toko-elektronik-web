import { useEffect, useState } from "react";
import Button from "react-bootstrap/esm/Button";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import ModalCategory from "../componens/ModalCategory";
import { destroyCategory, fetchCategories } from "../store/action/actionCreatorCategories";



function Categorypage() {

  const [type,setType] = useState('')
  const [dataCategory,setDataCategory] = useState(null)
  
  const [modalShow, setModalShow] = useState(false);
  const {loadingCategory,categories} = useSelector((state)=> state.categories)
  const dispatch = useDispatch()

  const deleteCategory =(id)=>{
    dispatch(destroyCategory(id))
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Category Deleted',
      showConfirmButton: false,
      timer: 1000
    })
  }

  const addCategory = () =>{
    setModalShow(true)
    setType("add")  
    setDataCategory(null)
}

  const editCategory = (data) =>{
      setModalShow(true)
      setType("edit")
      setDataCategory(data) 
  }

  useEffect(()=>{
    dispatch(fetchCategories())
  },[])


  return (
    <>  
    <ModalCategory
      show={modalShow}
      onHide={() => setModalShow(false)}
      type={type}
      dataCategory={dataCategory}
    />
    <div className="container">
      <div className=" d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
      <h1>Category</h1>   
        <Button variant="success" onClick={() => addCategory()}>
          Add Category
        </Button>
      </div>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>No.</th>
            <th>category</th>
            <th></th>
          
          </tr>
        </thead>
        <tbody>
      {
        categories?.map((category,index)=>(
          <tr key={category.id}>
            <td>{++index}</td>
            <td>{category.name}</td>
            <td className="m-auto d-flex justify-content-center ">
              <Button className="mx-5" variant="primary" onClick={() => editCategory(category) } >
                  edit
                </Button>
              <Button variant="danger" onClick={()=>deleteCategory(category.id)}>delete</Button>
            </td>
          </tr>
        ))
      }
        </tbody>
      </Table>
    </div>
    </>


  );
}

export default Categorypage;
