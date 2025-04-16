import languages, { fallbackLanguage } from "@appConst/languages";
import { useTranslation } from "react-i18next";

export const useChosenLanguage = () => {
    const { i18n } = useTranslation();
    const chosenLanguage =
        languages.find((language) => language.id === i18n.language) ||
        fallbackLanguage;

    return { chosenLanguage };
};
