const aboutItems = [
    {
      label: 'Proyectos realizados',
      number: 7
    }
  ];

const About = () => {
  return (
    <section
        id="sobre-mi"
        className="section"
    >
        <div className="container">
            <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up">
                <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
                ¡Hola! Mi nombre es Carlos, soy un apasionado de la programación y la música. Actualmente continúo aprendiendo y perfeccionando mis habilidades aplicando mis conocimientos en proyectos personales, para dar lo mejor de mí y ofrecer trabajos de alta calidad.
                </p>

                <div className="flex flex-wrap items-center gap-4 md:gap-7">
                    {
                        aboutItems.map(({ label, number }, key) => (
                            <div key={key}>
                                <div className="flex items-center md:mb-2">
                                    <span className="text-2xl font-semibold md:text-4xl">{number}</span>
                                    <span className="text-sky-400 font-semibold md:text-3xl">+</span>
                                </div>

                                <p className="text-sm text-zinc-400">{label}</p>
                            </div>
                        ))
                    }

                    <img
                        src="images/logo.png"
                        alt="Logo"
                        width={30}
                        height={30}
                        className="ml-auto md:w-[40px] md:h-[40px]"
                    />
                </div>
            </div>
        </div>
    </section>
  )
}

export default About