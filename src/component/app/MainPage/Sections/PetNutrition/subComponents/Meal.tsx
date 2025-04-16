import { InfoText, InfoTextBold } from "@appComponents/common/Typography";
import { MealContainer } from "../styles/ScheduledMeals.styled";
import { RowLayout } from "@appComponents/styled/sharedStyles";
import { InputSwitch } from "primereact/inputswitch";
import { useState } from "react";

interface MealInterface {
    label: string;
    occurrence: string[];
    timeStamp: string;
}

const Meal = (props: MealInterface) => {
    const { label, occurrence, timeStamp } = props;

    const [enabled, setEnabled] = useState(true);
    return (
        <MealContainer>
            <InfoTextBold>{label}</InfoTextBold>
            <RowLayout>
                <InfoText>{occurrence.map((day) => `${day} `)}</InfoText>|
                <InfoText>20:00</InfoText>
                <InputSwitch
                    checked={enabled}
                    onChange={() => setEnabled((status) => !status)}
                />
            </RowLayout>
        </MealContainer>
    );
};

export default Meal;
