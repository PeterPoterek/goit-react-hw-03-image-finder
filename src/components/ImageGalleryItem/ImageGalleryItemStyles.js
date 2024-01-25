import styled from 'styled-components';

export const ImageGalleryLi = styled.li`
  border-radius: 2px;
`;
export const ImageGalleryImage = styled.img`
  width: 100%;
  height: 240px;
  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;
