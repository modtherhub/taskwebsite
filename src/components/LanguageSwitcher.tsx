import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  // Determine initial state based on current language
  const [isArabic, setIsArabic] = useState(i18n.language === 'ar');

  const handleToggle = () => {
    const newLang = isArabic ? 'en' : 'ar';
    i18n.changeLanguage(newLang);
    setIsArabic(!isArabic);
  };

  // Optional: Keep toggle state in sync when language changes externally
  useEffect(() => {
    setIsArabic(i18n.language === 'ar');
  }, [i18n.language]);

  return (
    <div className="inline-flex items-center gap-2">
      <label htmlFor="lang-toggle" className="text-slate-600 text-sm cursor-pointer">EN</label>

      <div className="relative inline-block w-11 h-5">
        <input
          id="lang-toggle"
          type="checkbox"
          checked={isArabic}
          onChange={handleToggle}
          className="peer appearance-none w-11 h-5 bg-slate-100 rounded-full checked:bg-slate-800 cursor-pointer transition-colors duration-300"
        />
        <label
          htmlFor="lang-toggle"
          className="absolute top-0 left-0 w-5 h-5 bg-white rounded-full border border-slate-300 shadow-sm transition-transform duration-300 peer-checked:translate-x-6 peer-checked:border-slate-800 cursor-pointer"
        />
      </div>

      <label htmlFor="lang-toggle" className="text-slate-600 text-sm cursor-pointer">AR</label>
    </div>
  );
};

export default LanguageSwitcher;
