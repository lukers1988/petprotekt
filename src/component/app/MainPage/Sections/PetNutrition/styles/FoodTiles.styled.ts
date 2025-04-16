import { GridItem, tileBorder } from "@appComponents/styled/sharedStyles";
import styled from "styled-components";

export const FoodItem = styled(GridItem)`
    ${tileBorder}
`;

export const FoodImage = styled.img`
    width: 46px;
    height: 46px;
    border-radius: 23px;
    margin-bottom: 20px;
`;
