import { differenceInYears } from "date-fns";

export const getYearsPassed = (fromDate: Date) =>
    differenceInYears(new Date(), fromDate);
