import {
    InfoHeader,
    InfoText,
    InfoTextBold,
} from "@appComponents/common/Typography";
import { useTranslation } from "react-i18next";
import { Event, ImageContainer } from "../styles/UpcomingEvents.styled";
import { RowLayout } from "@appComponents/styled/sharedStyles";
import { PillIcon, ScissorsIcon, WalkIcon } from "@appComponents/Icons";
import { green, magenta, purple } from "@appConst/colors";
import { faker } from "@faker-js/faker";
import { format } from "date-fns";

const UpcomingEvents = () => {
    const { t } = useTranslation();

    // TODO - implement API call
    const events = [
        {
            label: "Morning walk",
            timestamp: new Date(2023, 5, 12, 9, 30),
            icon: <WalkIcon color={green} />,
            imageUrl: faker.image.urlPicsumPhotos(),
        },
        {
            label: "Flea medication",
            timestamp: new Date(2023, 5, 12, 11, 0),
            icon: <PillIcon color={magenta} />,
            imageUrl: faker.image.urlPicsumPhotos(),
        },
        {
            label: "Flea medication",
            timestamp: new Date(2023, 5, 12, 16, 0),
            icon: <ScissorsIcon color={purple} />,
            imageUrl: faker.image.urlPicsumPhotos(),
        },
    ];

    return (
        <div>
            <InfoHeader>{t("activities:upcomingEvents")}</InfoHeader>
            {events.map((event) => (
                <Event>
                    <ImageContainer src={event.imageUrl} />
                    <div>
                        <InfoText>
                            {format(event.timestamp, "yyyy.MM.dd | HH:mm")}
                        </InfoText>
                        <RowLayout>
                            {event.icon}
                            <InfoTextBold>{event.label}</InfoTextBold>
                        </RowLayout>
                    </div>
                </Event>
            ))}
        </div>
    );
};

export default UpcomingEvents;
