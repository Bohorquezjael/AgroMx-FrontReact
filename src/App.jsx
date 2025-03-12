import '@fontsource/gabriela'
import '@fontsource/mako'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Catalogo from './pages/Catalogo/Catalogo'
import { Comunidad } from './pages/Comunidad/Comunidad'
import DetallesProducto from './pages/DetallesProducto/DetallesProducto'
import { DeveloperTeam } from './pages/DeveloperTeam/DeveloperTeam'
import Inicio from './pages/Inicio'
import Login from './pages/login/Login'
import NuevosProductos from './pages/Productos/NuevosProductos'
import Registro from './pages/Registro/Registro'
import { SobreNosotros } from './pages/SobreNosotros/SobreNosotros'



function App() {

  return (
    <>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/Login" element= {<Login/>}></Route>
          <Route path="/SobreNosotros" element={<SobreNosotros />} />
          <Route path="/Inicio" element={<Inicio />}></Route>
          <Route path="/" element={<Inicio />}></Route>
          <Route path="/Comunidad" element={<Comunidad />} />
          <Route path="/NuevosProductos" element={<NuevosProductos />}></Route>
          <Route path="/catalogo" element={<Catalogo />} />
          <Route path="/producto/:id" element={<DetallesProducto />} />
          <Route path="/Registro" element={<Registro />}></Route>
          <Route path="/DetallesProducto" element={<DetallesProducto />} />
          <Route path="/DeveloperTeam" element={<DeveloperTeam />} />



        </Routes>

        <Footer></Footer>
      </BrowserRouter>
    </>
  )
}

export default App
