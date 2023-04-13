import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function CardProduct({product,index}) {
    return(
      <Card className='m-2'>
      <Card.Img variant="top" src={product.mainImg} style={{width:"100px"}}/>
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>{product.description}</Card.Text>
        <Link to={`/details/${product.id}`}>
        <Button variant="primary">see detail</Button>
        </Link>
      </Card.Body>
    </Card>
    )
}

export default CardProduct;
