import styles from './Proyecto.module.css';

export default function Proyecto(props) {
    return (
        <div className={styles.main}>
            <a className={styles.imageLink} href={props.url} target="_blank">
                <img src={props.urlImagen} className={styles.imagen}></img>
            </a>
            <div className={styles.texto}>
                <h3 className={styles.nombre}>{props.nombre}</h3>
                <span className={styles.año}>{props.año}</span>
                <span className={styles.descripcion}>{props.descripcion}</span>
                <a href={props.url} className={styles.link} target="_blank">Ver sitio</a>
            </div>
        </div>
    )
}