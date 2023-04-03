
import './App.css';
import { Route,Routes } from 'react-router-dom';
//import {useState} from 'react'
import Login from './Pages/login/Login'
import Registro from './Pages/registrarse/Registro'
import PerfilUsuario from './Pages/perfilusuario/PerfilUsuario'
import ListaProductos from './Pages/listaProductos/ListaProductos'
import DetalleProducto from './Pages/detalleproducto/DetalleProducto'
import Footer from './components/footer/Footer'
import Home from './Pages/home/Home'
import Layout from './components/layout/Layout'
import NuevoProducto from './Pages/admin/productos/NuevoProducto'
import EditarProducto from './Pages/admin/productos/EditarProducto'

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
