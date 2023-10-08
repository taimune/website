import MainNav from "../components/MainNav";
import styles from './page.module.css';

export const metadata = {
    title: 'Taimuné | Diseño Web',
  };

export default function PortafolioEstandar() {

    return (
        <body>
            <main>
                <MainNav />
                <section id="hero" className={styles.hero}>
                    <h1>Portafolio Estándar</h1>
                    <p>Una web sencilla, expandible y personalizada</p>
                </section>

                <section id="descripcion">
                    <h2>De qué se trata</h2>
                    <p>El Portafolio Estándar esta pensado como una plataforma desde la cual comenzar a mostrar tu producción. Es una propuesta sencilla y accesible, pero que a la vez prioriza la personalización y la posibilidad de reflejar de extensión a futuro.</p>
                    <p>Construimos un sitio sobre una estructura estandarizada, pero adaptable en términos de color, tipografía, escala y espaciados; el resultado es un sitio amoldado a tu imagen, creado con un proceso de trabajo sencillo y claro.</p>
                    <p>El sitio que recibís es completamente tuyo: junto con la publicación del sitio se te entregan los archivos para que puedas disponer de ellos libremente, así como los accesos de los servicios usados para poner el sitio en linea.</p>
                </section>

                <section id="ejemplos">
                    <h2>Secciones y diseños posibles</h2>
                    <p>La estructura que te ofrecemos comprende en primer lugar una portada, una sección de galerías, y hasta tres secciones informativas; estas secciones pueden estar en páginas separadas, o pueden ser apartados dentro de una única pagina de inicio.</p>
                    <p>Además, el sitio incluye hasta cinco galerías de imagenes, en las que se pueden repartir hasta 50 imágenes. Cada galería tiene su propia página para que la puedas compartir individualmente.</p>
                    <p>Los siguientes diseños fueron creados solamente a modo de ejemplo y representan proyectos ficticios, pero ilustran la flexibilidad de la propuesta.</p>

                    <h3>1- Portada</h3>
                    <p>La página de inicio incluye una imagen de portada, un menú y un logo (puede ser tipográfico o ilustrado). El menú y el logo pueden ir ubicados a la izquierda de la pantalla o en la parte superior, y la imagen puede estar contenida en un marco u ocupar toda la pantalla.</p>
                    <img alt="Captura de pantalla de portada"></img>
                    <img alt="Captura de pantalla de portada"></img>
                    <img alt="Captura de pantalla de portada"></img>

                    <h3>2- Sección de Galerías</h3>
                    <p>Este es el punto de inicio para comenzar a recorrer tus trabajos. Incluye hasta cinco links a galerías, cada una con una imagen de portada, un nombre, y (opcionalmente) una descripción breve. Cada galería es una colección de imágenes que puede representar, por ejemplo, una serie, una obra o una categoría, entre otras cosas.</p>
                    <img alt="Captura de pantalla de sección de galerías"></img>

                    <h3>3- Galerías individuales</h3>
                    <p>Cada link de la sección anterior lleva a una galeria individual. Una galería incluye una grilla de imágenes, cada una de las cuales puede contener un nombre y una descripción de hasta cinco líneas. Esta descripción puede ser usada para incluir datos como año, formato, premios o exhibiciones, entre otros.</p>
                    <p>La grilla es flexible en cuanto a la distribución de las fotos: se puede modificar su ancho, el espacio entre imágenes, y la cantidad de imágenes por fila. Las imágenes se pueden ampliar haciendo clic en ellas; esto abre una galeria para recorrer las imágenes a pantalla completa.</p>
                    <img alt="Captura de pantalla de galería individual"></img>
                    <img alt="Captura de pantalla de galería individual"></img>

                    <h3>4- Secciones informativas</h3>
                    <p>Estas secciones estan pensadas para que puedas incluir contenido textual: por ejemplo, una bio, un statement, o cualquier otro tipo de información sobre vos o tu trabajo. Se incluyen hasta tres secciones, y cada una de ellas puede contener un texto y una imagen.</p>
                    <p>Opcionalmente, se puede usar una de las secciones para incluir información de contacto, junto con un formulario de contacto (en este caso, no se incluye imagen).</p>
                    <img alt="Captura de pantalla de sección informativa"></img>
                </section>

                <section id="proceso">
                    <h2>Proceso y entregables</h2>
                    <ol>
                        <li>Se programa una <strong>reunión</strong> para hablar sobre tu proyecto, pensar referencias y decisiones de diseño, y conversar sobre cómo preparar el contenido;</li>
                        <li>Se arma un <strong>sitio funcional</strong> a modo de propuesta, en función de lo pensado;</li>
                        <li>Sobre la propuesta presentada se hacen <strong>ajustes finales</strong>, y se publica la web en el dominio correspondiente.</li>
                    </ol>
                    <h3>Al publicar el sitio, se te entregan:</h3>
                    <ul>
                        <li><strong>Hoja de claves</strong>, con los accesos para los servicios en los que está alojada tu web.</li>
                        <li>Archivo .zip con los <strong>archivos del sitio</strong>, para restaurarlo o migrarlo de ser necesario.</li>
                    </ul>

                    <h3>¿Cómo publicamos tu sitio?</h3>
                    <p>Para ser publicado, un sitio necesita de dos cosas: un <strong>dominio</strong> (la dirección de tu sitio, por ejemplo: “www.taimune.com.ar”) y un <strong>hosting</strong> (el lugar en donde se guardan los contenidos y los archivos del sitio).</p>
                    <p>En el caso del dominio, te guiamos en la elección, contratación y configuración de un dominio, para que el registro quede hecho a tu nombre y tengas total libertad sobre el mismo. Todos los dominios tienen un precio de contratación y renovación anual, que depende del provedor.</p>
                    <p>En el caso del hosting, se utilizan servicios de publicación web sin costo, disponibles para sitios sencillos: esto permite obviar el costo de un servicio de hosting tradicional, que incluye una infraestructura que este tipo de sitios no necesita (como por ejemplo, bases de datos o casillas de correo). Como los archivos del sitio son tuyos, siempre se puede mover el sitio a un hosting tradicional en caso de ser necesario.</p>

                    <h3>Qué NO incluye un portafolio estándar</h3>
                    <ul>
                        <li>El sitio <strong>no incluye videos</strong> de ningún tipo, pero se pueden presupuestar como un extra.</li>
                        <li>No se incluyen casillas de correo con dominio personalizado.</li>
                        <li>El sitio <strong>no incluye un sistema para editar contenidos</strong>; para editarlo hay que modificar los archivos HTML. Si las actualizaciones de contenido son pocas, éstas se pueden presupuestar individualmente; si son muchas, podemos <a href="/#contacto">implementar el sitio como un template de Wordpress</a> para que puedas actualizarlo más facilmente.</li>
                        <li>Si bien la identidad visual del sitio es personalizable, la diagramación o layout del sitio no se puede modificar (más allá de las variantes y opciones previstas para cada sección). Para diseños con una identidad más personal podemos iniciar un <a href="/#contacto">proceso de diseño personalizado</a>, con un presupuesto acorde a tus necesidades.</li>
                    </ul>

                    <h3>Valor y tiempos</h3>
                    <p>Un Portafolio Estándar tiene un valor fijo de $60.000, que cubre todas las caracteristicas y servicios mostrados.</p>
                    <p>El tiempo de realización es de una semana hábil desde el momento en que recibamos todos los materiales necesarios para trabajar.</p>
                </section>
            </main>
        </body>
    )
}