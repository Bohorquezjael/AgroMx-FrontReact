import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="col-12 text-center inicio-footer">
        <img
          className="logo img-fluid p-1"
          src="/images/logVectorizado2.svg"
          alt="Logo AgroMX"
        />
        <p id="slogan-footer">
          <strong>Alimentos sanos, comercio justo, futuro sostenible</strong>

        </p>
      </div>
      <div className="container-fluid text-white py-4 final-footer">
        <div className="row">
          {/* {Necesitas Ayuda} */}
          <div className="col-12 col-md-6 col-lg-3 text-center px-1">
            <h5 className="mt-1">¿Necesitas ayuda?</h5>
            <p className="mb-1">Tel. 555 324 6353</p>
            <p className="mb-1 none">agromx.soporte@gmail.com</p>
            <p className="mb-0">Horarios de atención:</p>
            <p className="mb-0">9:00 a 18:00 h</p>
          </div>

          {/* {Acerca de nosotros} */}
          <div className="col-12 col-md-6 col-lg-3 text-center">
            <NavLink
              to={"/DeveloperTeam"}
              style={{ color: "white", textDecoration: "none" }}
            >
              <h5 className="mt-1">Developer Team</h5>
            </NavLink>
            <NavLink
              to={"/NuevosProductos"}
              style={{ color: "white", textDecoration: "none" }}
            >
              <h5>Nuevos Productos</h5>
            </NavLink>
            {/* Registráte */}
            <NavLink
              to={"/Registro"}
              style={{ color: "white", textDecoration: "none" }}
            >
              <h5>Regístrate</h5>
            </NavLink>
          </div>


          <div className="col-12 col-md-6 col-lg-3 text-center">

            <h4 className="fw-bold mt-1 p-1">AgroMX </h4>
            <i className="fa-regular fa-copyright fa-xl"></i>
          </div>

          {/* <!-- Logos de redes sociales --> */}
          <div className="col-12 col-md-6 col-lg-3 text-center">
            <div className="d-flex justify-content-center align-items-center">
              <div className="text-center mx-3 my-4">
                <NavLink
                  to="https://www.facebook.com/"
                  className="text-white text-decoration-none"
                >
                  <i className="bi bi-facebook"></i>
                  <p className="mb-0 small mt-2">AgroMx</p>
                </NavLink>
              </div>
              <div className="text-center mx-3">
                <NavLink
                  to="https://www.instagram.com/"
                  className="text-white text-decoration-none"
                >
                  <i className="bi bi-instagram"></i>
                  <p className="mb-0 small mt-2">AgroMx</p>
                </NavLink>
              </div>
              <div className="text-center mx-3">
                <NavLink
                  to="https://wa.me/+529511738814?text=Hola%2C%20quiero%20mas%20informaci%C3%B3n"
                  className="text-white text-decoration-none"
                >
                  <i className="bi bi-whatsapp"></i>
                  <p className="mb-0 small mt-2">WhatsApp</p>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Footer;
