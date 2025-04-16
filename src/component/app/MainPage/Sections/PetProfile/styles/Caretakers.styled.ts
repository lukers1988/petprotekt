import {
    horizontalDivider,
    RowLayout,
} from "@appComponents/styled/sharedStyles";
import styled from "styled-components";

export const Container = styled.div`
    ${horizontalDivider}
`;

export const Caretaker = styled(RowLayout)`
    padding-bottom: 10px;
    padding-top: 10px;
`;

export const CaretakerImage = styled.img`
    height: 54px;
    width: 54px;
    border-radius: 27px;
`;
