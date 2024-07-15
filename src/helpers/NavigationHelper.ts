export const scrollToDiv = (id: string, additionalEffectFn?: () => void) => {
    const element = document.getElementById(id);
    if (element) {
        if (additionalEffectFn) {
            additionalEffectFn();
        }
        const top = element.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({ top, behavior: 'smooth' });
    }
};
