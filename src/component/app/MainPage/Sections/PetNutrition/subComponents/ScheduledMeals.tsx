import { InfoHeader } from "@appComponents/common/Typography";
import { useTranslation } from "react-i18next";
import Meal from "./Meal";

const ScheduledMeals = () => {
    const { t } = useTranslation();

    // TODO - implement API call
    const meals = [
        {
            label: "Breakfast",
            occurrence: ["everyday"],
            timestamp: "10:00",
        },
        {
            label: "Dinner",
            occurrence: ["everyday"],
            timestamp: "20:00",
        },
    ];

    return (
        <div>
            <InfoHeader>{t("recipes:scheduledMeals")}</InfoHeader>
            {meals.map((meal) => (
                <Meal
                    label={meal.label}
                    occurrence={meal.occurrence}
                    timeStamp={meal.timestamp}
                />
            ))}
        </div>
    );
};

export default ScheduledMeals;
