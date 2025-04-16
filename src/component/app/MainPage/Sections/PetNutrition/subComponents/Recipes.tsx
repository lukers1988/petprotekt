import { InfoText, InfoTextBold } from "@appComponents/common/Typography";
import { Recipe, RecipeImage, AddRecipe } from "../styles/Recipes.styled";
import { GridContainer } from "@appComponents/styled/sharedStyles";
import { PlusIcon } from "@appComponents/Icons";
import { info, orange } from "@appConst/colors";
import { faker } from "@faker-js/faker";
import { useTranslation } from "react-i18next";
import ExpandingTile from "@appComponents/app/MainPage/Sections/shared/ExpandingTile";
import { DogFoodBowl } from "@appComponents/Images";

const Recipes = () => {
    const { t } = useTranslation();

    // TODO - implement API call
    const recipes = [
        {
            imageUrl: faker.image.urlPicsumPhotos(),
            label: faker.food.dish(),
        },
        {
            imageUrl: faker.image.urlPicsumPhotos(),
            label: faker.food.dish(),
        },
        {
            imageUrl: faker.image.urlPicsumPhotos(),
            label: faker.food.dish(),
        },
    ];

    return (
        <ExpandingTile
            color={orange}
            label={t("recipes:recipes")}
            icon={<DogFoodBowl />}
        >
            <GridContainer columns={3}>
                {recipes.map((recipe) => (
                    <Recipe>
                        <RecipeImage src={recipe.imageUrl} />
                        <InfoTextBold>{recipe.label}</InfoTextBold>
                    </Recipe>
                ))}
            </GridContainer>
            <AddRecipe>
                <PlusIcon color={info} />
                <InfoText>{t("recipes:addRecipes")}</InfoText>
            </AddRecipe>
        </ExpandingTile>
    );
};

export default Recipes;
