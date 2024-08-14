import { universalGreen } from '@appConst/colors';
import styled from 'styled-components';

const ComingSoonContainer = styled.div`
    width: 100%;
    background-image: linear-gradient(to bottom, #fff, ${universalGreen});
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 1000px) {
        height: 100vh;
    }
`;

export default ComingSoonContainer;
