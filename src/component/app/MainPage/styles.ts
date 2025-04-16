import styled from "styled-components";
import { mainBg } from "@appConst/colors";
import { verticalDivider } from "@appComponents/styled/sharedStyles";

export const PageContainer = styled.div`
    max-width: 1920px;
    margin: auto;
    background-color: ${mainBg};
    min-height: 100vh;
    display: flex;
`;

export const SectionWrapper = styled.div`
    ${verticalDivider}
    display: flex;
    width: 100%;

    & > * {
        padding: 28px;
        min-height: 100vh;
    }

    & > *:last-child {
        flex-grow: 1;
    }
`;
