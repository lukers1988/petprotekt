import { tileBorder } from "@appComponents/styled/sharedStyles";
import styled from "styled-components";

export const Event = styled.div`
    ${tileBorder}
    display: flex;
    flex-direction: row;
    gap: 20px;
    padding: 15px;
    align-items: center;
    margin-bottom: 10px;
`;

export const ImageContainer = styled.img`
    height: 52px;
    width: 52px;
    border-radius: 26px;
`;
