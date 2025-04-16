import { info, lightGray } from "@appConst/colors";
import styled from "styled-components";

export const PetImage = styled.img`
    height: 128px;
    width: 128px;
    border-radius: 64px;
    border: solid 16px ${lightGray};
`;

export const EditButton = styled.button`
    border: 1px solid ${info};
    border-radius: 14px;
    height: 38px;
    width: 38px;
`;
