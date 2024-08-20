import flagPl from '@appImages/flags/pl.png';
import flagEn from '@appImages/flags/en.png';

export const fallbackLanguage = {
  id: 'en-En',
  flag: flagEn
};

const languages = [
  {
    id: 'pl-PL',
    flag: flagPl
  },
  fallbackLanguage
];

export default languages;
