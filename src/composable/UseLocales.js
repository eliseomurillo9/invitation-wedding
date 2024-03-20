
export const UseLocales = () => {
  const setLanguage = (lang) => {
    localStorage.setItem("locale", lang);
  };

  const getLanguage = () => {
    return localStorage.getItem("locale");
  };

  return {
    setLanguage,
    getLanguage,
  };
};
