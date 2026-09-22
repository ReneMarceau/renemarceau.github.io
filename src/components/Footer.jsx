import { useTranslation } from 'react-i18next';
import { styles } from '../styles';
import { logo } from '../assets';
import { contactLinks, navLinks } from '../constants';
import { OutlineWordmark } from './Decor';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="relative overflow-hidden border-t border-[rgba(255,255,255,0.08)] bg-night">
      <OutlineWordmark
        className="bottom-[-0.22em] left-1/2 -translate-x-1/2 text-[12.5vw]
          opacity-[0.12]">
        RENE MARCEAU
      </OutlineWordmark>

      <div
        className={`${styles.paddingX} relative z-10 mx-auto flex max-w-7xl
          flex-col gap-10 pb-[10vw] pt-14 lg:flex-row lg:items-start
          lg:justify-between`}>
        <div className="flex items-center gap-4">
          <img src={logo} alt="logo" className="h-11 w-11 object-contain invert" />
          <div>
            <p className="font-beckman text-[18px] font-bold uppercase tracking-[1px] text-timberWolf">
              {t('footer.name')}
            </p>
            <p className="font-poppins text-[12px] uppercase tracking-[2px] text-taupe">
              {t('footer.tagline')}
            </p>
          </div>
        </div>

        <nav className="flex gap-16">
          <ul className="flex flex-col gap-2">
            {navLinks.map((nav) => (
              <li key={nav.id}>
                <a
                  href={`#${nav.id}`}
                  className="whitespace-nowrap font-mova text-[15px] uppercase tracking-[2px]
                    text-taupe transition-colors hover:text-timberWolf">
                  {t(`nav.${nav.id}`)}
                </a>
              </li>
            ))}
          </ul>
          <ul className="flex flex-col gap-2">
            {contactLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target={link.href.startsWith('mailto:') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  className="whitespace-nowrap font-mova text-[15px] uppercase tracking-[2px]
                    text-taupe transition-colors hover:text-timberWolf">
                  {link.label} &#8599;
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex flex-col gap-3 lg:items-end">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="group glassmorphism flex h-11 w-fit items-center gap-2 whitespace-nowrap uppercase
              rounded-[10px] px-4 font-beckman text-[13px] font-bold
              text-timberWolf transition duration-[0.2s]
              hover:bg-battleGray hover:text-eerieBlack">
            {t('footer.backToTop')}
            <span className="transition-transform duration-300 group-hover:-translate-y-[2px]">
              &uarr;
            </span>
          </a>
          <p className="font-poppins text-[12px] tracking-[1px] text-jetGray">
            © {new Date().getFullYear()} {t('footer.name')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
