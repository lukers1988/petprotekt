import { GridItem, tileBorder } from "@appComponents/styled/sharedStyles";
import { info } from "@appConst/colors";
import styled from "styled-components";

export const Recipe = styled(GridItem)`
    ${tileBorder}
    display: flex;
    align-items: center;
    flex-direction: column;
    text-align: center;
    max-width: 187px;
`;

export const RecipeImage = styled.img`
    width: 110px;
    height: 110px;
    border-radius: 55px;
    margin-bottom: 30px;
`;

export const AddRecipe = styled.button`
    width: 100%;
    margin-top: 30px;
    border: 1px solid ${info};
    border-radius: 14px;
    min-height: 46px;
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
    justify-content: center;
    color: ${info};
`;
