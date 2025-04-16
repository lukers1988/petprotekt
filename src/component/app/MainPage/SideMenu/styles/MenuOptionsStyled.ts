import styled from "styled-components";
import { logo } from "@appConst/colors";

export const Container = styled.div``;

export const MenuItem = styled.div<{ $isActive?: boolean }>`
    height: 70px;
    display: flex;
    align-items: center;
    padding-left: 30px;
    gap: 30px;
    flex-direction: row;
    cursor: pointer;
    font-size: 20px;
    color: ${({ $isActive }) => ($isActive ? logo : "#ffffff")};
`;
