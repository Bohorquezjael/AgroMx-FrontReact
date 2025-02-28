import ProductCard from "./ProductCard";
import PropTypes from "prop-types";

const ProductList = ({
	productos,
	agregarAlCarrito,
	eliminarProducto,
	modificarProducto,
}) => {
	return (
		<div className="row">
			{productos.map((producto) => (
				<ProductCard
					key={producto.id}
					producto={producto}
					agregarAlCarrito={agregarAlCarrito}
					eliminarProducto={eliminarProducto}
					modificarProducto={modificarProducto}
				/>
			))}
		</div>
	);
};

// Validación de PropTypes
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
	eliminarProducto: PropTypes.func.isRequired,
	modificarProducto: PropTypes.func.isRequired,
};

export default ProductList;
