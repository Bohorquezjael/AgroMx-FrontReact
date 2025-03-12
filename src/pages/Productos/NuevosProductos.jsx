import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./NuevosProductos.css";

const NuevosProductos = () => {
  // Estados para los campos del formulario
  const [producto, setProducto] = useState("");
  const [precio, setPrecio] = useState("");
  const [stock, setStock] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [razonCompra, setRazonCompra] = useState("");
  const [informacionProduccion, setInformacionProduccion] = useState("");
  const [imagenProducto, setImagenProducto] = useState("");
  const [errors, setErrors] = useState({});

  // Cargar los productos del localStorage
  const loadItemsFromLocalStorage = () => {
    const itemsData = localStorage.getItem("productos");
    return itemsData ? JSON.parse(itemsData) : [];
  };

  // Guardar los productos en localStorage
  const saveItemsToLocalStorage = (items) => {
    localStorage.setItem("productos", JSON.stringify(items));
  };

  // Función de validación de URL de imagen
  const isValidImageUrl = (url) => {
    try {
      const objetoUrl = new URL(url);
      return objetoUrl.protocol === "http:" || objetoUrl.protocol === "https:";
    } catch (error) {
      return false;
    }
  };

  // Función de validación
  const validateFields = () => {
    const newErrors = {};

    if (!producto.match(/^[A-Za-zÁÉÍÓÚáéíóúÑñ ]{1,30}$/)) {
      newErrors.producto = "El nombre del producto es inválido.";
    }
    if (!precio || isNaN(parseFloat(precio)) || parseFloat(precio) <= 0 || parseFloat(precio) >= 1000) {
      newErrors.precio = "Precio inválido. Debe ser un número entre 0 y 1000.";
    }
    if (!stock || isNaN(parseInt(stock)) || parseInt(stock) <= 0 || parseInt(stock) >= 1000) {
      newErrors.stock = "Stock inválido. Debe ser un número entre 0 y 1000.";
    }
    if (!isValidImageUrl(imagenProducto)) {
      newErrors.imagenProducto = "La URL de la imagen no es válida.";
    }

    return newErrors;
  };

  // Agregar producto
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar los campos
    const validationErrors = validateFields();

    if (Object.keys(validationErrors).length === 0) {
      // Si es válido, agregar el producto
      const items = loadItemsFromLocalStorage();
      const newItem = { producto, descripcion, razonCompra, informacionProduccion, precio: parseFloat(precio), stock: parseInt(stock), imagenProducto };
      items.push(newItem);
      saveItemsToLocalStorage(items);

      alert("Producto agregado");

      // Limpiar los campos del formulario
      setProducto("");
      setPrecio("");
      setStock("");
      setDescripcion("");
      setRazonCompra("");
      setInformacionProduccion("");
      setImagenProducto("");
      setErrors({});
    } else {
      // Si hay un error, mostrarlo
      setErrors(validationErrors);
      alert("Los datos son inválidos");
    }
  };

  return (
    <>
      <header id="header"></header>
      <div className="container mt-5">
        <h2 id="titulo" className="text-center titulo">
          ¿Qué subiremos hoy?
        </h2>
        <form id="newItemForm" className="col-8 mx-auto" onSubmit={handleSubmit}>
          <div className="mb-3 nombre-del-producto">
            <label htmlFor="producto" className="form-label">
              Nombre del producto
            </label>
            <input
              type="text"
              className="form-control"
              id="producto"
              value={producto}
              onChange={(e) => setProducto(e.target.value)}
              placeholder="Ingresa el nombre del producto"
              required
            />
            {errors.producto && <div className="invalid-feedback">{errors.producto}</div>}
          </div>

          <div className="mb-3 precio">
            <label htmlFor="precio" className="form-label">
              Precio
            </label>
            <input
              type="number"
              min="0"
              step="0.01"
              className="form-control"
              id="precio"
              value={precio}
              onChange={(e) => setPrecio(e.target.value)}
              placeholder="¿Qué precio tiene este producto?"
              required
            />
            {errors.precio && <div className="invalid-feedback">{errors.precio}</div>}
          </div>

          <div className="mb-3 stock">
            <label htmlFor="stock" className="form-label">
              Stock
            </label>
            <input
              type="number"
              className="form-control"
              id="stock"
              value={stock}
              onChange={(e) => setStock(e.target.value)}
              placeholder="Número de productos a añadir al stock"
              required
              min="1"
            />
            {errors.stock && <div className="invalid-feedback">{errors.stock}</div>}
          </div>

          <div className="mb-3">
            <label htmlFor="descripcion_producto" className="form-label">
              Descripción del Producto:
            </label>
            <textarea
              id="descripcion_producto"
              className="form-control"
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
              rows="3"
              required
            ></textarea>
          </div>

          <div className="mb-3">
            <label htmlFor="razon_compra">¿Por qué comprar este producto?</label>
            <textarea
              id="razon_compra"
              className="form-control"
              value={razonCompra}
              onChange={(e) => setRazonCompra(e.target.value)}
              rows="3"
              required
            ></textarea>
          </div>

          <div className="mb-3">
            <label htmlFor="informacion_produccion" className="form-label">
              Más información sobre su producción:
            </label>
            <textarea
              id="informacion_produccion"
              className="form-control"
              value={informacionProduccion}
              onChange={(e) => setInformacionProduccion(e.target.value)}
              rows="3"
              required
            ></textarea>
          </div>

          <div className="mb-3">
            <label htmlFor="imagen_producto">Imagen del Producto:</label>
            <input
              type="text"
              className="form-control"
              id="imagen_producto"
              value={imagenProducto}
              onChange={(e) => setImagenProducto(e.target.value)}
              required
            />
            {errors.imagenProducto && <div className="invalid-feedback">{errors.imagenProducto}</div>}
          </div>

          {imagenProducto && isValidImageUrl(imagenProducto) && (
            <div className="mb-3">
              <img src={imagenProducto} alt="Imagen del Producto" className="img-fluid" />
            </div>
          )}

          <button type="submit" className="btn btn-primary w-100 col-8 mx-auto">
            Agregar producto
          </button>


         <Link to="/catalogo" className="btn btn-primary w-100 col-8 mx-auto">
  Ver catálogo
</Link>
        </form>
      </div>

      <footer id="footer"></footer>
    </>
  );
};

export default NuevosProductos;


