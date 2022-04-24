import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
// import Modal from "../Modal/Modal";

const ImageGallery = ({
  articles,
  handleModalOpen,
  handleModalClose,
  openModal,
}) => (
  <>
    <ul>
      {articles.map(({ id, webformatURL, tags, largeImageURL }) => (
        <ImageGalleryItem
          id={id}
          previewURL={webformatURL}
          tags={tags}
          largeImageURL={largeImageURL}
          handleModalOpen={handleModalOpen}
          handleModalClose={handleModalClose}
          openModal={openModal}
        />
      ))}
    </ul>
  </>
);
export default ImageGallery;
