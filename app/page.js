import styles from './page.module.css'
import MainNav from './components/MainNav'
import ItemServicio from './components/ItemServicio';
import ContactForm from './components/ContactForm';
import PasoProceso from './components/PasoProceso';
import Proyecto from './components/Proyecto';

export const metadata = {
    title: 'Taimuné | Diseño Web',
  };


function HomePageContent(props) {
    
}

export default function Home() {

    return (
        <body>
            <main className={styles.main}>
                {/* Main nav */}
                <MainNav />
                <section id="home" className={styles.home}>

                    <div className={styles.homeBackground}></div>

                    {/* Marca */}
                    <div className={styles.seccionMarca}>
                        <img src="logo-rosa.svg" alt="Logo de Taimuné"/>
                        <span>Diseño Web</span>
                    </div>

                    {/* <a href="#sobre-mi" className={styles.stripe}>Siguiente sección</a> */}

                </section>

                <section id='sobre-mi' className={styles.about + ' container'}>
                    {/* <div className={styles.aboutColorBackground}></div>
                    <div className={styles.aboutBackground}></div> */}
                    <div className={styles.aboutContent}>
                        <h2 className='sr-only'>Sobre mí</h2>
                        <span className='h2'>Quién soy</span>
                        <p>Me llamo Maxi, y hace varios años trabajo construyendo sitios web. Mi foco principal está en armar sitios con impronta visual; en estos años trabajé principalmente para artistas y proyectos culturales.</p>
                        <p>Me interesa ayudar a las personas a mostrar sus proyectos desde una plataforma propia, y a construir una imagen que complemente y refuerce lo que tienen para mostrar.</p>
                    </div>
                </section>

                <section id="proyectos" className={styles.proyectos}>
                    <h2>Lo que hago</h2>
                    <p>Acá te muestro una selección de algunos proyectos en los que trabajé:</p>
                    <div className={styles.contenedorProyectos}>
                        <Proyecto
                            urlImagen='/web-invasion-ecologies.png'
                            url='https://medliq.art/invasion-ecologies/'
                            nombre='Invasion Ecologies'
                            año='2022 | Proyecto de investigación artístico'
                            descripcion='Diseño y programación - Sitio estático'
                        />

                        <Proyecto
                            urlImagen='/web-maquina-de-regar.png'
                            url='https://maquinaderegar.com.ar/'
                            nombre='Máquina de Regar'
                            año='2021 | Exhibición virtual'
                            descripcion='Programación - Sitio estático'
                        />

                        <Proyecto
                            urlImagen='/web-mariela-yeregui.png'
                            url='https://marielayeregui.com/'
                            nombre='Mariela Yeregui'
                            año='2021 | Portfolio de artista'
                            descripcion='Diseño y programación - Sitio de WordPress'
                        />

                        <Proyecto
                            urlImagen='/web-sound-window.png'
                            url='https://melmann.site/sound-window'
                            nombre='Sound Window'
                            año='2020 | Experiencia audiovisual interactiva'
                            descripcion='Diseño y programación - Plugin de WordPress'
                        />

                        <Proyecto
                            urlImagen='/web-silvina-de-las-carreras.png'
                            url='https://silvinadelascarreras.com.ar/'
                            nombre='Silvina De Las Carreras'
                            año='2020 | Portfolio de artista'
                            descripcion='Diseño y programación - Sitio estático'
                        />

                        <Proyecto
                            urlImagen='/web-colectivo-arkhe.png'
                            url='https://colectivoarkhe.com.ar/'
                            nombre='Colectivo Arkhé'
                            año='2019 | Colectivo de investigación y producción audiovisual'
                            descripcion='Diseño y programación - Sitio estático'
                        />
                    </div>
                </section>

                <section id="servicios" className={styles.servicios}>
                    <h2 className='sr-only'>Servicios</h2>
                    <span className='h2'>Qué puedo ofrecerte:</span>
                    {/* <p>Diseñé algunos servicios para que puedas elegir entre (...)</p> */}
                    <div className={styles.contenedorServicios}>
                        <ItemServicio
                            tituloServicio="Portfolio Estándar"
                            descripcionServicio="Diseño de un portfolio web sobre una estructura estandarizada, expandible, y pensada para mostrar tus proyectos con una imagen cuidada y en plazos cortos."
                            url="/portfolio-estandar"
                            textoLink="Ver detalles"
                            botonResaltado={true}
                        />
                        <ItemServicio
                            tituloServicio="Diseño a medida"
                            descripcionServicio="Creación de una web a partir de un proceso de diseño de varias etapas, en el cual identificamos la mejor manera de mostrar tu trabajo."
                            url="/#contacto"
                        />
                        <ItemServicio
                            tituloServicio="Desarrollo de Interfaces"
                            descripcionServicio="Interfaces y visualizaciones construidas a medida, a partir de un proceso basado en objetivos, usando tecnologías multimedia para plataformas web."
                            url="/#contacto"
                        />
                    </div>
                </section>

                <section className={styles.proceso} id="proceso">
                    <h2>Cómo trabajo</h2>
                    <p>Todos los proyectos se construyen siguiendo un proceso general, que adopta distintas formas según el trabajo en cuestión:</p>
                    <ol className={styles.pasosProceso}>
                        <li>
                            <PasoProceso
                                imagen='/icono-investigacion.svg'
                                numero='01'
                                titulo='Investigación'
                                descripcion='Un intercambio inicial para conocer el proyecto y sus necesidades. En esta etapa se recopilan contenidos, referencias de estilo, necesidades técnicas y objetivos del sitio para usar como base de todo el trabajo posterior.'
                            />
                        </li>
                        <li>
                            <PasoProceso
                                imagen='/icono-diseno.svg'
                                numero='02'
                                titulo='Exploración'
                                descripcion='Una vez definidos los criterios de trabajo, se generan moodboards, propuestas de diseño, esquemas o prototipos para bajar las necesidades a ideas concretas y definir un camino a seguir.'
                            />
                        </li>
                        <li>
                            <PasoProceso
                                imagen='/icono-resolucion.svg'
                                numero='03'
                                titulo='Resolución'
                                descripcion='A partir de las ideas barajadas se delimita la forma final del proyecto, y se da paso a la construcción y publicación del mismo.'
                            />
                        </li>
                    </ol>
                </section>

                

                <section id="contacto" className={styles.contacto}>
                    <h2>Contacto</h2>
                    <p>Si querés trabajar conmigo, enviame un mail a <a href="mailto:maxi@taimune.com.ar">maxi@taimune.com.ar</a> o dejame un mensaje acá abajo:</p>

                    {/* Incorporar atributos necesarios para que funcione como un form de Netlify */}
                    <ContactForm/>
                </section>

                {/* <footer className={styles.footer}>
                </footer> */}

            </main>
        </body>
    )
}