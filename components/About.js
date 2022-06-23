import Link from 'next/link';

function About() {
    return (
        <section className="about-section">
            <h2 className="about__title">¡Hola, soy Seb Méndez!</h2>
            <div className="biography">
                <p className="biography__text">
                    Soy egresado de ingeniería en sistemas computacionales, actualmente buscando una oportunidad de trabajo como desarrollador web front-end con ReactJS, JavaScript, HTML y CSS. He ayudado a empresas locales a hacerse presentes en el internet.
                </p>
                <p className='biography__text'>
                    Me encanta hacer realidad mis ideas a través de la programación, porque la tecnología elimina fronteras para hacer algo nuevo y util para el mundo.
                </p>
                <p className='biography__text'>
                    Con mis conocimientos en desarrollo y diseño web he ayudado a empresas locales a hacerse de una presencia digital. Ya que creo que la tecnología debe de estar a nuestro servicio y no al revés.
                </p>

                <div className="biography-btn-group">
                    <a
                        href="https://www.canva.com/design/DAE5tdMBqn8/dWzX-peA4vTiJDL5soaTOQ/view?utm_content=DAE5tdMBqn8&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button className="btn btn--block btn--dark btn--font-md">Descarga mi CV</button>
                    </a>
                    <Link href="#contact">
                        <a>
                            <button className="btn btn--block btn--dark btn--font-md">Contáctame</button>
                        </a>
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default About;