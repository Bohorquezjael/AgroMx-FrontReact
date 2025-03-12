import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./DetallesProductos.css";

const ProductosDestacados = () => {
  const [productos, setProductos] = useState([]);

  // Genera un arreglo de IDs aleatorios (1 a 45)
  const RandomArray = () => {
    let ArrayDestacados = [];
    for (let i = 0; i < 4; i++) {
      ArrayDestacados.push(Math.floor(Math.random() * 45) + 1);
    }
    return ArrayDestacados;
  };

  useEffect(() => {
    fetch("/json/data2.json")
      .then((response) => response.json())
      .then((data) => {
        const destacados = (ids, data) => {
          return ids.map((id) => data[id] || null);
        };

        const idsArray = RandomArray();
        const result = destacados(idsArray, data);

        setProductos(result.filter((producto) => producto !== null)); // Filtra productos nulos
      });
  }, []);

  return (
    <div className="mt-5 container col-12 justify-content-center">
      <h2 className="text-center completaCanasta">Completa tu canasta</h2>
      <div className="row cards g-2">
        {productos.map((producto) => (
          <div key={producto.id} className="col-6 col-sm-6 col-md-4 col-lg-3 text-center">
            <div id="cardDetalles" className="card">
              <img src={producto.imagen} className="card-img-top" alt={producto.nombre} />
              <div className="cardDetalles-body">
                <h5 className="card-title">{producto.nombre}</h5>
                <p className="card-text">${producto.precio.toFixed(2)} MXN</p>
                <button className="btn btn-primary mt-0 btnAgregar">Agregar</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const DetallesProducto = () => {
  const [cantidad, setCantidad] = useState(1);
  const aumentarContador = () => setCantidad(cantidad + 1);
  const disminuirContador = () => setCantidad(cantidad > 1 ? cantidad - 1 : 1);

  const { id } = useParams();
  const [producto, setProducto] = useState({}); // Inicializa como objeto vacío

  useEffect(() => {
    fetch("/json/data2.json")
      .then((response) => response.json())
      .then((data) => {
        const productoEncontrado = data.find((item) => item.id === parseInt(id));
        setProducto(productoEncontrado || {}); // Evita errores si no se encuentra el producto
      });
  }, [id]);

  if (!producto || !producto.nombre) {
    return <p>Cargando...</p>;
  }

  return (
    <>
      <div className="row mt-5">
        <div className="col-8 col-md-8 mx-auto">
          <h2 className="text-start">{producto.nombre}</h2>
          <div className="row">
            <div className="col-12 col-md-6" id="imagen">
              <img className="img-fluid" src={producto.imagen} alt={producto.nombre} />
            </div>
            <div className="col-12 col-md-6 mt-5" id="info">
              <div className="fs-2" id="precio">
                <p><strong>${producto.precio?.toFixed(2)}</strong></p>
              </div>
              <div id="descripcion">
                <p>{producto.descripcion}</p>
              </div>
            </div>
          </div>

          <div className="row botones align-items-center justify-content-start mt-3">
            <div className="col-auto">
              <button className="btn btn-warning contador mx-1" onClick={disminuirContador}>-</button>
            </div>
            <div className="col-auto">
              <span className="fs-5 cantidad text-center">{cantidad}</span>
            </div>
            <div className="col-auto">
              <button className="btn btn-warning contador mx-1" onClick={aumentarContador}>+</button>
            </div>
            <div className="col-auto">
              <button className="btn btn-success agregar mx-1 ms-auto">Agregar</button>
            </div>
          </div>
        </div>
      </div>

      <div className="col-12 mt-4 mb-5 my-4">
        <div id="contenedor1" className="p-3 border rounded detallesProducto">
          <h4 id="text1" data-bs-toggle="collapse" data-bs-target="#contenidoProducto" aria-expanded="false" aria-controls="contenidoProducto" style={{ cursor: "pointer" }}>
            ¿Por qué comprar este producto?
          </h4>
          <div className="collapse" id="contenidoProducto">
            <p>{producto.beneficios || "Sin información adicional"}</p>
          </div>
        </div>

        <div id="contenedor2" className="p-3 mt-3 bg-opacity-25 border detallesProducto rounded">
          <h4 id="text2" data-bs-toggle="collapse" data-bs-target="#contenidoProduccion" aria-expanded="false" aria-controls="contenidoProduccion" style={{ cursor: "pointer" }}>
            Más información sobre su producción
          </h4>
          <div className="collapse" id="contenidoProduccion">
            <p>{producto.produccion || "No disponible"}</p>
            <p>{producto.detalles?.informacion || "Sin detalles"}</p>
            <ul>
              {producto.detalles?.tecnicas?.map((tecnica, index) => (
                <li key={index}>
                  <strong>{tecnica.nombre}:</strong> {tecnica.descripcion}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <ProductosDestacados />
    </>
  );
};

export default DetallesProducto;

