import { PageContainer, SectionWrapper } from "./styles";
import SideMenu from "@appComponents/app/MainPage/SideMenu";
import PetProfile from "@appComponents/app/MainPage/Sections/PetProfile";
import PetNutrition from "@appComponents/app/MainPage/Sections/PetNutrition";
import Activities from "./Sections/Activities";

const MainPage = () => {
    return (
        <PageContainer>
            <SideMenu />
            <SectionWrapper>
                <PetProfile />
                <PetNutrition />
                <Activities />
            </SectionWrapper>
        </PageContainer>
    );
};

export default MainPage;
