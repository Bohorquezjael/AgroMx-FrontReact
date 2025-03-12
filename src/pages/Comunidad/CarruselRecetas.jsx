import React from "react";
import "./CarruselRecetas.css"; // Importa estilos personalizados

const CarruselRecetas = () => {
    return (
  <div id="carrusel-recetas" className="carousel-container d-flex">
        <div id="customCarouselRecipes" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner d-flex">
            {/* Slide 1 - Imagen principal */}
            <div className="carousel-item active carousel-main">
              <div className="slide-content slide-bg-main">
                <img
                  src="/images/hamburguesa-coliflor.png"
                  className="carousel-image"
                  alt="Hamburguesa de coliflor vegana"
                />
                <a className="subtitulo" href="https://www.kiwilimon.com/receta/saludables/hamburguesa-vegetariana-con-pan-de-coliflor"><h3 className="subtitulo">Prepara una deliciosa hamburguesa vegetariana con pan de coliflor 😋</h3></a>
                <p className="slide-text">
                Si tienes ganas de una hamburguesa pero quieres evitar los carbohidratos de más, arma esta rica hamburguesa con un increíble “pan” de coliflor hecho con queso y cebollín. Además, la hamburguesa de portobello será tu fascinación.
                </p>
              </div>
            </div>
  
            {/* Slide 2 - Imagen lateral izquierda */}
            <div className="carousel-item carousel-left">
              <div className="slide-content slide-bg-left">
                <img
                  src="/images/ceviche-mango.png"
                  className="carousel-image"
                  alt="Ceviche de mango"
                />
                <a className="subtitulo" href="https://www.kiwilimon.com/receta/platos-fuertes/vegetarianos/receta-de-ceviche-de-mango"><h3 className="subtitulo">Prepara un exquisito ceviche de mango, ¡para chuparse los dedos! 😋 </h3></a>
                <p className="slide-text">
                Aprovecha que la temporada de mango ya está aquí y prepara este fresco y delicioso ceviche de mango para disfrutar cualquier día de la semana. Además, ¿sabes qué es lo mejor de esta receta sin carne? ¡Qué se puede disfrutar con tostadas, galletas saladas o hasta en tacos de jícama! ¿Se te antojo?
   
                </p>
              </div>
            </div>
  
            {/* Slide 3 - Imagen lateral derecha */}
            <div className="carousel-item carousel-right">
              <div className="slide-content slide-bg-right">
                <img
                  src="/images/tortitas-calabaza.png" 
                  className="carousel-image"
                  alt="Tortitas de calabaza"
                />
                <a className="subtitulo" href="https://www.kiwilimon.com/receta/platos-fuertes/vegetarianos/tortitas-de-calabaza"><h3 className="subtitulo">¿Qué tal unas deliciosas tortitas de calabaza? 😋</h3></a>
                <p className="slide-text ">¿Ya no sabes qué hacer de comer hoy? No te preocupes, ¡aquí tenemos la solución! Esta receta de tortitas de calabaza es una opción deliciosa, práctica y muy fácil de hacer, así que no dudes en incluirlas en tu menú semanal. Otra buena razón para llevar esta receta a tu mesa es que les puedes añadir más verduras y especias y también se pueden acompañar con todo tipo de guarniciones. ¡Pruébalas ya!</p>
              </div>
            </div>
          </div>
  
          {/* Controles del carrusel */}
          <button className="carousel-control-prev custom-button" type="button" data-bs-target="#customCarouselRecipes" data-bs-slide="prev">
          <i className="bi bi-arrow-left-square-fill custom-arrow"></i>  {/* Icono Bootstrap */}
          </button>
          <button className="carousel-control-next custom-button" type="button" data-bs-target="#customCarouselRecipes" data-bs-slide="next">
          <i className="bi bi-arrow-right-square-fill custom-arrow"></i> {/* Icono Bootstrap */}
          </button>
        </div>
      </div>
    );
  };
  
  export default CarruselRecetas;
  
