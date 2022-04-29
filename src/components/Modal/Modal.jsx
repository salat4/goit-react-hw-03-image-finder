import styles from "./Modal.module.css";
import { Component } from "react";
class Modal extends Component {
    componentDidMount() {
        window.addEventListener("keydown", this.props.handleModalCloseEsc, false);
    }

    componentWillUnmount() {
        window.removeEventListener("keydown", this.props.handleModalCloseEsc, false);
    }
    render () {
    const {largeImageURL} = this.props
    return (
        <div className={styles.Overlay} onClick={this.props.handleModalClose} onKeyDown={this.props.handleModalCloseEsc} tabIndex={0}>
    <div className={styles.Modal}>
   <img src={largeImageURL} alt={"largeImageURL"}></img>     
    </div>
    </div>)
}
}

export default Modal;
