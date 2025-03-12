import React from "react";
import "./Carrusel.css"; // Importa estilos personalizados

const Carrusel = () => {
  return (
<div id="carrusel-historias" className="carousel-container d-flex">
      <div id="customCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner d-flex">
          {/* Slide 1 - Imagen principal */}
          <div className="carousel-item active carousel-main">
            <div className="slide-content slide-bg-main">
              <img
                src="/images/milpa-alta.png"
                className="carousel-image"
                alt="Imagen principal"
              />
              <a className="subtitulo" href="https://gatoencerrado.news/2023/02/01/milpa-alta-el-territorio-campesino-de-cdmx-que-resiste-en-solidaridad-y-comercio-justo/"><h3 className="subtitulo">Milpa Alta, el territorio campesino de CDMX que resiste en solidaridad y comercio justo</h3></a>
              <p className="slide-text">
                La producción agroecológica en el suelo de conservación de la Ciudad de México es una actividad realizada por familias y cooperativas que habitan principalmente las alcaldías de la región sureste de la Ciudad. Una iniciativa de comercio justo que es también una red solidaria que promueve prácticas agroecológicas y restaurativas ambiental y socialmente.
              </p>
            </div>
          </div>

          {/* Slide 2 - Imagen lateral izquierda */}
          <div className="carousel-item carousel-left">
            <div className="slide-content slide-bg-left">
              <img
                src="/images/romeritos.jpg"
                className="carousel-image"
                alt="Imagen lateral izquierda"
              />
              <a className="subtitulo" href="https://www.elgrafico.mx/historias/2023/12/24/productores-agricolas-pina-de-romeritos-hablan-del-tradicional-alimento-sembrado-en-la/"><h3 className="subtitulo">De Xochimilco a tu cena navideña, ¡éntrale sabroso a los romeritos!</h3></a>
              <p className="slide-text">
              La Ciudad de México es una de las principales productoras de Romeritos a nivel nacional, tan sólo el año pasado se obtuvieron mil 524 toneladas de las 225 hectáreas sembradas en en las alcaldías Xochimilco y Tláhuac. Entre ellas las que plantan año con año los hermanos Peña Piña con su cooperativa "Productores Agrícolas Piña" que lleva este platillo hasta la mesa navideña y de año nuevo. 
 
              </p>
            </div>
          </div>

          {/* Slide 3 - Imagen lateral derecha */}
          <div className="carousel-item carousel-right">
            <div className="slide-content slide-bg-right">
              <img
                src="/images/chinampa1.jpg"
                className="carousel-image"
                alt="Imagen lateral derecha"
              />
              <a className="subtitulo" href="https://www.meteored.mx/noticias/actualidad/chinampas-el-ejemplo-de-agricultura-sostenible-que-ha-perdurado-durante-siglos-cultura-historia.html"><h3 className="subtitulo">Chinampas: el ejemplo de agricultura sostenible que ha perdurado durante siglos</h3></a>
              <p className="slide-text ">El método de las chinampas consiste en crear islas flotantes sobre cuerpos de agua, aprovechando los recursos naturales del entorno para la producción de alimentos. Aunque su origen se remonta a tiempos prehispánicos, las chinampas siguen siendo una práctica agrícola vigente y relevante en la actualidad, por ejemplo en Tláhuac y Xochimilco.</p>
            </div>
          </div>
        </div>

        {/* Controles del carrusel */}
        <button className="carousel-control-prev custom-button" type="button" data-bs-target="#customCarousel" data-bs-slide="prev">
        <i className="bi bi-arrow-left-square-fill custom-arrow"></i>  {/* Icono Bootstrap */}
        </button>
        <button className="carousel-control-next custom-button" type="button" data-bs-target="#customCarousel" data-bs-slide="next">
        <i className="bi bi-arrow-right-square-fill custom-arrow"></i> {/* Icono Bootstrap */}
        </button>
      </div>
    </div>
  );
};

export default Carrusel;
