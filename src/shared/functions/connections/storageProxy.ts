export const setItemStorege = (key: string, value: string) => localStorage.setItem(key, value);

export const removeItemStorege = (key: string) => localStorage.removeItem(key);

export const getItemStorege = (key: string) => localStorage.getItem(key);
