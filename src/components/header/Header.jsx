export default function Header() {
    return (
        <header className="header" style={{ width: '100%' }}>
            {/* Línea de color en la parte superior */}
            <div className="container-fluid greenLine" style={{ padding: 0, margin: 0 }}></div>

            {/* Barra superior con el logo, búsqueda e íconos */}
            <div className="container-fluid" style={{ padding: 0, margin: 0 }}>
                <div className="row align-items-center">
                    {/* Logo */}
                    <div className="col-4 col-md-2 d-flex justify-content-start">
                        <img
                            className="logo img-fluid p-1"
                            src="/images/image.png"
                            alt="Logo AgroMX"
                        />
                    </div>

                    {/* Lupa y barra de búsqueda */}
                    <div className="col-8 col-md-6 d-flex justify-content-center align-items-center">
                        <form className="d-flex w-100" role="search">
                            <input
                                className="form-control me-2 w-100 barra-busqueda"
                                type="search"
                                placeholder="Busca tu producto"
                                aria-label="Buscar producto"
                            />
                            <button
                                id="lupa"
                                className="btn btn-outline-success btn-sm btn-lupa"
                                type="submit"
                                aria-label="Buscar"
                            >
                                <img className="icono-lupa" src="/images/lupa.png" alt="lupa"/>
                            </button>
                        </form>
                    </div>

                    {/* Carrito y Avatar */}
                    <div className="col-12 col-md-4 d-flex justify-content-center align-items-center mt-2 mt-md-0">
                    <img className="icono cart" src="/images/carrito-de-compras.png" alt="icono de carrito de compras"/>
                    <img className="icono" src="/images/avatar.png" alt="icono de usuario"/>
                    </div>
                </div>
            </div>

            {/* Barra de navegación */}
            <nav className="navbar navbar-expand-lg navbar-light" style={{ padding: 0, margin: 0 }}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="../../../index.html">Inicio</a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Alternar navegación"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">
                                    Catálogo
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="./public/sources/pages/acercaDeNosotros/acercaDe.html">
                                    Sobre Nosotros
                                </a>
                            </li>
                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link dropdown-toggle"
                                    href="#"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Comunidad
                                </a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <a className="dropdown-item text-dark" href="#">
                                            Recetas
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item text-dark" href="#">
                                            Catálogos
                                        </a>
                                    </li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li>
                                        <a className="dropdown-item text-dark" href="#">
                                            Comunidad
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" aria-disabled="true">
                                    Contacto
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}
