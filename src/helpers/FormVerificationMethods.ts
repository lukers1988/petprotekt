import { TFunction } from 'i18next';
import { includes, startsWith, endsWith } from 'ramda';

export const verifyEmailCompletion = (t: TFunction<'translation', undefined>, email: string) => {
    if (email && !includes('@', email)) {
        return t('errors:emailMissing@');
    } else if (startsWith('@', email) || endsWith('@', email)) {
        return t('errors:incompleteEmail');
    } else {
        return undefined;
    }
};
