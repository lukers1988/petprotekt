import { tileBorder } from "@appComponents/styled/sharedStyles";
import { lightGray } from "@appConst/colors";
import styled from "styled-components";

export const Container = styled.div`
    ${tileBorder}
    padding: 16px;
`;

export const FoldedContent = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const IconContainer = styled.div<{ color: string }>`
    height: 60px;
    width: 60px;
    background-color: ${({ color }) => `${color}70`};
    border-radius: 10px;
    border: 1.5px solid ${({ color }) => color};
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ToggleContainer = styled.div`
    cursor: pointer;
`;

export const Divider = styled.div`
    border-bottom: 1px solid ${lightGray};
    margin-bottom: 10px;
`;

export const ExpandedContentWrapper = styled.div`
    padding-top: 16px;
`;
