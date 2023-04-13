import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate, useParams } from 'react-router-dom';
import {useSelector,useDispatch} from 'react-redux'
import { detailProducts } from '../store/action/actionCreator';
import { useEffect } from 'react';

function DetailPage() {
  const detailProduct = useSelector((state)=> state.products.detailProduct)
  const dispatch = useDispatch()
  const params = useParams()
  const navigate = useNavigate()

  useEffect(()=>{
    dispatch(detailProducts(params.id))
    console.log(detailProduct);
  },[])

  return (
    <div className='container d-flex justify-content-center'>
    <Card className='my-5 w-50'>
      <Card.Body>
        <Card.Title>
          <img src={detailProduct?.mainImg} style={{width:"500px"}}  />
          </Card.Title>
      </Card.Body>
      </Card>
      <Card className='my-5 w-50'>
        <Card.Header>Detail Product</Card.Header>
        <Card.Body>
          <Card.Title style={{fontWeight:"800"}}>{detailProduct?.name}</Card.Title>
          <Card.Text>
            {detailProduct?.Category?.name}
          </Card.Text>
          <Card.Text style={{fontSize:"2rem"}}>
            Rp.{detailProduct?.price},00
          </Card.Text>
          <Card.Text>
            Description: <br />
            {detailProduct?.description}
          </Card.Text>
           <Card.Text className='d-flex'>
          {detailProduct?.Images?.map(el=>(
              <Card key={el.id} className='m-2' >
                <img src={el.imgUrl} />
              </Card>
            )
            )}
        </Card.Text>
        </Card.Body>
        <div className='d-flex m-5'>
          <Button variant="primary" onClick={()=> navigate(-1)}>Back</Button>
        </div>
      </Card>
    </div>
  );
}

export default DetailPage;