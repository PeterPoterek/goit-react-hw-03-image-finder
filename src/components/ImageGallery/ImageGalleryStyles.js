import styled from 'styled-components';

export const ImageGalleryUl = styled.ul`
  display: grid;
  max-width: calc(100vw - 250px);
  grid-template-columns: repeat(4, minmax(0, 1fr));
  grid-gap: 16px;
  margin-bottom: 0;
  padding: 0;
  padding-top: 7.5rem;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;
