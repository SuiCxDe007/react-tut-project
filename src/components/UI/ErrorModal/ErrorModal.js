import Card from "../Card/Card";
import Button from "../Button/Button";
import styles from './ErrorModal.module.css'
import ReactDom from 'react-dom'

const Backdrop = props =>{
    return <div className={styles.backdrop} onClick={props.onClick}></div>
}

const ModalOverlay = props => {
    return  <Card className={styles.modal}>
        <header className={styles.header}>
            <h2>{props.title}</h2>
        </header>
        <div className={styles.content}>
            <p>{props.message}</p>
        </div>
        <footer className={styles.actions}>
            <Button onClick={props.onClick}>Okay</Button>
        </footer>
    </Card>
}

const ErrorModal = props => {
    return <>
        {ReactDom.createPortal(<Backdrop onClick={props.onClick}/>,document.getElementById('backdrop-root'))}
        {ReactDom.createPortal(<ModalOverlay onClick={props.onClick} title={props.title} message={props.message}/>,document.getElementById('modal-root'))}
    </>
}
export default ErrorModal;