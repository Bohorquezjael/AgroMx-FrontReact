import "./SobreNosotros.css";

function SobreNosotros() {
	return (
		<main>
			<div className="container-fluid mt-4">
				<h1 className="titulo-sobre-nosotros text-center">
					¿Quiénes somos?
				</h1>
				<p className="parrafo-verde text-center">
					En <strong>AgroMx</strong> creemos en un mundo donde la
					salud, el bienestar y el respeto por la naturaleza van de la
					mano. Somos una empresa comprometida con la distribucion de
					productos agroecologicos en la Ciudad de México que fomentan
					una alimentación más sostenible.
				</p>

				<div className="container-fluid">
					<div className="row justify-content-center">
						<div className="col-6 col-md-3 text-center">
							<img
								className="imagen-ods"
								src="/images/Sustainable_Development_Goal-es-3.jpg"
								alt="Objetivo de Desarrollo Sostenible 3: Salud y Bienestar"
							/>
						</div>
						<div className="col-6 col-md-3 text-center">
							<img
								className="imagen-ods"
								src="/images/Sustainable_Development_Goal-es-012.jpg"
								alt="Objetivo de Desarrollo Sostenible 12: Producción y Consumo Responsables"
							/>
						</div>
						<div className="col-6 col-md-3 text-center">
							<img
								className="imagen-ods"
								src="/images/Sustainable_Development_Goal-es-13.jpg"
								alt="Objetivo de Desarrollo Sostenible 13: Acción por el Clima"
							/>
						</div>
						<div className="col-6 col-md-3 text-center">
							<img
								className="imagen-ods"
								src="/images/Sustainable_Development_Goal-es-15.jpg"
								alt="Objetivo de Desarrollo Sostenible 15: Vida de Ecosistemas Terrestres"
							/>
						</div>
					</div>
				</div>

				<p className="parrafo-mostaza text-center">
					Alineamos nuestra labor con los Objetivos de Desarrollo
					Sostenible (ODS) promoviendo una alimentación saludable (ODS
					3), fomentando el consumo responsable (ODS 12), reduciendo
					la huella de carbono con consumo local (ODS 13) y
					protegiendo la biodiversidad a través de la agroecología
					(ODS 15).
				</p>
				<p className="parrafo-verde text-center">
					Juntos, impulsamos un sistema alimentario más justo y
					sostenible.
				</p>
			</div>

			<section>
				<div className="bloque-azul mt-5">
					<div className="container-fluid">
						{/* Misión */}
						<div className="row m-2">
							<div className="col-12 col-md-6 text-center align-content-center">
								<h2 className="titulo-h2 mt-4 mt-md-0">Misión</h2>
								<p className="text-center">
									Conectar productos agroecológicos con
									consumidores interesados en mejorar su
									alimentación, fomentar el comercio y
									economía locales y cuidar el medio ambiente.
								</p>
							</div>
							<div className="col-12 col-md-5 text-center align-content-center">
								<img
									className="mision img-fluid"
									src="/images/mision.png"
									alt="Imagen de Misión"
								/>
							</div>
						</div>

						{/* Visión */}
						<div className="row m-2">
							<div className="col-12 col-md-5 text-center align-content-center">
								<img
									className="vision img-fluid"
									src="/images/vision.png"
									alt="Imagen de Visión"
								/>
							</div>
							<div className="col-12 col-md-7 text-center align-content-center">
								<h2 className="titulo-h2">Visión</h2>
								<p className="text-center">
									Ser líderes en la distribución de alimentos
									agroecológicos, creando una comunidad
									comprometida con una alimentación sana y
									sostenible.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="text-center mt-4">
				<h2 className="titulo-h2 text-center">
					Nuestros aliados y colaboradores
				</h2>
				<p className="parrafo-verde text-center">
					Trabajamos con productores y productoras de la CDMX y sus
					alrededores que cultivan alimentos de alta calidad mediante
					prácticas agroecológicas responsables. Su enfoque respeta la
					biodiversidad, protege la salud del suelo y regenera los
					ecosistemas, promoviendo una agricultura consciente, libre
					de químicos dañinos y basada en el equilibrio natural.
				</p>
			</section>
			<section className="text-center mb-5 mt-4">
				<h2 className="titulo-h2 text-center">Valores</h2>
				<img
					className="imagen-valores img-fluid mt-2"
					src="/images/valores.png"
					alt="imagen del producto"
				/>
			</section>
		</main>
	);
}

export { SobreNosotros };
