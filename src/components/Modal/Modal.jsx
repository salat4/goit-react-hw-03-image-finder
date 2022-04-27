import styles from "./Modal.module.css";
const Modal = ({handleModalClose,largeImageURL,handleModalCloseEsc }) => (
<div className={styles.Overlay} onClick={handleModalClose} onKeyDown={handleModalCloseEsc} tabIndex={0}>
    <div className={styles.Modal}>
   <img src={largeImageURL} alt={"largeImageURL"}></img>     
    </div>
    </div>

);
export default Modal;
