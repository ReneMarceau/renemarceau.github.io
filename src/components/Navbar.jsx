import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { close, menu, logo } from '../assets';
import LanguageSwitcher from './LanguageSwitcher';

// The Arenq display font used by the mobile menu has no accented glyphs
const stripAccents = (text) =>
  text.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

const Navbar = () => {
  const { t } = useTranslation();
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-2 fixed
      top-0 z-20 xxs:h-[12vh] transition-all duration-500 ${
        scrolled
          ? 'bg-flashWhite/95 backdrop-blur-md shadow-[0_8px_30px_rgba(0,0,0,0.12)]'
          : 'bg-flashWhite sm:opacity-[0.97]'
      }`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive('');
            window.scrollTo(0, 0);
          }}>
          <img
            src={logo} // your logo comes here
            alt="logo"
            className="sm:w-[50px] sm:h-[50px] w-[45px] h-[45px] object-contain"
          />
        </Link>
        <div className="hidden sm:flex items-center gap-5 md:gap-8 lg:gap-12">
        <ul className="list-none flex flex-row gap-5 md:gap-8 lg:gap-14 mt-2">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.id ? 'text-french' : 'text-eerieBlack'
              } hover:text-taupe text-[14px] md:text-[17px] lg:text-[21px] whitespace-nowrap font-medium font-mova 
                uppercase tracking-[2px] md:tracking-[3px] cursor-pointer nav-links`}
              onClick={() => setActive(nav.id)}>
              <a href={`#${nav.id}`}>{t(`nav.${nav.id}`)}</a>
            </li>
          ))}
        </ul>
        <LanguageSwitcher />
        </div>

        {/* mobile */}
        <div className="sm:hidden flex flex-1 w-screen justify-end items-center gap-4">
          {toggle ? (
            <div
              className={`p-6 bg-flashWhite opacity-[0.98] absolute 
                top-0 left-0 w-screen h-[100vh] z-10 menu ${
                  toggle ? 'menu-open' : 'menu-close'
                }`}>
              <div className="flex justify-end">
                <img
                  src={close}
                  alt="close"
                  className="w-[22px] h-[22px] object-contain cursor-pointer"
                  onClick={() => setToggle(!toggle)}
                />
              </div>
              <ul
                className="list-none flex flex-col -gap-[1rem] 
                items-start justify-end mt-[8rem]">
                {navLinks.map((nav) => (
                  <li
                    id={nav.id}
                    key={nav.id}
                    className={`${
                      active === nav.id ? 'text-french' : 'text-eerieBlack'
                    } !ml-0 !text-[48px] xs:!text-[60px] !tracking-[1px] leading-[1.2] whitespace-nowrap font-bold font-arenq 
                      uppercase tracking-[1px] cursor-pointer`}
                    onClick={() => {
                      setToggle(!toggle);
                      setActive(nav.id);
                    }}>
                    <a href={`#${nav.id}`}>{stripAccents(t(`nav.${nav.id}`))}</a>
                  </li>
                ))}
              </ul>
              <LanguageSwitcher className="mt-12 w-fit" />
            </div>
          ) : (
            <>
            <LanguageSwitcher />
            <img
              src={menu}
              alt="menu"
              className="w-[34px] h-[34px] object-contain cursor-pointer"
              onClick={() => setToggle(!toggle)}
            />
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
