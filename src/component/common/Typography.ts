import { grey } from "@appConst/colors";
import styled from "styled-components";

export const InfoHeader = styled.p`
    margin: 0px;
    font-size: 18px;
    font-weight: 600;
    color: ${grey};
`;

export const InfoText = styled.p`
    margin: 0px;
    font-size: 16px;
    font-weight: 400;
`;

export const InfoTextBold = styled(InfoText)`
    font-weight: 600;
`;
