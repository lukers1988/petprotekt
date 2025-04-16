import { useTranslation } from "react-i18next";
import {
    Container,
    Header,
    List,
    ListCell,
    PetAvatar,
    AddPet,
} from "./styles/PetListStyled";
import { PlusIcon } from "@appComponents/Icons";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPets, startLoading, setActivePet } from "@appStore/PetsReducer";
import { RootStateType } from "@appStore/store";
import { path } from "ramda";

const petListMock = [
    {
        id: "01",
        name: "Maxi",
        imageUrl:
            "https://store.playstation.com/store/api/chihiro/00_09_000/container/US/en/19/UP2477-CUSA06694_00-AV00000000000022/image?w=320&h=320&bg_color=000000&opacity=100&_version=00_09_000",
        race: "Dog",
        birthDate: "2025-02-11",
        breed: "Chihuahua",
        description: "Very smol.",
        gender: "M" as const,
        size: "small",
        weight: 1.8,
        dates: [
            {
                id: "birthday",
                date: new Date(2019, 9, 3),
            },
            {
                id: "adoption",
                date: new Date(2020, 0, 6),
            },
        ],
    },
    {
        id: "02",
        name: "Fiona",
        imageUrl:
            "https://store.playstation.com/store/api/chihiro/00_09_000/container/US/en/19/UP2477-CUSA06694_00-AV00000000000022/image?w=320&h=320&bg_color=000000&opacity=100&_version=00_09_000",
        race: "Dog",
        birthDate: "2025-02-11",
        breed: "Border Collie",
        description:
            "Brown-Dark-White mix, with light eyebrows shape and a heart shaped patch on left paw.",
        gender: "F" as const,
        size: "medium",
        weight: 22.2,
        dates: [
            {
                id: "birthday",
                date: new Date(2021, 4, 10),
            },
        ],
    },
];

const PetList = () => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const petList = useSelector((state: RootStateType) =>
        path(["petList", "pets"], state)
    );
    const activePet = useSelector((state: RootStateType) =>
        path(["petList", "active"], state)
    );

    const getPetsList = async () => {
        dispatch(startLoading());

        // TODO - implement API call
        // const response = await customAxios.get<PetResponseInterface>("/pet");
        // const receivedList = path(["data", "data"], response);

        dispatch(
            getAllPets(
                petListMock.map((pet) => ({
                    id: pet.id,
                    race: pet.race,
                    name: pet.name,
                    birthDate: pet.birthDate,
                    imageUrl: pet.imageUrl,
                    breed: pet.breed,
                    description: pet.description,
                    gender: pet.gender,
                    size: pet.size,
                    weight: pet.weight,
                    dates: pet.dates,
                }))
            )
        );
    };

    useEffect(() => {
        getPetsList();
    }, []);

    return (
        <Container>
            <Header>{t("sideMenu:yourPets")}</Header>
            <List>
                {petList.map((pet) => {
                    const isActive = pet.id === activePet;

                    return (
                        <ListCell $isActive={isActive} key={pet.id}>
                            <PetAvatar
                                $isActive={isActive}
                                src={pet.imageUrl}
                                onClick={() => {
                                    dispatch(setActivePet(pet.id));
                                }}
                            />
                            {pet.name}
                        </ListCell>
                    );
                })}
                <ListCell>
                    <AddPet
                        onClick={() => {
                            // TODO - add proper pet addition feature
                            console.log("add pet");
                        }}
                    >
                        <PlusIcon />
                    </AddPet>
                    {t("common:add")}
                </ListCell>
            </List>
        </Container>
    );
};

export default PetList;
