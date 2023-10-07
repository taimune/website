import styles from './TextButton.module.css';

export default function TextButton(props){
    return (
        <button className={styles.button + ' focusable'}>{props.buttonText}</button>
    )
}