
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Carousel from 'react-bootstrap/Carousel';
import Badge from 'react-bootstrap/Badge';

const Home = () => {
  return(
    <div>
      <CarrucelHome />
      <LoMasVendido />
    </div>
  )
}
const LoMasVendido = () => {
  return (
    <div>   
      <Row>
        <Col >
          <Card >
          <Card.Header>Featured</Card.Header>
            <Card.Img variant="top" src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8TW9kYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60" alt="S"  style={{width : '200px',height: '250px'}} />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
          <Card.Header>Featured</Card.Header>
          <Card.Img variant="top" src="https://images.unsplash.com/photo-1571678432797-0fd4f9061c4c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTEyfHxNb2RhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60" alt="S"  style={{width : '200px',height: '250px'}} />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
          <Card.Header>Featured</Card.Header>
          <Card.Img variant="top" src="https://images.unsplash.com/photo-1596902852858-126144389ee2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODB8fE1vZGF8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60" alt="S"  style={{width : '200px',height: '250px'}} />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
          <Card.Header>Featured</Card.Header>
          <Card.Img variant="top" src="https://images.unsplash.com/photo-1513094735237-8f2714d57c13?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjAwfHxNb2RhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60" alt="S"  style={{width : '200px',height: '250px'}} />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      
    </Row>
    </div>
  )
}


const CarrucelHome = () => {
  return (
<>
  <Carousel>
      <Carousel.Item>
          <img
            className="d-linea"
            src="https://images.unsplash.com/photo-1562572159-4efc207f5aff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjEwfHxNb2RhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
            alt="First slide"
            style={{width : '400px',height: '400px'}} 
          />
                  <img
            className="d-linea"
            src="https://images.unsplash.com/photo-1550614000-4895a10e1bfd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fE1vZGF8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
            alt="Second slide"
            style={{width : '400px',height: '400px'}} 
          />
          <img
            className="d-linea"
            src="https://images.unsplash.com/photo-1601762603339-fd61e28b698a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fE1vZGF8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
            alt="Third slide"
            style={{width : '400px',height: '400px'}}
          />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
            className="d-linea"
            src="https://plus.unsplash.com/premium_photo-1675129933526-5eb24a763248?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTU1fHxtb2RhJTIwZGUlMjBob21icmV8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
            alt="First slide"
            style={{width : '400px',height: '400px'}} 
          />
                  <img
            className="d-linea"
            src="https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjczfHxtb2RhJTIwZGUlMjBob21icmV8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
            alt="Second slide"
            style={{width : '400px',height: '400px'}} 
          />
          <img
            className="d-linea"
            src="https://images.unsplash.com/photo-1581381685617-4dc270458aa6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzYxfHxtb2RhJTIwZGUlMjBob21icmV8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
            alt="Third slide"
            style={{width : '400px',height: '400px'}}
          />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>
</>
  )

}
export default Home