import styled from "styled-components";
import { mainBgDark, logo } from "@appConst/colors";

export const MenuContainer = styled.div`
    max-width: 315px;
    background-color: ${mainBgDark};
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    gap: 40px;
`;

export const Logo = styled.div`
    width: 100%;
    height: 104px;
    display: flex;
    justify-content: center;
    gap: 20px;
    align-items: center;
    color: ${logo};
    font-size: 28px;
    font-weight: 700;
`;
