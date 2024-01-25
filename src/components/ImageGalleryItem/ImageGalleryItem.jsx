import { ImageGalleryLi, ImageGalleryImage } from './ImageGalleryItemStyles';

const ImageGalleryItem = ({ webformatURL, largeImageURL, tags }) => {
  return (
    <ImageGalleryLi>
      <ImageGalleryImage src={webformatURL} alt={tags} />
    </ImageGalleryLi>
  );
};

export default ImageGalleryItem;
