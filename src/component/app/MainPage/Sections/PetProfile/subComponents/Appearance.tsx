import { InfoHeader, InfoText } from "@appComponents/common/Typography";
import { useActivePetData } from "../hooks/useActivePetDate";
import { useTranslation } from "react-i18next";

const Appearance = () => {
    const { t } = useTranslation();
    const { activePet } = useActivePetData();

    if (!activePet) return;

    return (
        <div>
            <InfoHeader>{t("petProfile:appearanceHeader")}</InfoHeader>
            <InfoText>{activePet.description}</InfoText>
        </div>
    );
};

export default Appearance;
