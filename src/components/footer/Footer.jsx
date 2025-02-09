export default function Footer() {
    return (
        <footer className="footer">
        <div className="container-fluid text-white py-4">
            <div className="row">
                <div className="col-12 col-md-3 text-center mb-4 mb-md-0">
                    <h6 className="fw-bold">¿Necesitas ayuda?</h6>
                    <p className="mb-1"><strong>Tel. 555 324 6353</strong></p>
                    <p className="mb-1">agromx.soporte@gmail.com</p>
                    <p className="mb-0"><strong>Horarios de atención:</strong></p>
                    <p className="mb-0">9:00 a 18:00 h</p>
                </div>

                <div className="col-12 col-md-3 text-center mb-4 mb-md-0">
                    <a href="/acercaDeNosotros" className="text-white text-decoration-none"><strong>Developer Team</strong></a>
                </div>

                <div className="col-12 col-md-3 text-center mb-4 mb-md-0">
                    <h6 className="fw-bold">Regístrate</h6>
                    <h4 className="fw-bold mt-3 p-1">AgroMX</h4>
                    <i className="fa-regular fa-copyright fa-xl"></i>
                </div>

                <div className="col-12 col-md-3 text-center">
                    <div className="d-flex justify-content-center align-items-center">
                        <div className="text-center mx-3 my-4">
                            <a href="https://facebook.com" aria-label="Facebook AgroMx" className="text-white text-decoration-none">
                                <i className="fa-brands fa-facebook fa-2xl" style={{ color: '#fdbf53' }}></i>
                                <p className="mb-0 small mt-2">AgroMx</p>
                            </a>
                        </div>
                        <div className="text-center mx-3">
                            <a href="https://instagram.com" aria-label="Instagram AgroMx" className="text-white text-decoration-none">
                                <i className="fa-brands fa-square-instagram fa-2xl" style={{ color: '#fdbf51' }}></i>
                                <p className="mb-0 small mt-2">AgroMx</p>
                            </a>
                        </div>
                        <div className="text-center mx-3">
                            <a href="https://web.whatsapp.com/" aria-label="WhatsApp AgroMx" className="text-white text-decoration-none">
                                <i className="fa-brands fa-square-whatsapp fa-2xl" style={{ color: '#fdbf59' }}></i>
                                <p className="mb-0 small mt-2">WhatsApp</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </footer>
    );
}
