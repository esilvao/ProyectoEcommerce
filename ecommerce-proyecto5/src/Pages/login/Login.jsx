import {Row,Col,Container,Placeholder} from 'react-bootstrap'
import logoEmpresa from "../../assets/LogoBrands.jpg";

const Login = () => {
  return (
    <>
    
    <Container>
      <Row>
        <Col className="mt-5 mb-5 d-flex justify-content-center">
        <img src={logoEmpresa} />
        </Col>
        <Col  className="mt-5 mb-5">

        <div class="p-3 mb-2  bg-secondary text-white">Ingresar con tu cuenta para acceder a descuentos y promociones</div>
          <div ClassName="bg-success ">
              
              <form >
                <input className='d-block mb-3 mt-3' type="text" name="emailUsuario" placeholder="ejemplo@gmail.com"></input>
                
                <input className='d-block mb-3' type="password" name="passwordUsuario" placeholder="Ingrese Clave"></input>
                
                <button type="button" className=" mt-2 me-5 rounded-pill  bg-secondary text-white"> Iniciar Session</button>
                
                <button type="button" className=" mb-5 rounded-pill bg-secondary text-white"> Registrarse</button>
                
              </form>
          </div>
            
        </Col>
      </Row>
    </Container>

    </>
  )
}

export default Login 