import { SearchIcon } from "@appComponents/Icons";
import { Container, IconInputWrapper } from "./styles/common";
import {
    lightBlue,
    lightGray,
    lightGreen,
    lightYellow,
} from "@appConst/colors";
import { useTranslation } from "react-i18next";
import ExpandingTile from "../shared/ExpandingTile";
import { Leash, Paw, Whistle } from "@appComponents/Images";
import UpcomingEvents from "./subCmponents/UpcomingEvents";

const Activities = () => {
    const { t } = useTranslation();

    return (
        <Container>
            <IconInputWrapper>
                <SearchIcon color={lightGray} />
                <input placeholder={t("common:searchProduct")} />
            </IconInputWrapper>
            <ExpandingTile
                color={lightGreen}
                label={t("activities:walks")}
                icon={<Leash />}
            >
                123
            </ExpandingTile>
            <ExpandingTile
                color={lightYellow}
                label={t("activities:tricks")}
                icon={<Whistle />}
            >
                123
            </ExpandingTile>
            <ExpandingTile
                color={lightBlue}
                label={t("activities:otherActivities")}
                icon={<Paw />}
            >
                123
            </ExpandingTile>
            <UpcomingEvents />
        </Container>
    );
};

export default Activities;
