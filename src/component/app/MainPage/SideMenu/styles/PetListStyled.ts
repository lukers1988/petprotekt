import styled from "styled-components";
import { logo } from "@appConst/colors";

export const Container = styled.div`
    padding-left: 20px;
    padding-right: 20px;
    color: #ffffff;
`;

export const Header = styled.p`
    font-size: 16px;
    color: #ffffff;
    font-weight: 500;
`;

export const List = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
`;

export const ListCell = styled.div<{ $isActive?: boolean }>`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    font-size: 14px;
    color: ${({ $isActive }) => ($isActive ? logo : "#ffffff")};
`;

export const PetAvatar = styled.img<{ $isActive?: boolean }>`
    width: 60px;
    height: 60px;
    border-radius: 30px;
    cursor: pointer;
    /* background-color: ${({ $isActive }) =>
        $isActive ? "#0056b3" : "#007bff"}; */
    border: solid
        ${({ $isActive }) => ($isActive ? `${logo} 3px` : "#ffffff 2px")};
`;

export const AddPet = styled.div`
    width: 60px;
    height: 60px;
    border-radius: 30px;
    cursor: pointer;
    border: 2px solid #ffffff;
    background-color: #000000;
    display: flex;
    justify-content: center;
    align-items: center;
`;
