import styled from 'styled-components';

const ImageHiddenUnder = styled.img<{ $breakpoint: number }>`
    ${({ $breakpoint }) => `
    @media (max-width: ${$breakpoint}px) {
      display: none;
    }
  `}
`;

export default ImageHiddenUnder
