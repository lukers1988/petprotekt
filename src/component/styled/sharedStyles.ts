import { lightGray } from "@appConst/colors";
import styled, { css } from "styled-components";

export const horizontalDivider = css`
    & > *:not(:last-child) {
        border-bottom: 1px solid ${lightGray};
    }
`;

export const verticalDivider = css`
    & > *:not(:last-child) {
        border-right: 1px solid ${lightGray};
    }
`;

export const RowLayout = styled.div`
    display: flex;
    gap: 20px;
    align-items: center;
`;

export const tileBorder = css`
    border: 1px solid ${lightGray};
    border-radius: 16px;
`;

export const GridContainer = styled.div<{
    columns: number;
}>`
    display: grid;
    grid-template-columns: repeat(${(props) => props.columns}, 1fr);
    gap: 20px;
`;

export const GridItem = styled.div`
    width: 100%;
    padding: 16px;
`;
