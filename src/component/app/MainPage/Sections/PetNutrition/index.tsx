import { Container } from "./styles/common";
import FoodJournal from "./subComponents/FoodJournal";
import FoodTiles from "./subComponents/FoodTiles";
import Recipes from "./subComponents/Recipes";
import ScheduledMeals from "./subComponents/ScheduledMeals";
import Tricks from "./subComponents/Tricks";

const PetNutrition = () => {
    return (
        <Container>
            <FoodTiles />
            <Recipes />
            <FoodJournal />
            <ScheduledMeals />
            <Tricks />
        </Container>
    );
};

export default PetNutrition;
