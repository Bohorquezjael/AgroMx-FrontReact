import PropTypes from "prop-types";
import ProductCard from "./ProductCard";

const ProductList = ({
  productos,
  agregarAlCarrito,
  verDetalles,
}) => {
  return (
    <div className="row">
      {productos.map((producto) => (
        <ProductCard
          key={producto.id}
          producto={producto}
          agregarAlCarrito={agregarAlCarrito}
          verDetalles={verDetalles}
        />
      ))}
    </div>
  );
};

ProductList.propTypes = {
  productos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      nombre: PropTypes.string.isRequired,
      categoria: PropTypes.string.isRequired,
      precio: PropTypes.number.isRequired,
      imagen: PropTypes.string.isRequired,
    })
  ).isRequired,
  agregarAlCarrito: PropTypes.func.isRequired,
  verDetalles: PropTypes.func.isRequired,
};

export default ProductList;
