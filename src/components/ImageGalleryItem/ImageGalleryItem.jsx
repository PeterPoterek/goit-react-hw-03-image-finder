import { ImageGalleryLi, ImageGalleryImage } from './ImageGalleryItemStyles';

const ImageGalleryItem = ({ openModal, webformatURL, largeImageURL, tags }) => {
  return (
    <ImageGalleryLi onClick={() => openModal(largeImageURL)}>
      <ImageGalleryImage src={webformatURL} alt={tags} />
    </ImageGalleryLi>
  );
};

export default ImageGalleryItem;
