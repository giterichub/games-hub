const useSmoothTransition = () => {
    const styleEl = document.createElement('style');
    const cssText = document.createTextNode(
    'html * { transition: color 0.1s, background-color 0.3s ease-out!important }',
    );
    styleEl.appendChild(cssText);
    document.head.appendChild(styleEl);
    setTimeout(() => {
    document.head.removeChild(styleEl);
    }, 300);
};
export default useSmoothTransition;