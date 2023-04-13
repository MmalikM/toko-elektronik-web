import { useState } from "react";
import Button from "react-bootstrap/esm/Button"
import { useDispatch } from "react-redux"
import { destroyProduct } from "../store/action/actionCreatorProduct"
import ModalProduct from "./ModalProduct";


function RowTabel({product,index}){
    const dispatch = useDispatch()
    const [modalShow, setModalShow] = useState(false);
    const [type,setType] = useState('')
    const [dataProduct, setDataProduct] = useState(null)

    const deleteProduct = (id) =>{
        dispatch(destroyProduct(id))
    }
    const editProduct = (data) =>{
        setModalShow(true)
        setType("edit")
        setDataProduct(data) 
    }
    return(
        <>
        <ModalProduct
          show={modalShow}
          onHide={() => setModalShow(false)}
          type={type}
          dataProduct={dataProduct}
        />
        <tr >
            <td>{++index}</td>
            <td>{product.name}</td>
            <td>{product.description}</td>
            <td>{product.price}</td>
            <td>  
                <img src={product.mainImg} alt={product.name} style={{width:"100px"}}/>  
            </td>
            <td>{product.categoryId}</td>
            <td>{product.authorId}</td>
            <td className="d-flex flex-column m-auto">
            <Button className="mb-2" variant="primary" onClick={() => editProduct(product) } >
                  edit
             </Button>
            <Button variant="danger" onClick={()=>deleteProduct(product.id)}>delete</Button>
            </td>
        </tr>
        </>
    )
}

export default RowTabel