import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem.jsx';

import { ImageGalleryUl } from './ImageGalleryStyles';

const ImageGallery = ({ openModal, imagesToRender }) => {
  return (
    <ImageGalleryUl>
      {imagesToRender &&
        imagesToRender.map((image, index) => {
          return (
            <ImageGalleryItem
              key={`${image.id}-${index}`}
              openModal={openModal}
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
