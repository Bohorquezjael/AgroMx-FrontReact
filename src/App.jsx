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
import DetallesProducto from './pages/DetallesProducto/DetallesProducto'
import NuevosProductos from './pages/Productos/NuevosProductos'
import { SobreNosotros } from './pages/SobreNosotros/SobreNosotros'
import Inicio from './pages/Inicio';
import Registro from './pages/Registro/Registro';



function App() {

  return (
    <>
      <BrowserRouter>
        <Header></Header>
        {/* <Inicio></Inicio> */}
        <Routes>
          <Route path="/SobreNosotros" element={<SobreNosotros />} />
          <Route path="/Inicio" element={<Inicio />}></Route>
          <Route path="/" element={<Inicio />}></Route>
          <Route path="/NuevosProductos" element={<NuevosProductos />}></Route>
          <Route path="/catalogo" element={<Catalogo />} />
          <Route path="/Registro" element={<Registro />}></Route>
          <Route path="/DetallesProducto" element={<DetallesProducto />} />

        </Routes>

        <Footer></Footer>
      </BrowserRouter>
    </>
  )
}

export default App
