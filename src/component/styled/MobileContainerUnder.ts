import styled from 'styled-components';

const MobileContainerUnder = styled.div<{ $breakpoint: number }>`
    ${({ $breakpoint }) => `
    @media (max-width: ${$breakpoint}px) {
        display: flex;
        justify-content: center !important;
        align-items: center !important;
        text-align: center;
        flex-direction: column;
    }
  `}
`;

export default MobileContainerUnder;
