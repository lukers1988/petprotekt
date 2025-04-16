import { lightBlue } from "@appConst/colors";
import ExpandingTile from "../../shared/ExpandingTile";
import { useTranslation } from "react-i18next";
import { DogFoodCan } from "@appComponents/Images";

const FoodJournal = () => {
    const { t } = useTranslation();

    return (
        <ExpandingTile
            color={lightBlue}
            label={t("recipes:foodJournal")}
            icon={<DogFoodCan />}
        >
            <div>123</div>
        </ExpandingTile>
    );
};

export default FoodJournal;
