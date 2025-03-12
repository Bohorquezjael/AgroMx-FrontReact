import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "./catalogo.module.css";
import ProductList from "./ProductList";
style

const Catalogo = () => {
  const [productos, setProductos] = useState([]);
  const navigate = useNavigate();
  const [carrito, setCarrito] = useState([]);
  const [cantidadCarrito, setCantidadCarrito] = useState(0);

  useEffect(() => {
    const data = localStorage.getItem("productos");
    if (data && JSON.parse(data).length > 0) {
      setProductos(JSON.parse(data));
    } else {
      fetch(`/data/data2.json`)
        .then((response) => {
          if (!response.ok) {
            throw new Error("No se pudo cargar el archivo JSON");
          }
          return response.json();
        })
        .then((data) => {
          setProductos(data);
          localStorage.setItem("productos", JSON.stringify(data));
        })
        .catch((error) => console.error("Error cargando el JSON:", error));
    }
  }, []);

  useEffect(() => {
    if (productos.length > 0) {
      localStorage.setItem("productos", JSON.stringify(productos));
    }
  }, [productos]);

  const verDetalles = (id) => {
    navigate(`/producto/${id}`);
  };

  const eliminarProducto = (id) => {
    setProductos(productos.filter((p) => p.id !== id));
  };

  const eliminarTodos = () => {
    setProductos([]);
  };

  const modificarProducto = (productoModificado) => {
    setProductos(
      productos.map((p) => (p.id === productoModificado.id ? productoModificado : p))
    );
  };

  const agregarAlCarrito = (producto) => {
    setCarrito([...carrito, producto]);
    setCantidadCarrito(cantidadCarrito + 1);
  };

  return (
    <div className="container my-5 text-center">
      <h1>Catálogo de Productos</h1>
      <ProductList
        productos={productos}
        agregarAlCarrito={agregarAlCarrito}
        eliminarProducto={eliminarProducto}
        modificarProducto={modificarProducto}
        verDetalles={verDetalles}
      />
      <p>Carrito: {cantidadCarrito}</p>
      <button className="btn btn-danger mb-5 w-75" onClick={eliminarTodos}>Eliminar Todos</button>
    </div>
  );
};

export default Catalogo;
