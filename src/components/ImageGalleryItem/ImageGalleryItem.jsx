// import * as basicLightbox from "basiclightbox";

const ImageGalleryItem = ({
  id,
  previewURL,
  tags,
  largeImageURL,
  handleModalOpen,
  handleModalClose,
  openModal,
}) => (
  <li key={id}>
    <img src={previewURL} alt={id} onClick={handleModalOpen}></img>
  </li>
);
export default ImageGalleryItem;
