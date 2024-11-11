/**
 * Components
 */
import ProjectCard from "./ProjectCard";

const works = [
    {
      imgSrc: 'images/project-1.jpg',
      title: 'Landing page',
      tags: ['Desarrollo Web', 'Wordpress'],
      projectLink: 'https://psicologaalejandraherrera.cl/'
    },
    {
      imgSrc: 'images/project-2.jpg',
      title: 'Landing page',
      tags: ['Desarrollo Web', 'Wordpress'],
      projectLink: 'https://ascservicioscontables.cl/'
    },
    {
      imgSrc: 'images/project-3.jpg',
      title: 'Prototipo: Sistema de compra y venta de viajes en bus',
      tags: ['Desarrollo de Software', 'POO'],
      projectLink: 'https://github.com/ImpulseNH/ProyectoSemestral_INF2241'
    },
    {
      imgSrc: 'images/project-4.jpg',
      title: 'Tesis: Container Pre-Marshalling Problem',
      tags: ['Algoritmos de búsqueda', 'Heurísticas', 'Optimización'],
      projectLink: 'https://github.com/ImpulseNH/Greedy_A-Star'
    },
    {
      imgSrc: 'images/project-5.jpg',
      title: 'Prototipo: Sistema de administración y gestión de recintos deportivos',
      tags: ['Desarrollo Web', 'API-REST', 'Fullstack'],
      projectLink: 'https://github.com/ImpulseNH/RDEP'
    },
    {
      imgSrc: 'images/project-6.jpg',
      title: 'Prototipo: Pacman 2.5D',
      tags: ['Desarrollo de videojuegos', 'Behavior Tree'],
      projectLink: 'https://github.com/BL1TTZ0/Testing-Pacman2.5D'
    },
    {
      imgSrc: 'images/project-7.jpg',
      title: 'Prototipo: Discord Bot para gestión de horarios de trabajo',
      tags: ['Desarrollo de Software', 'API'],
      projectLink: 'https://github.com/BL1TTZ0/Discord_Smartech'
    }
];

const Work = () => {
  return (
    <section 
        id="trabajos"
        className="section"
    >
        <div className="container">

            <h2 className="headline-2 mb-8 reveal-up">
                Mis trabajos
            </h2>

            <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
                {works.map(({ imgSrc, title, tags, projectLink }, key) => (
                    <ProjectCard
                        key={key}
                        imgSrc={imgSrc}
                        title={title}
                        tags={tags}
                        projectLink={projectLink}
                        classes="reveal-up"
                    />
                ))}
            </div>

        </div>
    </section>
  )
}

export default Work