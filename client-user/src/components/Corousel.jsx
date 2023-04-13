import Carousel from 'react-bootstrap/Carousel';


function Corousel(){
    
    return(
    <Carousel className='h-600 mt-3'>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://images.tokopedia.net/img/cache/1200/BgtCLw/2022/12/17/540e4a46-670f-42b0-8e3c-e905e117eeb6.jpg.webp?ect=4g"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src="https://images.tokopedia.net/img/cache/1200/BgtCLw/2022/12/29/749235fb-b2fa-4647-8f91-679cb4e92ef9.jpg.webp?ect=4g"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.tokopedia.net/img/cache/1200/BgtCLw/2022/12/29/819e70dc-f503-402f-b630-ac7c09747d50.jpg.webp?ect=4g"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
    )
}

export default Corousel