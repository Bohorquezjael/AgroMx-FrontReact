import { Tooltip } from "bootstrap";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { useContext, useEffect } from "react"; // Solo una importación de useContext
import { NavLink } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { CarritoContext } from "../pages/carrito"; // Asegúrate de que esta línea esté bien
Tooltip
useEffect



function Header() {
  const { countProducts } = useContext(CarritoContext);
  const { user } = useContext(UserContext);


  return (
    <div id="ancho" className="container-fluid">
      <div id="anchoHA" className="row align-items-center">
        <div className="col-3 col-md-2 d-flex justify-content-center">
          <img
            className="img-fluid p-1"
            id="logo"
            src="/images/logVectorizado2.svg"
            alt="Logo AgroMX"
          />
        </div>

        <div className="col-5 col-md-6 d-flex justify-content-center align-items-center">
          <div className="d-flex justify-content-center align-items-center me-3">
            <button
              id="lupa"
              className="btn btn-outline-success btn-lupa d-none d-sm-block d-flex justify-content-center align-items-center"
              type="submit"
            >
              <i className="bi bi-search"></i>
            </button>
          </div>

          <div className="d-flex justify-content-center w-100">
            <form className="d-flex w-100" role="search">
              <input
                className="form-control me-2 w-100 barra-busqueda d-none d-sm-block"
                type="search"
                placeholder="Busca tu producto"
                aria-label="Search"
              />
            </form>
          </div>
        </div>

        {/* Carrito y Avatar  */}
        <div className="col-4 col-md-4 d-flex justify-content-end align-items-center gap-3 p-4 mt-md-0">
          <NavLink to={"/Carrito"} className="position-relative">

            <i data-bs-custom-class="custom-tooltip" data-bs-toggle="tooltip" data-bs-placement="right" title="Carrito" className="bi bi-basket2 me-3 position-relative text-dark"></i>
            {/* <p style={{fontSize:"0.75rem", textAlign:"center"}}>Carrito</p> */}
            {countProducts > 0 && (
              <span className="position-absolute badge rounded-pill bg-danger"
                style={{ fontSize: "0.75rem", top: "0px", right: "0px", transform: "translate(50%, -50%)" }}>
                {countProducts}
              </span>
            )}
          </NavLink>


          <NavLink to={"/Login"}>

            {user ? (
              <img
                src={user.picture || "/images/default-profile.png"}
                alt="Foto de perfil"
                className="rounded-circle ms-3"
                width="40"
                height="40"
              />
            ) : (<i style={{ "--bs-tooltip-bg": "var(--bs-primary)" }} data-bs-toggle="tooltip" data-bs-placement="right" title="Iniciar sesión" className="bi bi-person-circle me-4 mx-4 text-dark"></i>)}
            {/* <p style={{fontSize:"0.75rem", textAlign:"center"}}>Iniciar sesión</p> */}

          </NavLink>

        </div>
      </div>


      <nav className="navbar navbar-expand-md navbar-light" >
        <div className="container-fluid">
          <NavLink
            className="navbar-brand"
            id="linkToPage"
            to={"/Inicio"}
          >
            Inicio
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  className="nav-link active"
                  id="linkToPage"
                  aria-current="page"
                  to={"/Catalogo"}
                >
                  Catálogo
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  id="linkToPage"
                  to={"/SobreNosotros"}
                >
                  Sobre Nosotros
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  id="linkToPage"
                  to={"/Comunidad"}
                >
                  Comunidad
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  id="linkToPage"
                  to={"/Registro"}
                >
                  Regístrate
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;