/**
 * Components
 */
import { ButtonPrimary } from "./Button";

const sitemap = [
    {
      label: 'Inicio',
      href: '#inicio'
    },
    {
      label: 'Sobre mí',
      href: '#sobre-mi'
    },
    {
      label: 'Trabajos',
      href: '#trabajos'
    },
    {
        label: 'Off Topic',
        href: '#off-topic'
    },
    {
      label: 'Contacto',
      href: '#contacto'
    }
];
  
const socials = [
    {
      label: 'GitHub',
      href: 'https://github.com/ImpulseNH'
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/carlos-inh/'
    },
    {
      label: 'Linktree',
      href: 'https://linktr.ee/impulse_nh'
    }
];

const Footer = () => {
  return (
    <footer className="section">
        <div className="container">

            <div className="lg:grid lg:grid-cols-2">

                <div className="mb-10">
                    <h2 className="headline-1 mb-8 lg:max-w-[12ch] reveal-up">
                        Carlos Núñez Herrera
                    </h2>

                    <ButtonPrimary
                        href="mailto:carlos.inh@outlook.com"
                        label="Contactar"
                        icon="chevron_right"
                        classes="reveal-up"
                    />
                </div>

                <div className="grid grid-cols-2 gap-4 lg:pl-20">

                    <div>
                        <p className="mb-2 reveal-up">Mapa de la página</p>

                        <ul>
                            {sitemap.map(({ label, href }, key) => (
                                <li key={key}>
                                    <a
                                        href={href}
                                        className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200 reveal-up"
                                    >
                                        {label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <p className="mb-2 reveal-up">Redes sociales</p>

                        <ul>
                            {socials.map(({ label, href }, key) => (
                                <li key={key}>
                                    <a
                                        href={href}
                                        target="_blank"
                                        className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200 reveal-up"
                                    >
                                        {label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-between pt-10 mb-8">
                <a
                    href="/"
                    className="logo reveal-up"
                >
                    <img
                        src="images/logo.png"
                        width={40}
                        height={40}
                        alt="Logo"
                    />
                </a>

                <p className="text-zinc-500 text-sm reveal-up">
                    &copy; 2024 <span className="text-zinc-200">impulsenh</span>
                </p>
            </div>

        </div>
    </footer>
  )
}

export default Footer