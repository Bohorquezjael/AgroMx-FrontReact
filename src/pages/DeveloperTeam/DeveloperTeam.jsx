import './DeveloperTeam.css';
// import teamMembers from './teamMembers';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import teamMembers from './teamMembers';



function DeveloperTeam() {
  return (

    <main>
      <section className="about-us">
        <h1>Acerca de nosotros</h1>
        <p className="paragraph">
          Somos un equipo de profesionales jóvenes del desarrollo web comprometidos con la creación
          de soluciones digitales que impacten la vida de los usuarios.

          Nuestra experiencia en diversas áreas del desarrollo web, así como nuestras distintas
          historias y contextos, nos permite desarrollar productos funcionales e imprimirles rasgos
          originales, innovadores y creativos.
        </p>
        <p className="paragraph">
          Asumimos la responsabilidad que tenemos con nuestra comunidad y queremos que nuestras
          iniciativas contribuyan a un futuro más sostenible para todos.

          Conoce más sobre cada uno de nosotros:
        </p>


        <div className="team-container">
          {teamMembers.map((member, index) => (
            <div key={index} className="card" id='cardDeveloperTeam'>
              <h3>{member.name}</h3>
              <p>{member.role}</p>
              <p className="frase">{member.phrase}</p>
              <div className="icons">
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin linkedin-icon"></i>
                </a>
                <a href={member.github} target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-github github-icon"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>


  );

}

export { DeveloperTeam };
