import { NavigateFunction } from 'react-router';

export const scrollToDiv =
    (id: string, additionalEffectFn?: () => void, fallbackNavigation?: string) =>
    (navigate: NavigateFunction) => {
        const element = document.getElementById(id);

        if (element) {
            if (additionalEffectFn) {
                additionalEffectFn();
            }
            const top = element.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({ top, behavior: 'smooth' });
        } else if (fallbackNavigation) {
            if (additionalEffectFn) {
                additionalEffectFn();
            }
            navigate(`${fallbackNavigation}#${id}`);
        }
    };
