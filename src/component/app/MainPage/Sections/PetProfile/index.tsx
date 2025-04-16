import { Container } from "./styles/common";
import { useActivePetData } from "./hooks/useActivePetDate";
import BasicInfo from "./subComponents/BasicInfo";
import Appearance from "./subComponents/Appearance";
import { useTranslation } from "react-i18next";
import Features from "./subComponents/Features";
import ImportantDates from "./subComponents/ImportantDates";
import Caretakers from "./subComponents/Caretakers";

const PetProfile = () => {
    const { t } = useTranslation();
    const { activePet } = useActivePetData();

    if (!activePet) return;

    return (
        <Container>
            <h2>{t("petProfile:petProfile")}</h2>
            <BasicInfo />
            <Appearance />
            <Features />
            <ImportantDates />
            <Caretakers />
        </Container>
    );
};
export default PetProfile;
