import { useEffect, useState } from "react";

import CardProduct from "../componens/CardProduct";
import Table from "react-bootstrap/Table";
import RowTabel from "../componens/RowTable";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../store/action/actionCreatorProduct";
import ModalProduct from "../componens/ModalProduct";
import Button from "react-bootstrap/esm/Button";


function HomePage() {
  const {loadingProduct,products} = useSelector((state)=>state.products)
  const dispatch = useDispatch()
  const [modalShow, setModalShow] = useState(false);
  const [type,setType] = useState('')
  const [dataProduct,setDataProduct] =useState(null)

  const createProduct = () =>{
    setModalShow(true)
    setType("Create")
    setDataProduct(null)
  }

  useEffect(()=>{
    dispatch(fetchProducts())
  },[])
  

  return (
    <>  
       <ModalProduct
        show={modalShow}
        onHide={() => setModalShow(false)}
        type={type}
      />
    <div className="container">
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1>Home</h1>
        <Button variant="success" onClick={() => createProduct()}>
        Add Product
        </Button>

      </div>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>No.</th>
            <th>Product</th>
            <th>Description</th>
            <th>Price</th>
            <th>Image</th>
            <th>Category</th>
            <th>Author</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {products?.map((product, index) => (
            <RowTabel key={product?.id} product={product} index={index} />
          ))}
        </tbody>
      </Table>
    </div>
    </>


  );
}

export default HomePage;
