'use client';

import styles from './ContactForm.module.css';
import TextButton from './TextButton';

export default function ContactForm() {
    return (
        <form className={styles.form} name="contacto" method="POST" action="/mensaje-enviado" data-netlify="true">
            <input type="hidden" name="form-name" value="contacto"></input>
            <div className={styles.fields}>
                <div className={styles.formField}>
                    <label htmlFor="nombre" className={styles.formLabel} >Tu nombre:</label>
                    <input type="text" id="nombre" name="nombre" className={styles.formInput + ' focusable'}></input>
                </div>
                <div className={styles.formField}>
                    <label className={styles.formLabel} htmlFor="email">Tu correo electronico:</label>
                    <input type="email" id="email" name="email" className={styles.formInput + ' focusable'}></input>
                </div>
                <div className={styles.formField}>
                    <label className={styles.formLabel} htmlFor="servicio">Asunto:</label>


                    <select name="servicio" id="servicio" className={styles.formSelect + ' focusable'}>
                        <option>Portfolio estándar</option>
                        <option>Diseño a medida</option>
                        <option>Desarrollo de interfaces</option>
                    </select>

                </div>
                <div className={styles.formField}>
                    <label className={styles.formLabel} htmlFor="mensaje">Tu mensaje:</label>
                    <textarea id="mensaje" name="mensaje" className={styles.formInputLarge + ' focusable'}></textarea>
                </div>
            </div>
            <TextButton buttonText='Enviar mensaje'></TextButton>
        </form>
    )

}