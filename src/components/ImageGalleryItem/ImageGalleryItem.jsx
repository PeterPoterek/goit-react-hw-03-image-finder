import { ImageGalleryLi, ImageGalleryImage } from './ImageGalleryItemStyles';

const ImageGalleryItem = ({ webformatURL, largeImageURL }) => {
  return (
    <ImageGalleryLi>
      <ImageGalleryImage src={webformatURL} alt="" />
    </ImageGalleryLi>
  );
};

export default ImageGalleryItem;
