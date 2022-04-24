import styles from "./Modal.module.css";
const Modal = ({ articles, handleModalClose }) => (
  <div className={styles.Overlay} onClick={handleModalClose}>
    <div className={styles.Modal}>
      {articles.map(({ tags, largeImageURL, id }) => (
        <img src={largeImageURL} alt={id}></img>
      ))}
    </div>
  </div>
);
export default Modal;
