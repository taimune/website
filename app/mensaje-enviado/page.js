import styles from './page.module.css';

export const metadata = {
    title: 'Tu mensaje fue enviado',
  };


export default function MensajeEnviado() {
    return (
        <body>
            <main className={styles.main}>
                <h1>¡Tu mensaje fue enviado!</h1>
                <p>Muchas gracias por contactarte. Pronto te voy a estar contactando de nuevo.</p>
                <p>Hacé clic para <a href="/">volver a la página principal</a></p>
            </main>
        </body>
    )
}
