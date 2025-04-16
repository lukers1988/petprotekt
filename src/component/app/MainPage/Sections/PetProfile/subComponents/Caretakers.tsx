import {
    InfoHeader,
    InfoText,
    InfoTextBold,
} from "@appComponents/common/Typography";
import { useTranslation } from "react-i18next";
import {
    Caretaker,
    CaretakerImage,
    Container,
} from "../styles/Caretakers.styled";
import { useEffect, useState } from "react";
import CaretakersType from "@appInterfaces/api/Caretakers";
import { generatePerson } from "@appUtils/faker/person";

const Caretakers = () => {
    const { t } = useTranslation();

    const [caretakers, setCaretakers] = useState<CaretakersType>([]);

    useEffect(() => {
        // TODO - implement API call basing on pet id
        setCaretakers([generatePerson(), generatePerson()]);
    }, []);

    return (
        <div>
            <InfoHeader>{t("petProfile:caretakers")}</InfoHeader>
            <Container>
                {caretakers.map((caretaker) => (
                    <Caretaker>
                        <CaretakerImage src={caretaker.photoUrl} />
                        <div>
                            <InfoTextBold>{`${caretaker.firstName} ${caretaker.lastName}`}</InfoTextBold>
                            <InfoText>{caretaker.email}</InfoText>
                        </div>
                    </Caretaker>
                ))}
            </Container>
        </div>
    );
};

export default Caretakers;
