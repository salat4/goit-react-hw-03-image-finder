import styles from "./Modal.module.css";
const Modal = ({handleModalClose,largeImageURL }) => (
  <div className={styles.Overlay} onClick={handleModalClose}>
    <div className={styles.Modal}>
   <img src={largeImageURL} alt={"largeImageURL"}></img>     
    </div>
    </div>

);
export default Modal;
