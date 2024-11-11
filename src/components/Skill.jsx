/**
 * Components
 */
import SkillCard from "./SkillCard";

const skillItem = [
    {
      imgSrc: 'images/java.svg',
      label: 'Java',
      desc: 'Lenguaje'
    },
    {
      imgSrc: 'images/javascript.svg',
      label: 'JavaScript',
      desc: 'Lenguaje'
    },
    {
      imgSrc: 'images/expressjs.svg',
      label: 'ExpressJS',
      desc: 'Framework'
    },
    {
      imgSrc: 'images/react.svg',
      label: 'React',
      desc: 'Framework'
    },
    {
      imgSrc: 'images/csharp.svg',
      label: 'C#',
      desc: 'Lenguaje'
    },
    {
      imgSrc: 'images/unity3d.svg',
      label: 'Unity',
      desc: 'Motor de juegos'
    },
    {
      imgSrc: 'images/python.svg',
      label: 'Python',
      desc: 'Lenguaje'
    },
    {
      imgSrc: 'images/django.svg',
      label: 'Django',
      desc: 'Framework'
    },
    {
      imgSrc: 'images/git.svg',
      label: 'Git',
      desc: 'Control de versiones'
    },
    {
      imgSrc: 'images/postgresql.svg',
      label: 'PostgreSQL',
      desc: 'Base de datos'
    },
    {
      imgSrc: 'images/mysql.svg',
      label: 'MySQL',
      desc: 'Base de datos'
    }
  ];

const Skill = () => {
  return (
    <section className="section">
        <div className="container">
            <h2 className="headline-2 reveal-up">
              Tecnologías
            </h2>

            <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] reveal-up">
              He trabajado con las siguientes tecnologías
            </p>

            <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
                {
                    skillItem.map(({ imgSrc, label, desc }, key) => (
                        <SkillCard
                            key={key}
                            imgSrc={imgSrc}
                            label={label}
                            desc={desc}
                            classes="reveal-up"
                        />
                    ))
                }
            </div>

        </div>
    </section>
  )
}

export default Skill