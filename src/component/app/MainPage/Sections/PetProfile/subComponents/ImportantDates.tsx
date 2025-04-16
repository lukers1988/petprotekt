import {
    InfoHeader,
    InfoText,
    InfoTextBold,
} from "@appComponents/common/Typography";
import { useTranslation } from "react-i18next";
import { useActivePetData } from "../hooks/useActivePetDate";
import { Container, Date, IconContainer } from "../styles/ImportantDatesStyled";
import { datesConfig } from "@appConst/dates";
import { capitalize } from "@appUtils/capitalize";
import { useCalendarNames } from "@appHooks/useCalendarNames";
import { getDay, getMonth, getYear } from "date-fns";
import { RowLayout } from "@appComponents/styled/sharedStyles";

const ImportantDates = () => {
    const { t } = useTranslation();
    const { activePet } = useActivePetData();
    const { getMonthName } = useCalendarNames();

    if (!activePet) return;

    const datesList = activePet.dates || [];

    return (
        <div>
            <InfoHeader>{t("petProfile:importantDates")}</InfoHeader>
            <Container>
                {datesList.map((event) => {
                    const dateInfo = datesConfig[event.id];
                    if (!dateInfo) return;

                    const { icon, translationKey, additionalContentFn } =
                        dateInfo;

                    const label = capitalize(t(`petProfile:${translationKey}`));
                    const additionalContent =
                        additionalContentFn &&
                        additionalContentFn(event.date, t);
                    const eventDate = event.date;

                    return (
                        <Date key={event.id}>
                            <RowLayout>
                                <IconContainer>{icon}</IconContainer>
                                <div>
                                    <InfoText>{label}</InfoText>
                                    <InfoTextBold>{`${getDay(
                                        eventDate
                                    )} ${getMonthName(
                                        getMonth(eventDate)
                                    )} ${getYear(eventDate)}`}</InfoTextBold>
                                </div>
                            </RowLayout>
                            {additionalContent && (
                                <InfoTextBold>{additionalContent}</InfoTextBold>
                            )}
                        </Date>
                    );
                })}
            </Container>
        </div>
    );
};

export default ImportantDates;
