import styles from './PasoProceso.module.css';

export default function PasoProceso(props) {
    return (
        <div className={styles.main}>
            <img className={styles.grafico} src={props.imagen} alt={`Ícono ${props.titulo}`}/>
            <div className={styles.texto}>
                <h3 className={styles.titulo}><span className={styles.numero}>{props.numero} |</span> {props.titulo}</h3>
                <p className={styles.descripcion}>{props.descripcion}</p>
            </div>
        </div>
    )
}