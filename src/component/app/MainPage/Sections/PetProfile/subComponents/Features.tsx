import { InfoText, InfoTextBold } from "@appComponents/common/Typography";
import { Container, Feature } from "../styles/FeaturesStyled";
import { useTranslation } from "react-i18next";
import { useActivePetData } from "../hooks/useActivePetDate";
import { capitalize } from "@appUtils/capitalize";

const Features = () => {
    const { t } = useTranslation();
    const { activePet } = useActivePetData();

    if (!activePet) return;

    const featuresList = [
        {
            label: t("petProfile:gender"),
            value: activePet.gender,
        },
        {
            label: t("petProfile:size"),
            value: capitalize(activePet.size),
        },
        {
            label: t("petProfile:weight"),
            value: `${activePet.weight} kg`,
        },
    ];
    return (
        <Container>
            {featuresList.map((feature) => (
                <Feature key={feature.label}>
                    <InfoText>{feature.label}</InfoText>
                    <InfoTextBold>{feature.value}</InfoTextBold>
                </Feature>
            ))}
        </Container>
    );
};

export default Features;
