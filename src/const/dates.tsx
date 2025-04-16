import { CakeIcon, HomeIcon } from "@appComponents/Icons";
import { getYearsPassed } from "@appUtils/getYearsPassed";
import { TFunction } from "i18next";
import { ReactNode } from "react";
import { info } from "./colors";

export const datesConfig: {
    [key: string]: {
        translationKey: string;
        additionalContentFn?: (date: Date, t: TFunction) => string | undefined;
        icon: ReactNode;
    };
} = {
    birthday: {
        translationKey: "birthday",
        additionalContentFn: (date: Date, t: TFunction) => {
            const age = getYearsPassed(date);
            return age > 1
                ? `${getYearsPassed(date)} ${t("petProfile:yearsOld")}`
                : undefined;
        },
        icon: <CakeIcon color={info} />,
    },
    adoption: {
        translationKey: "adoption",
        icon: <HomeIcon color={info} />,
    },
};
