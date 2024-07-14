import styled from 'styled-components';

const ShowContainerUnder = styled.div<{ $breakpoint: number }>`
    visibility: hidden;
    @media (max-width: ${({ $breakpoint }) => $breakpoint}px) {
        visibility: visible;
    }
`;

export default ShowContainerUnder;
