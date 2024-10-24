export const debounce = (func: (...args: string[]) => void, delay: number) => {
  let timeoutId: ReturnType<typeof setTimeout>;

  return (...args: string[]) => {
    if (timeoutId) clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  };
};
