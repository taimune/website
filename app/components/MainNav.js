'use client';

import styles from './MainNav.module.css';

export default function MainNav(props) {

    return (
          <header className={styles.header}>
            <nav className={styles.main}>
                <ul className={styles.list}>
                    <li className={styles.listItem}><a href="/#servicios">Servicios</a></li>
                    <li className={styles.listItem}><a href="/#proceso">Proceso</a></li>
                    <li>
                      <a href="#home">
                        <img className={styles.icon} src="icono-rosa.svg" alt="Inicio"/>
                      </a>
                    </li>
                    <li className={styles.listItem}><a href="/#proyectos">Proyectos</a></li>
                    <li className={styles.listItem}><a href="/#contacto">Contacto</a></li>
                </ul>
            </nav>
          </header>
            )
}