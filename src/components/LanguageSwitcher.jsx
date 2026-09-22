import { useTranslation } from 'react-i18next';
import { languages } from '../i18n';

const LanguageSwitcher = ({ className = '' }) => {
  const { t, i18n } = useTranslation();
  const current = i18n.resolvedLanguage;

  return (
    <div
      role="group"
      aria-label={t('language.switch')}
      className={`flex items-center rounded-full border-2 border-eerieBlack p-[3px] ${className}`}>
      {languages.map((lng) => (
        <button
          key={lng}
          type="button"
          lang={lng}
          aria-pressed={current === lng}
          onClick={() => i18n.changeLanguage(lng)}
          className={`rounded-full px-3 py-1 font-mova text-[14px] font-bold uppercase
            tracking-[2px] transition duration-300 ${
              current === lng
                ? 'bg-eerieBlack text-timberWolf'
                : 'text-eerieBlack hover:text-taupe'
            }`}>
          {lng}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
