import './SobreNosotros.css';

function SobreNosotros () {
    return (
        <>
        <br></br>
            <h1 className='titulo-sobre-nosotros text-center'>¿Quiénes somos?</h1>
             <br></br>
            
                <div>
                    <p className='parrafo-verde text-center'>En <strong>AgroMx</strong> creemos en un mundo donde la salud, el bienestar y el respeto por la naturaleza van de la mano. Somos una empresa comprometida con la distribucion de productos agroecologicos en la Ciudad de México que fomentan una alimentación más sostenible.
                    </p>
                    <br></br>
                <div className='container-fluid'>
                        <div className='row'>
                            <div className='col-2 col-lg-2'></div>
                            <div className='col-4 col-lg-2 col-md-2 text-center'>
                            <img className='imagen-ods' src="/public/images/Sustainable_Development_Goal-es-3.jpg" alt="Imagen de Objetivo de Desarrollo Sostenible 3: Salud y Bienestar"/>
                            </div>
                            <div className='col-4 col-lg-2 col-md-2 text-center'>
                            <img className='imagen-ods' src="/public/images/Sustainable_Development_Goal-es-012.jpg" alt="Imagen de Objetivo de Desarrollo Sostenible 3: Salud y Bienestar"/>
                            </div>
                            <div className='col-2 col-sm-2 d-lg-none d-md-none'></div>
                            <div className='col-2 col-sm-2 d-lg-none d-md-none'></div>
                            <div className='col-4 col-lg-2 col-md-2 text-center'>
                            <img className='imagen-ods' src="/public/images/Sustainable_Development_Goal-es-13.jpg" alt="Imagen de Objetivo de Desarrollo Sostenible 3: Salud y Bienestar"/>
                            </div>
                            <div className='col-4 col-lg-2 col-md-2 text-center'>
                            <img className='imagen-ods' src="/public/images/Sustainable_Development_Goal-es-15.jpg" alt="Imagen de Objetivo de Desarrollo Sostenible 3: Salud y Bienestar"/>
                            </div>

                            <div className='col-2  col-lg-2'></div>
                        </div>
                    </div>
                

                    <p className='parrafo-mostaza text-center'>Alineamos nuestra labor con los Objetivos de Desarrollo Sostenible (ODS) promoviendo una alimentación saludable (ODS 3), fomentando el consumo responsable (ODS 12), reduciendo la huella de carbono con consumo local (ODS 13) y protegiendo la biodiversidad a través de la agroecología (ODS 15).</p>
                    <p className='parrafo-verde text-center'> Juntos, impulsamos un sistema alimentario más justo y sostenible.</p>
                </div>
           

                <section className='bloque-azul'>
            <div className='container-fluid'>

                {/* Sección Misión */}
                <div className='row align-items-center'>
                    <div className='col-md-7 text-center'>
                        <h2 className='titulo-h2'>Misión</h2>
                        <p className='parrafo-Mision'>
                            Conectar productos agroecológicos con consumidores interesados en mejorar su alimentación, 
                            fomentar el comercio y economía locales y cuidar el medio ambiente.
                        </p>
                    </div>
                    <div className='col-md-5 text-center'>
                        <img className='img-fluid imagen-mision' src="/images/mision.png" alt="Misión" />
                    </div>
                </div>

                {/* Sección Visión */}
                <div className='row align-items-center'>
                    <div className='col-md-5 text-center'>
                        <img className='img-fluid imagen-vision' src="/images/vision.png" alt="Visión" />
                    </div>
                    <div className='col-md-7 text-center'>
                        <h2 className='titulo-h2'>Visión</h2>
                        <p className='parrafo-Vision'>
                            Ser líderes en la distribución de alimentos agroecológicos, 
                            creando una comunidad comprometida con una alimentación sana y sostenible.
                        </p>
                    </div>
                </div>

            </div>
        </section>
        <br></br>
            <section>
                <h2 className='titulo-h2 text-center'>Nuestros aliados y colaboradores</h2>
                <br></br>
                <p  className='parrafo-verde text-center'>
                Trabajamos con productores y productoras de la CDMX y sus alrededores que cultivan alimentos de alta calidad mediante prácticas agroecológicas responsables. Su enfoque respeta la biodiversidad, protege la salud del suelo y regenera los ecosistemas, promoviendo una agricultura consciente, libre de químicos dañinos y basada en el equilibrio natural.</p>
            </section>
        
            <section>
                <h2 className='titulo-h2 text-center'>Valores</h2>
                <br></br>
                <img className='imagen-valores' src="public/images/valores.png" alt="" />
            </section>
        

        
        </>
    );

}

export { SobreNosotros };