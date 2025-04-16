import { lightGray } from "@appConst/colors";
import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

export const IconInputWrapper = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid ${lightGray};
    padding: 6px 10px;
    border-radius: 20px;
    width: 100%;
    background-color: #fff;

    input {
        margin-left: 10px;
        border: none;
        outline: none;
        font-size: 14px;
        background: transparent;
        width: 100%;
    }
`;
