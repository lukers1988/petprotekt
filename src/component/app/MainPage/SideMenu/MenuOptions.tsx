import { useDispatch, useSelector } from "react-redux";
import { Container, MenuItem } from "./styles/MenuOptionsStyled";
import {
    TilesIcon,
    AnalyticsIcon,
    InfoIcon,
    CogwheelIcon,
    QuitIcon,
} from "@appComponents/Icons";
import { selectMenuOption } from "@appStore/AppSettingsReducer";
import { RootStateType } from "@appStore/store";
import { path } from "ramda";
import { logo } from "@appConst/colors";
import { useTranslation } from "react-i18next";

const getMenuItemColor = (isActive: boolean) => (isActive ? logo : "#ffffff");

// TODO - move to const file or mapped response menu - API?
const menuOptions = [
    {
        icon: (isActive: boolean) => (
            <TilesIcon color={getMenuItemColor(isActive)} />
        ),
        label: "overview",
        id: "menu-01",
    },
    {
        icon: (isActive: boolean) => (
            <AnalyticsIcon color={getMenuItemColor(isActive)} />
        ),
        label: "analytics",
        id: "menu-02",
    },
    {
        icon: (isActive: boolean) => (
            <InfoIcon color={getMenuItemColor(isActive)} />
        ),
        label: "askADoctor",
        id: "menu-03",
    },
    {
        icon: (isActive: boolean) => (
            <CogwheelIcon color={getMenuItemColor(isActive)} />
        ),
        label: "settings",
        id: "menu-04",
    },
    {
        icon: (isActive: boolean) => (
            <QuitIcon color={getMenuItemColor(isActive)} />
        ),
        label: "logOut",
        id: "menu-05",
    },
];

const MenuOptions = () => {
    const dispatch = useDispatch();
    const { t } = useTranslation();

    const chosenMenuOption = useSelector((state: RootStateType) =>
        path(["appSettings", "chosenMenuOption"], state)
    );

    return (
        <Container>
            {menuOptions.map((option) => {
                const isActive = option.id === chosenMenuOption;

                return (
                    <MenuItem
                        key={option.id}
                        $isActive={isActive}
                        onClick={() => dispatch(selectMenuOption(option.id))}
                    >
                        {option.icon(isActive)}
                        {t(`sideMenu:${option.label}`)}
                    </MenuItem>
                );
            })}
        </Container>
    );
};

export default MenuOptions;
