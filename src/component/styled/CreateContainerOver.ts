import styled from 'styled-components';

const CreateContainerOver = styled.div<{ $breakpoint: number; $display: string }>`
    display: ${({ $display }) => $display};
    @media (max-width: ${({ $breakpoint }) => $breakpoint}px) {
        display: none;
    }
`;

export default CreateContainerOver;
