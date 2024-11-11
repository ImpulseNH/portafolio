
const Player = () => {
  return (
    <section
        id="off-topic"
        className="section"
    >
        <div className="container">
            <h2 className="headline-2 reveal-up">
                Off Topic
            </h2>

            <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] reveal-up">
                Escucha la música que he creado para mis dos actuales proyectos
            </p>

            <div className="mb-8">
                <h3 className="title-1 mb-3">
                    Lo-fi/ChillHop
                </h3>

                <iframe
                    className="reveal-up"
                    src="https://open.spotify.com/embed/artist/3bzXhcX8zqBp4SlhiL0F0s?utm_source=generator&theme=0"
                    width="100%"
                    height="475"
                    allowfullscreen=""
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                ></iframe>
            </div>

            <div className="">
                <h3 className="title-1 mb-3">
                    OST para juegos
                </h3>

                <iframe
                    className="reveal-up"
                    src="https://open.spotify.com/embed/artist/3sGw36glePscJQ5guToxSr?utm_source=generator&theme=0"
                    width="100%"
                    height="475"
                    allowfullscreen=""
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                ></iframe>
            </div>
        </div>
    </section>
  )
}

export default Player