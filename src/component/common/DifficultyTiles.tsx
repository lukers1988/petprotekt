import { advanced, beginner, intermediate } from "@appConst/colors";
import { InfoText } from "./Typography";

const DifficultyTiles = ({ difficultyLevel }: { difficultyLevel: number }) => {
    const DifficultyStyleMap: Record<number, { label: string; color: string }> =
        {
            0: {
                label: "Beginner",
                color: beginner,
            },
            1: {
                label: "Intermediate",
                color: intermediate,
            },
            2: {
                label: "Advanced",
                color: advanced,
            },
        };

    const difficultyProps = DifficultyStyleMap[difficultyLevel];

    if (!difficultyProps) return;
    const { label, color } = difficultyProps;

    return (
        <div
            style={{
                color,
                backgroundColor: `${color}30`,
                display: "flex",
                padding: "5px",
                borderRadius: "8px",
                width: "fit-content",
                fontSize: "14px",
                fontWeight: 600,
            }}
        >
            {label}
        </div>
    );
};

export default DifficultyTiles;
