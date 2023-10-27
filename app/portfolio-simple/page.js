import MainNav from "../components/MainNav";
import styles from './page.module.css';

export const metadata = {
    title: 'Portfolio Simple | Taimuné',
    description: "¿Necesitás mostrar tus trabajos en línea? Entrá para saber cómo te podemos ayudar.",
    keywords: ["portfolios web para artistas", "diseño web para artistas", "desarrollo web para artistas", "páginas web para artistas", "sitios web para artistas"],
    canonical: "/",
    openGraph: {
        title: 'Portfolio Simple | Desarrollo de portfolio web',
        description: '¿Necesitás mostrar tus trabajos en línea? Entrá para saber cómo te podemos ayudar.',
        url: 'https://taimune.com.ar/portfolio-simple',
        siteName: 'Taimune.com.ar',
        images: "/taimune-diseño-web.png",
        locale: 'es_AR',
        type: 'article',
        publishedTime: '2023-10-23T00:00:00.000Z',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Portfolio Simple | Desarrollo de portfolio web',
        description: '¿Necesitás mostrar tus trabajos en línea? Entrá para saber cómo te podemos ayudar.',
        images: ["/taimune-diseño-web.png"],
    },
  };

export default function PortfolioSimple() {

    return (
        <body>
            <main className={styles.main}>
                <MainNav />
                <section id="hero" className={styles.hero}>
                    <div className={styles.hero_layout}>
                        <h1 className={styles.hero_titulo}>Portfolio <span className={styles.hero_tituloResaltado}>Simple</span></h1>
                        <p className={styles.hero_subtitulo}>Una web sencilla, expandible y personalizada</p>
                        <a href="/#contacto" className={styles.botonBorde}>Contratar</a>
                    </div>
                </section>

                <section id="descripcion" className={styles.descripcion}>
                    <div className={styles.descripcion_layout}>
                        <div className={styles.descripcion_panelTexto}>
                            <div className={styles.contenedorTexto}>
                                <h2 className={styles.descripcion_titulo}>De qué se trata</h2>
                                <p>El <strong>Portfolio Simple</strong> está pensado como una plataforma desde la cual comenzar a mostrar tu producción. Es una propuesta sencilla y accesible, pero que a la vez prioriza la personalización y la posibilidad de reflejar de extensión a futuro.</p>
                                <p>Construimos un sitio sobre una estructura estandarizada, pero adaptable en términos de color, tipografía, escala y espaciados; el resultado es un sitio amoldado a tu imagen, creado con un proceso de trabajo sencillo y claro.</p>
                                <p>El sitio que recibís es completamente tuyo: junto con la publicación del sitio se te entregan los archivos para que puedas disponer de ellos libremente, así como los accesos de los servicios usados para poner el sitio en linea.</p>
                            </div>
                        </div>
                        <div className={styles.descripcion_panelImagen}></div>
                    </div>
                </section>

                <section id="ejemplos" className={styles.ejemplos}>
                    <div className={styles.introEjemplos}>
                        <div className={styles.introEjemplos_layout}>
                            <div className={styles.contenedorTexto}>
                                <h2 className={styles.introEjemplos_titulo}>Secciones y diseños posibles</h2>
                                <p>La estructura que te ofrecemos comprende en primer lugar una portada, una sección de galerías, y hasta tres secciones informativas; estas secciones pueden estar en páginas separadas, o pueden ser apartados dentro de una única pagina de inicio.</p>
                                <p>Además, el sitio incluye hasta cinco galerías de imagenes, en las que se pueden repartir hasta 50 imágenes. Cada galería tiene su propia página para que la puedas compartir individualmente.</p>
                                <p>Los siguientes diseños fueron creados solamente a modo de ejemplo y representan proyectos ficticios, pero ilustran la flexibilidad de la propuesta.</p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.itemEjemplos}>
                        <div className={styles.itemEjemplos_texto}>
                            <h3 className={styles.itemEjemplos_titulo}>1- Portada:</h3>
                            <p>La página de inicio incluye una imagen de portada, un menú y un logo (puede ser tipográfico o ilustrado). El menú y el logo pueden ir ubicados a la izquierda de la pantalla o en la parte superior, y la imagen puede estar contenida en un marco u ocupar toda la pantalla.</p>
                        </div>
                        <div className={styles.itemEjemplos_grilla}>
                            <img className={styles.itemEjemplos_gridItemWide} src="/mockups/home_1.png" alt="Captura de pantalla de portada"></img>
                            <img src="/mockups/home_2.png" alt="Captura de pantalla de portada"></img>
                            <img src="/mockups/home_3.png" alt="Captura de pantalla de portada"></img>
                        </div>
                    </div>
                        
                    <div className={styles.itemEjemplos}>
                        <div className={styles.itemEjemplos_texto}>
                            <h3 className={styles.itemEjemplos_titulo}>2- Sección de Galerías</h3>
                            <p>Este es el punto de inicio para comenzar a recorrer tus trabajos. Incluye hasta cinco links a galerías, cada una con una imagen de portada, un nombre, y (opcionalmente) una descripción breve. Cada galería es una colección de imágenes que puede representar, por ejemplo, una serie, una obra o una categoría, entre otras cosas.</p>
                        </div>
                        <div className={styles.itemEjemplos_grilla}>
                            <img className={styles.itemEjemplos_gridItemWide} src="/mockups/indice_galerias.png" alt="Captura de pantalla de sección de galerías"></img>
                        </div>
                    </div>

                    <div className={styles.itemEjemplos}>
                        <div className={styles.itemEjemplos_texto}>
                            <h3 className={styles.itemEjemplos_titulo}>3- Galerías individuales</h3>
                            <p>Cada link de la sección anterior lleva a una galeria individual. Una galería incluye una grilla de imágenes, cada una de las cuales puede contener un nombre y una descripción de hasta cinco líneas. Esta descripción puede ser usada para incluir datos como año, formato, premios o exhibiciones, entre otros.</p>
                            <p>La grilla es flexible en cuanto a la distribución de las fotos: se puede modificar su ancho, el espacio entre imágenes, y la cantidad de imágenes por fila. Las imágenes se pueden ampliar haciendo clic en ellas; esto abre una galeria para recorrer las imágenes a pantalla completa.</p>
                        </div>
                        <div className={styles.itemEjemplos_grilla}>
                            <img src="/mockups/galeria_1.png" alt="Captura de pantalla de galería individual"></img>
                            <img src="/mockups/galeria_2.png" alt="Captura de pantalla de galería individual"></img>
                        </div>
                    </div>

                    <div className={styles.itemEjemplos}>
                        <div className={styles.itemEjemplos_texto}>
                            <h3 className={styles.itemEjemplos_titulo}>4- Secciones informativas</h3>
                            <p>Estas secciones estan pensadas para que puedas incluir contenido textual: por ejemplo, una bio, un statement, o cualquier otro tipo de información sobre vos o tu trabajo. Se incluyen hasta tres secciones, y cada una de ellas puede contener un texto y una imagen.</p>
                            <p>Opcionalmente, se puede usar una de las secciones para incluir información de contacto, junto con un formulario de contacto (en este caso, no se incluye imagen).</p>
                        </div>
                        <div className={styles.itemEjemplos_grilla}>
                            <img className={styles.itemEjemplos_gridItemWide} src="/mockups/texto_1.png" alt="Captura de pantalla de sección informativa"></img>
                        </div>
                    </div>

                </section>

                <section id="proceso" className={styles.proceso}>
                    <h2 className={styles.proceso_tituloProceso}>Proceso y entregables</h2>
                    <ol className={styles.proceso_listaPasos}>
                        <li className={styles.proceso_pasoProceso}>
                            <span className={styles.proceso_numeroPaso}>01</span>
                            <p className={styles.proceso_textoPaso}>Se programa una <strong>reunión</strong> para hablar sobre tu proyecto, pensar referencias y decisiones de diseño, y conversar sobre cómo preparar el contenido;</p>
                        </li>
                        <img className={styles.proceso_iconoRombo} src="/icono-proceso.svg"/>
                        <li className={styles.proceso_pasoProceso}>
                            <span className={styles.proceso_numeroPaso}>02</span>
                            <p className={styles.proceso_textoPaso}>Se arma un <strong>sitio funcional</strong> a modo de propuesta, en función de lo pensado;</p>
                        </li>
                        <img className={styles.proceso_iconoRombo} src="/icono-proceso.svg"/>
                        <li className={styles.proceso_pasoProceso}>
                            <span className={styles.proceso_numeroPaso}>03</span>
                            <p className={styles.proceso_textoPaso}>Sobre la propuesta presentada se hacen <strong>ajustes finales</strong>, y se publica la web en el dominio correspondiente.</p>
                        </li>
                    </ol>
                    <div className={styles.proceso_contenedorEntregables}>
                        <h3 className={styles.proceso_tituloEntregables}>Al publicar el sitio, se te entregan:</h3>
                        <ul className={styles.proceso_listaEntregables}>
                            <li className={styles.proceso_itemEntregables}><strong>Hoja de claves</strong>, con los accesos para los servicios en los que está alojada tu web.</li>
                            <li className={styles.proceso_itemEntregables}>Archivo .zip con los <strong>archivos del sitio</strong>, para restaurarlo o migrarlo de ser necesario.</li>
                        </ul>
                    </div>
                </section>


                <section className={styles.informacion}>
                <div className={styles.informacion_item}>
                        <h3 className={styles.informacion_tituloItem}>¿Cómo publicamos tu sitio?</h3>
                        <ul className={styles.informacion_listaItems}>
                            <li>Para ser publicado, un sitio necesita de dos cosas: un <strong>dominio</strong> (la dirección de tu sitio, por ejemplo: “www.taimune.com.ar”) y un <strong>hosting</strong> (el lugar en donde se guardan los contenidos y los archivos del sitio).</li>
                            <li>En el caso del dominio, te guiamos en la elección, contratación y configuración de un dominio, para que el registro quede hecho a tu nombre y tengas total libertad sobre el mismo. Todos los dominios tienen un precio de contratación y renovación anual, que depende del provedor.</li>
                            <li>En el caso del hosting, utilizamos servicios de publicación web sin costo, disponibles para sitios sencillos: esto permite obviar el costo de un servicio de hosting tradicional, que incluye una infraestructura que este tipo de sitios no necesita (como por ejemplo, bases de datos o casillas de correo). Como los archivos del sitio son tuyos, siempre se puede mover el sitio a un hosting tradicional en caso de ser necesario.</li>
                        </ul>
                    </div>

                    <div className={styles.informacion_item}>
                        <h3 className={styles.informacion_tituloItem}>Qué NO incluye esta propuesta:</h3>
                        <ul className={styles.informacion_listaItems}>
                            <li>El sitio <strong>no incluye videos</strong> de ningún tipo, pero se pueden presupuestar como un extra.</li>
                            <li>No se incluyen casillas de correo con dominio personalizado.</li>
                            <li>El sitio <strong>no incluye un sistema para editar contenidos</strong>; para editarlo hay que modificar los archivos HTML. Si las actualizaciones de contenido son pocas, éstas se pueden presupuestar individualmente; si son muchas, podemos <a href="/#contacto">implementar el sitio como un template de Wordpress</a> para que puedas actualizarlo más facilmente.</li>
                            <li>Si bien la identidad visual del sitio es personalizable, la diagramación o layout del sitio no se puede modificar (más allá de las variantes y opciones previstas para cada sección). Para diseños con una identidad más personal podemos iniciar un <a href="/#contacto">proceso de diseño personalizado</a>, con un presupuesto acorde a tus necesidades.</li>
                        </ul>
                    </div>

                    <div className={styles.informacion_item}>
                        <h3 className={styles.informacion_tituloItem}>Valor y tiempos</h3>
                        <ul className={styles.informacion_listaItems}>
                            <li>Un Portfolio Simple tiene un valor fijo de <strong>$70.000</strong>, que cubre todas las caracteristicas y servicios mostrados (actualizado a octubre de 2023). El pago es en dos partes: 50% al principio, después de aprobarse el inicio del trabajo; y 50% al final, antes de la publicación del sitio.</li>
                            <li>El tiempo de realización es de <strong>una semana hábil</strong> desde el momento en que recibamos las referencias y todos los contenidos necesarios para el sitio, incluyendo la construcción de la propuesta y las revisiones finales.</li>
                            <li>Una vez publicado el sitio, tenés una <strong>garantía de 30 días</strong> por cualquier falla o imprevisto.</li>
                        </ul>
                    </div>
                    <a className={styles.botonRelleno} href="/#contacto">Pedir mi portfolio</a>
                </section>
                <footer className={styles.footer}>
                    <img className={styles.footer_icono} src="/icono-dedicacion.svg"/>
                    <span className={styles.footer_texto}>Construimos con dedicación</span>
                </footer>
            </main>
        </body>
    )
}