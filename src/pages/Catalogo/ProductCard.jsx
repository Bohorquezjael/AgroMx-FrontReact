import PropTypes from "prop-types";

const ProductCard = ({
	producto,
	agregarAlCarrito,
	eliminarProducto,
	modificarProducto,
}) => {
	return (
		<div className="col-6 col-sm-4 col-md-3 col-lg-2 p-1">
			<div className="card h-100 d-flex flex-column">
				<img
					src={producto.imagen}
					className="card-img-top product-img "
					alt={producto.nombre}
				/>
				<div className="card-body flex-grow-1">
					<h5
						className="card-title text-truncate"
						title={producto.nombre}
					>
						{producto.nombre}
					</h5>
					<p className="card-text">
						<strong>Precio: ${producto.precio}</strong>
					</p>
				</div>
				<div className="card-footer d-flex flex-column">
					<button
						className="btn btn-primary w-100 addToCartBtn"
						onClick={() => agregarAlCarrito(producto)}
					>
						Agregar al carrito
					</button>
					<button
						className="btn btn-primary w-100 modifyBtn"
						onClick={() => modificarProducto(producto)}
					>
						Modificar
					</button>
					<button
						className="btn btn-primary w-100 deleteBtn"
						onClick={() => eliminarProducto(producto.id)}
					>
						Eliminar
					</button>
				</div>
			</div>
		</div>
	);
};

// Agregar validación de props
ProductCard.propTypes = {
	producto: PropTypes.shape({
		id: PropTypes.number.isRequired,
		nombre: PropTypes.string.isRequired,
		precio: PropTypes.number.isRequired,
		imagen: PropTypes.string.isRequired,
	}).isRequired,
	agregarAlCarrito: PropTypes.func.isRequired,
	eliminarProducto: PropTypes.func.isRequired,
	modificarProducto: PropTypes.func.isRequired,
};

export default ProductCard;
