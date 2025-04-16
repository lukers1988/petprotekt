import { RootStateType } from "@appStore/store";
import { path } from "ramda";
import { useSelector } from "react-redux";

export const useActivePetData = () => {
    const activePet = useSelector((state: RootStateType) =>
        path(["petList", "active"], state)
    );
    const petsList = useSelector((state: RootStateType) =>
        path(["petList", "pets"], state)
    );

    return { activePet: petsList.find((pet) => pet.id === activePet) };
};
