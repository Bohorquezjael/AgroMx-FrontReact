import "bootstrap/dist/css/bootstrap.min.css";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { CarritoContext } from "../carrito";
import style from "./carrito.module.css";
UserContext
style

const Carrito = () => {
  const { carrito, setCarrito, countProducts } = useContext(CarritoContext);

  const envio = 15;
  const descuento = 0.2; // 20%

  // Función para actualizar la cantidad de un producto
  const actualizarCantidad = (id, cambio) => {
    setCarrito((prev) =>
      prev.map((prod) =>
        prod.id === id ? { ...prod, cantidad: Math.max(1, prod.cantidad + cambio) } : prod
      )
    );
  };

  // Función para eliminar un producto del carrito
  const eliminarProducto = (id) => {
    setCarrito(carrito.filter((prod) => prod.id !== id));
  };

  const subtotal = carrito.reduce((acc, prod) => acc + prod.precio * prod.cantidad, 0);
  const descuentoAplicado = subtotal * descuento;
  const totalPagar = subtotal - descuentoAplicado + envio;

  return (
    <div className="container mt-5">
      <h2 className="text-center text-success">Tu carrito ({countProducts} productos)</h2>

      <div className="row">
        {/* Lista de productos */}
        <div className="col-md-7">
          <div className="card p-3">
            {carrito.length === 0 ? (
              <p className="text-center">Tu carrito está vacío.</p>
            ) : (
              carrito.map((prod) => (
                <div key={prod.id} className="d-flex align-items-center border-bottom pb-2 mb-2">
                  <img src={prod.imagen} alt={prod.nombre} className="me-3" style={{ width: "60px" }} />
                  <div className="flex-grow-1">
                    <h5 className="mb-1">{prod.nombre}</h5>
                    <p className="mb-0 fw-bold">${prod.precio}</p>
                  </div>
                  <div className="d-flex align-items-center">
                    <button
                      className="btn btn-outline-secondary btn-sm"
                      onClick={() => actualizarCantidad(prod.id, -1)}
                    >
                      −
                    </button>
                    <span className="mx-2">{prod.cantidad}</span>
                    <button
                      className="btn btn-outline-secondary btn-sm"
                      onClick={() => actualizarCantidad(prod.id, 1)}
                    >
                      +
                    </button>
                  </div>
                  <button className="btn btn-danger btn-sm ms-3" onClick={() => eliminarProducto(prod.id)}>
                    Eliminar
                  </button>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Resumen de compra */}
        <div className="col-md-5">
          <div className="card p-3">
            <h4 className="fw-bold">Total de compra</h4>
            <p className="d-flex justify-content-between">
              <span>Subtotal:</span> <span className="fw-bold">${subtotal}MXN</span>
            </p>
            <p className="d-flex justify-content-between text-danger">
              <span>Descuento (20%):</span> <span>- ${descuentoAplicado.toFixed(0)}MXN</span>
            </p>
            <p className="d-flex justify-content-between">
              <span>Envío:</span> <span>${envio}</span>
            </p>
            <hr />
            <h5 className="d-flex justify-content-between">
              <span>Total:</span> <span className="fw-bold">${totalPagar.toFixed(0)}MXN</span>
            </h5>

            <div className="input-group my-3 cupon-input">
              <input type="text" className="form-control text-center" placeholder="Añadir cupón de descuento" />
              <button className="btn btn-warning w-30 m-0">Aplicar</button>
            </div>

            <button className="btn btn-success">Pagar →</button>

            <div className="mt-3 text-center">
              <img src="/images/Métodos-de-pago.png" alt="Métodos de pago" style={{ width: "80%" }} />
            </div>
          </div>
        </div>
      </div>

      {/* Sección de suscripción */}
      <div className="bg-success text-white text-center p-3 mt-4 mb-5 rounded">
        <h5>¡Descubre nuestras promociones!</h5>
        <p>¡Suscríbete!</p>
        <div className="input-group h-25 w-50 mx-auto" style={{ maxHeight: "10%" }}>
          <span id="email" className="input-group-text">📧</span>
          <input type="email" className="form-control" placeholder="Tu correo electrónico" />
          <button id="email" className="btn btn-light">Enviar</button>
        </div>
      </div>
    </div>
  );
};

export default Carrito;
