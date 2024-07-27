export const scrollToDiv = (
    id: string,
    additionalEffectFn?: () => void,
    fallbackNavigation?: string
) => {
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
        window.location.href = `${fallbackNavigation}#${id}`;
    }
};
