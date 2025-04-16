import { InfoHeader, InfoText } from "@appComponents/common/Typography";
import { EditButton, PetImage } from "../styles/BasicInfoStyled";
import { useActivePetData } from "../hooks/useActivePetDate";
import { EditIcon } from "@appComponents/Icons";
import { info } from "@appConst/colors";
import { RowLayout } from "@appComponents/styled/sharedStyles";

const BasicInfo = () => {
    const { activePet } = useActivePetData();

    if (!activePet) return;

    return (
        <RowLayout>
            <PetImage src={activePet.imageUrl} />
            <div>
                <RowLayout>
                    <InfoHeader>{activePet.name}</InfoHeader>
                    <EditButton>
                        <EditIcon color={info} />
                    </EditButton>
                </RowLayout>
                <InfoText>
                    {activePet.race} | {activePet.breed}
                </InfoText>
            </div>
        </RowLayout>
    );
};

export default BasicInfo;
