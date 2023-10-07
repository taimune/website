import styles from './page.module.css';

export const metadata = {
    title: 'Página no encontrada - Taimuné | Diseño Web',
};

export default function MensajeEnviado() {
    return (
        <body>
            <main className={styles.main}>
                <h1>No se pudo encontrar la página</h1>
                <p>Parece que la página que estabas buscando no existe. Hacé clic para <a href="/">volver a la página principal</a></p>
            </main>
        </body>
    )
}
