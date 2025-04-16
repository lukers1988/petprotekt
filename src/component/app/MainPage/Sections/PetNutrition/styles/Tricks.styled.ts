import { GridItem, tileBorder } from "@appComponents/styled/sharedStyles";
import styled from "styled-components";

export const Trick = styled(GridItem)`
    ${tileBorder}
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

export const VideoContainer = styled.div`
    border-radius: 10px;
    overflow: hidden;
`;
