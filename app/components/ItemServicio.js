import styles from './ItemServicio.module.css';

export default function ItemServicio(props) {
    return (
        <div className={styles.main}>
            <div>
            <h3 className='header-servicio'>{props.tituloServicio}</h3>
            <p>{props.descripcionServicio}</p>
            </div>
            <a href={props.url} className={props.botonResaltado ? styles.botonResaltado : null}>
                {props.textoLink ? props.textoLink : "Consultar"}
            </a>
            
        </div>
    )
}