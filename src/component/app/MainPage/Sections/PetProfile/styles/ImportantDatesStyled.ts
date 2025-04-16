import { horizontalDivider } from "@appComponents/styled/sharedStyles";
import { pastelBlue } from "@appConst/colors";
import styled from "styled-components";

export const Container = styled.div`
    ${horizontalDivider}
`;

export const Date = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center; 
    padding-bottom: 5px;
    margin-bottom: 5px;
`;

export const IconContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    width: 50px;
    border-radius: 12px;
    background-color: ${pastelBlue};
`;
