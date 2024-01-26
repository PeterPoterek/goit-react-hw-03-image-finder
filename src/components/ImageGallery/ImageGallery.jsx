import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem.jsx';

import { ImageGalleryUl } from './ImageGalleryStyles';

const ImageGallery = ({ imagesToRender }) => {
  return (
    <ImageGalleryUl>
      {imagesToRender &&
        imagesToRender.map((image, index) => {
          return (
            <ImageGalleryItem
              key={`${image.id}-${index}`}
              webformatURL={image.webformatURL}
              largeImageURL={image.largeImageURL}
              tags={image.tags}
            />
          );
        })}
    </ImageGalleryUl>
  );
};

export default ImageGallery;
