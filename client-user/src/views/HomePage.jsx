
import CardProduct from '../components/Card';
import Corousel from '../components/Corousel';
import Footer from '../components/Footer';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {useSelector,useDispatch} from 'react-redux'
import { useEffect } from 'react';
import { fetchProducts } from '../store/action/actionCreator';

function HomePage() {
    const dispatch = useDispatch()
    
    useEffect(()=>{
        dispatch(fetchProducts())
    },[])
    const products = useSelector((state)=> state.products.products)
    console.log(products);
  return (
    <>
    <header className='container'> 
        <Corousel />
    </header>

    <main className='container mt-5 mb-5'>
     <div className='container d-flex justify-content-center '>
        <Row xs={1} md={4} className="g-4">
        { 
            products?.map((product) =>(
                <Col key={product.id}>
                    <CardProduct  product={product}/>
                </Col> 
            ))
        }
        </Row>
     </div>
        
    </main>

    <Footer/>
    </>
  );
}

export default HomePage;