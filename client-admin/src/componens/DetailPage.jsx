import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import { useNavigate, useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

function DetailPage() {
    const params = useParams()
    const navigate = useNavigate()
    const {data, loading, errorMessage} = useFetch("products",params.id)
  console.log(data);

  return (
    <Card>
      <Card.Header>{data.name}</Card.Header>
      <Card.Body>
        <Card.Title>Special title treatment</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Button variant="primary" onClick={()=> navigate(-1)}>Back</Button>
      </Card.Body>
    </Card>
  );
}

export default DetailPage;