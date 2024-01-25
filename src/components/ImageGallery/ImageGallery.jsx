import { ImageGalleryUl } from './ImageGalleryStyles';

const ImageGallery = ({ imagesToRender }) => {
  return (
    <ImageGalleryUl>
      {imagesToRender &&
        imagesToRender.map(image => {
          console.log(image);
        })}
    </ImageGalleryUl>
  );
};

export default ImageGallery;
