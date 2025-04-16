import { replace, toUpper } from "ramda";

export const capitalize = replace(/^./, (s) => toUpper(s));
