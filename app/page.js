'use client';

import styles from './page.module.css'
import MainNav from './components/MainNav'
import ItemServicio from './components/ItemServicio';
import ContactForm from './components/ContactForm';
import PasoProceso from './components/PasoProceso';
import Proyecto from './components/Proyecto';
import { useEffect, useLayoutEffect } from 'react';
import { useState } from 'react';
// import dynamic from 'next/dynamic';
import Preloader from './components/Preloader.js';

export const metadata = {
    title: 'Taimuné | Diseño Web',
  };


function HomePageContent(props) {

    const [isVisible, setIsVisible] = useState(props.visible);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <main className={styles.main} style={{opacity: isVisible ? 1 : 0}}>
                {/* Main nav */}
                <MainNav
                    intersectionTargetSelector='section#home'
                    intersectionThreshold='0.5'
                ></MainNav>
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


                <section id="servicios" className={styles.servicios}>
                    <h2 className='sr-only'>Servicios</h2>
                    <span className='h2'>Qué puedo ofrecerte:</span>
                    {/* <p>Diseñé algunos servicios para que puedas elegir entre (...)</p> */}
                    <div className={styles.contenedorServicios}>
                        <ItemServicio
                            tituloServicio="Portafolio Estándar"
                            descripcionServicio="Diseño de un portafolio web sobre una estructura estandarizada, expandible, y pensada para mostrar tus proyectos con una imagen cuidada y en plazos cortos."
                            url="#"
                        />
                        <ItemServicio
                            tituloServicio="Diseño a medida"
                            descripcionServicio="Creación de una web a partir de un proceso de diseño de varias etapas, en el cual identificamos la mejor manera de mostrar tu trabajo."
                            url="#"
                        />
                        <ItemServicio
                            tituloServicio="Desarrollo de Interfaces"
                            descripcionServicio="Interfaces y visualizaciones construidas a medida, a partir de un proceso basado en objetivos, usando tecnologías multimedia para plataformas web."
                            url="#"
                        />
                    </div>
                </section>

                <section className={styles.proceso} id="proceso">
                    <h2>Cómo trabajo</h2>
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
                                titulo='Diseño'
                                descripcion='Una vez definidos los criterios del sitio, se seleccionan referencias de estilo, se esquematizan los contenidos y se generan las propuestas de diseño sobre las cuales se construye el diseño final.'
                            />
                        </li>
                        <li>
                            <PasoProceso
                                imagen='/icono-programacion.svg'
                                numero='03'
                                titulo='Programación'
                                descripcion='Después de haber definido un diseño, el mismo se implementa en código, se incorporan las funcionalidades necesarias y se sube a la web.'
                            />
                        </li>
                    </ol>
                </section>

                <section id="proyectos" className={styles.proyectos}>
                    <h2>Proyectos</h2>
                    <p>Algunos proyectos en los que trabajé:</p>
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

                <section id="contacto" className={styles.contacto}>
                    <h2>Contacto</h2>
                    <p>Si querés trabajar conmigo, enviame un mail a <a href="mailto:maxi@taimune.com.ar">maxi@taimune.com.ar</a> o dejame un mensaje acá abajo:</p>

                    {/* Incorporar atributos necesarios para que funcione como un form de Netlify */}
                    <ContactForm/>
                </section>

                {/* <footer className={styles.footer}>
                </footer> */}

            </main>
    )
}

function DynamicHomePageContent() {
    // Solo se renderiza el contenido si Javascript está activo
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, [])

    return (
        isLoaded ? <HomePageContent visible={false}/> : null
    )
}

// export default function Home() {

//     return (
//         <body>
//             {/* Fondo estático */}
//             <Preloader/>
//             <noscript>
//                 {/* Contenido estático siempre visible */}
//                 <HomePageContent visible={true} />
//             </noscript>
//             {/* Solo se carga si Javascript puede modificar su estado */}
//             <DynamicHomePageContent/>
//         </body>
//     )
// }

export default function Home() {

    return (
        <body>
            <HomePageContent visible={true} />
        </body>
    )
}