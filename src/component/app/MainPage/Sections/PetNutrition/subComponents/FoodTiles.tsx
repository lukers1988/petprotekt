import { faker } from "@faker-js/faker";
import { FoodImage, FoodItem } from "../styles/FoodTiles.styled";
import { InfoTextBold } from "@appComponents/common/Typography";
import { GridContainer } from "@appComponents/styled/sharedStyles";

const FoodTiles = () => {
    // TODO - implement API call
    const foodList = [
        {
            imageUrl: faker.image.urlPicsumPhotos(),
            label: faker.commerce.productName(),
        },
        {
            imageUrl: faker.image.urlPicsumPhotos(),
            label: faker.commerce.productName(),
        },
    ];

    return (
        <GridContainer columns={2}>
            {foodList.map((food) => (
                <FoodItem>
                    <FoodImage src={food.imageUrl} />
                    <InfoTextBold>{food.label}</InfoTextBold>
                </FoodItem>
            ))}
        </GridContainer>
    );
};

export default FoodTiles;
