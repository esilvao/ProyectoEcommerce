
import './App.css';
import { Route,Routes } from 'react-router-dom';
//import {useState} from 'react'
import Login from './Pages/login/Login'
import Registro from './Pages/registro/Registro'
import PerfilUsuario from './Pages/perfilusuario/PerfilUsuario'
import ListaProductos from './Pages/listaoroductos/ListaProductos'
import DetalleProducto from './Pages/detalleproducto/DetalleProducto'
import Footer from './Pages/footer/Footer'
import Home from './Pages/home/Home'
import Layout from './Components/Layout'
import NuevoProducto from './Pages/Admin/producto/NuevoProducto'
import EditarProducto from './Pages/Admin/producto/EditarProducto'

function App() {
  return (
    <div>
    <Routes>
      <Route path='/' element={<Layout />}>
          <Route path="/" element={<Home />}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/registro" element={<Registro/>}/>
          <Route path="/perfilusuario" element={<PerfilUsuario />}/>
          <Route path="/listaProductos" element={<ListaProductos />}/>
          <Route path="/detalleproducto" element={<DetalleProducto />}/>
          <Route path="/footer" element={<Footer />}/>
          <Route path="/admin/nuevoproducto" element={<NuevoProducto />}/> 
          <Route path="/admin/editarproducto" element={<EditarProducto />}/>          
        </Route>
      </Routes>
    </div>
  );
}

export default App;
