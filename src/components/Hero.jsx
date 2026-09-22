import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { styles } from '../styles';
import { rene, bwmap, worldmap } from '../assets';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="absolute top-0 left-0 z-0 h-[100vh] w-screen">
        <img
          src={bwmap}
          alt="world map"
          className="w-full h-full sm:block hidden object-cover"
        />
      </div>
      <div className="absolute top-0 left-0 z-0 h-[100vh] w-screen">
        <img
          src={worldmap}
          alt="world map"
          className="w-full h-full sm:hidden block object-cover"
        />
      </div>
      <section
        className="relative flex sm:flex-row flex-col w-full h-screen mx-auto 
        sm:bg-hero bg-hero-mobile overflow-hidden">
        <div
          className={`absolute inset-0 sm:top-[140px] top-[110px]
          lg:top-[150px] xl:top-[220px] ${styles.paddingX} 
          max-w-7xl mx-auto flex flex-row items-start
          justify-between gap-3`}>
          <div className="flex flex-col justify-center items-center mt-5 ml-3">
            <div className="w-5 h-5 rounded-full bg-[#0a0a0a] sm:hidden" />
            <div className="w-1 sm:h-80 h-40 bw-gradient sm:hidden" />
          </div>

          <motion.div
            className="lg:w-[540px] lg:shrink-0 xl:w-[600px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}>
            <h1
              className={`${styles.heroHeadText} text-eerieBlack font-poppins uppercase`}>
              {t('hero.greeting')}{' '}
              <span
                className="sm:text-battleGray sm:text-[80px]
                text-eerieBlack text-[50px] font-mova
                font-extrabold uppercase">
                {t('hero.name')}
              </span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-eerieBlack sm:max-md:max-w-[340px] sm:max-md:!text-[20px]`}>
              {t('hero.role')} <br className="sm:block hidden" />
              {t('hero.tagline')}
            </p>

            <div className="mt-6 flex flex-col items-start gap-3 xs:flex-row sm:mt-8 sm:gap-4">
              <a
                href="#projects"
                className="group flex h-[44px] items-center gap-2 whitespace-nowrap
                  rounded-[10px] bg-eerieBlack px-4 font-beckman text-[12px] font-bold uppercase
                  text-timberWolf transition duration-[0.2s] ease-in-out
                  hover:bg-battleGray hover:text-eerieBlack sm:h-[56px]
                  sm:gap-3 sm:px-6 sm:text-[17px]">
                {t('hero.ctaProjects')}
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  &rarr;
                </span>
              </a>
              <a
                href="#contact"
                className="flex h-[44px] items-center whitespace-nowrap rounded-[10px]
                  border-2 border-eerieBlack bg-flashWhite px-4 font-beckman
                  text-[12px] font-bold uppercase
                  text-eerieBlack transition duration-[0.2s] ease-in-out
                  hover:bg-eerieBlack hover:text-timberWolf sm:h-[56px]
                  sm:px-6 sm:text-[17px]">
                {t('hero.ctaContact')}
              </a>
            </div>
          </motion.div>
          <div
            className="w-screen flex flex-col items-start 
            justify-center sm:-ml-[3rem] xxs:mt-4"></div>

          <div></div>
        </div>

        <div
          className="absolute xs:bottom-10 bottom-32 w-full
          lg:flex hidden justify-center items-center">
          <a href="#about">
            <div
              className="w-[35px] h-[64px] rounded-3xl border-4 
            border-french border-dim flex
            justify-center items-start p-2">
              <motion.div
                animate={{
                  y: [0, 24, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: 'loop',
                }}
                className="w-3 h-3 rounded-full bg-taupe mb-1"
              />
            </div>
          </a>
        </div>

        {/* Your image comes here. Feel free to remove image if you don't plan to have one.*/}
        <div>
          <img
            className="absolute bottom-0 ml-[50vw] 
            lg:ml-[65vw] md:ml-[60vw] xmd:ml-[60vw] 2xl:ml-[73vw] sm:ml-[60vw] 
            sm:h-[60vh] md:h-[70vh] xl:h-[80vh]"
            src={rene}
            alt="rene marceau"
          />
        </div>
      </section>
    </>
  );
};

export default Hero;
