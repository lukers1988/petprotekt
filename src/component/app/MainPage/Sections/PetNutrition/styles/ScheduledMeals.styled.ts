import { tileBorder } from "@appComponents/styled/sharedStyles";
import styled from "styled-components";

export const MealContainer = styled.div`
    ${tileBorder}
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 10px;
    padding: 10px;
`;
