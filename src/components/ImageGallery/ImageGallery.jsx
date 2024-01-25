import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem.jsx';

import { ImageGalleryUl } from './ImageGalleryStyles';

const ImageGallery = ({ imagesToRender }) => {
  return (
    <ImageGalleryUl>
      {imagesToRender &&
        imagesToRender.map(image => {
          console.log(image);
          return (
            <ImageGalleryItem
              key={image.id}
              webformatURL={image.webformatURL}
              largeImageURL={image.largeImageURL}
            />
          );
        })}
    </ImageGalleryUl>
  );
};

export default ImageGallery;
