import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function CardProduct({product}){
 
    return(
        <Card className='w-100 h-100' border='info'>
            <div >
                <Card.Img className='w-50' variant="top" src={product.mainImg} />
                <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <Link to={`/details/${product.id}`}>
                    <Button variant="primary">see detail</Button>
                </Link>
                </Card.Body>
            </div>
      </Card>
    )
}

export default CardProduct