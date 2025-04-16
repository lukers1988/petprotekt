import { MenuContainer, Logo } from "./styles/SideMenuStyled";
import { LogoIcon } from "@appComponents/Icons";
import { useTranslation } from "react-i18next";
import PetList from "@appComponents/app/MainPage/SideMenu/PetList";
import MenuOptions from "@appComponents/app/MainPage/SideMenu/MenuOptions";

const SideMenu = () => {
    const { t } = useTranslation();

    return (
        <MenuContainer>
            <Logo>
                <LogoIcon />
                {t("common:companyName")}
            </Logo>
            <PetList />
            <MenuOptions />
        </MenuContainer>
    );
};

export default SideMenu;
