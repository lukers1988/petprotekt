import styled from 'styled-components';

const MobileContainerUnder = styled.div<{ breakpoint: number }>`
    ${({ breakpoint }) => `
    @media (max-width: ${breakpoint}px) {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        flex-direction: column;
    }
  `}
`;

export default MobileContainerUnder;
