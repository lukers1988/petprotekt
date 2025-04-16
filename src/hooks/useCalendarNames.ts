import { useChosenLanguage } from "./useChosenLanguage";

export const useCalendarNames = () => {
    const { chosenLanguage } = useChosenLanguage();

    const getMonthName = (index: number) => {
        if (index < 0 || index > 11) {
            throw new Error(
                "Month index must be between 0 (January) and 11 (December)."
            );
        }

        const date = new Date(2000, index);
        return new Intl.DateTimeFormat(chosenLanguage.id, {
            month: "long",
        }).format(date);
    };

    return { getMonthName };
};
