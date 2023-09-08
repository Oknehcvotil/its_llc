import { EnBtn, LanguageCont, UaBtn } from "./LanguageSwitch.styled";
import { useDispatch, useSelector } from "react-redux";
import { selectLanguage } from "../../redux/languageSlice/selector";
import { setLanguage } from "../../redux/languageSlice/languageSlice";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const LanguageSwitch = () => {
  const language = useSelector(selectLanguage);
  const dispatch = useDispatch();
  const { i18n } = useTranslation();

  const handleLanguageChange = (selectedLanguage) => {
    dispatch(setLanguage(selectedLanguage));
  };

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language, i18n]);

  return (
    <LanguageCont>
      <UaBtn
        type="button"
        onClick={() => handleLanguageChange("ua")}
        className={`${language === "ua" ? "active" : ""}`}
      />
      <EnBtn
        type="button"
        onClick={() => handleLanguageChange("en")}
        className={`${language === "en" ? "active" : ""}`}
      />
    </LanguageCont>
  );
};

export default LanguageSwitch;
