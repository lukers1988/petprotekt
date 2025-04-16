import {
    InfoHeader,
    InfoText,
    InfoTextBold,
} from "@appComponents/common/Typography";
import { GridContainer, RowLayout } from "@appComponents/styled/sharedStyles";
import { useTranslation } from "react-i18next";
import { Trick, VideoContainer } from "../styles/Tricks.styled";
import ReactPlayer from "react-player";
import DifficultyTiles from "@appComponents/common/DifficultyTiles";
import { ClockIcon } from "@appComponents/Icons";

const Tricks = () => {
    const { t } = useTranslation();

    // TODO - implement API call
    const tricks = [
        {
            url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
            label: "Lay down",
            difficulty: 0,
            minutesDuration: 3,
        },
        {
            url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
            label: "Fetch",
            difficulty: 1,
            minutesDuration: 5,
        },
        {
            url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
            label: "Roll Over",
            difficulty: 2,
            minutesDuration: 5,
        },
    ];

    return (
        <div>
            <InfoHeader>{t("recipes:learnNext")}</InfoHeader>
            <GridContainer columns={3}>
                {tricks.map((trick) => (
                    <Trick>
                        <VideoContainer>
                            <ReactPlayer
                                url={
                                    "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                                }
                                width={"100%"}
                                height={"120px"}
                            />
                        </VideoContainer>
                        <InfoTextBold>{trick.label}</InfoTextBold>
                        <DifficultyTiles difficultyLevel={trick.difficulty} />
                        <RowLayout>
                            <ClockIcon />
                            <InfoText>
                                <span
                                    style={{
                                        fontWeight: 600,
                                    }}
                                >
                                    {trick.minutesDuration}
                                </span>{" "}
                                {t("common:minutes")}
                            </InfoText>
                        </RowLayout>
                    </Trick>
                ))}
            </GridContainer>
        </div>
    );
};

export default Tricks;
