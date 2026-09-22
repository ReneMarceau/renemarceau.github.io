import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { BallCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';
import { styles } from '../styles';
import { textVariant } from '../utils/motion';

const Tech = () => {
  const { t } = useTranslation();

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubTextLight}>{t('tech.eyebrow')}</p>
        <h2 className={styles.sectionHeadTextLight}>{t('tech.title')}</h2>
      </motion.div>

      <div className="flex flex-wrap justify-center gap-x-10 gap-y-6 mt-14">
        {technologies.map((technology) => (
          <div
            className="group flex w-28 flex-col items-center"
            key={technology.name}>
            <div
              className="w-28 h-28 saturate-[0.15]"
              role="img"
              aria-label={technology.name}
              title={technology.name}>
              <BallCanvas icon={technology.icon} />
            </div>
            <p
              className="mt-1 font-poppins text-[11px] font-semibold uppercase
                tracking-[2px] text-taupe transition duration-300
                group-hover:text-timberWolf">
              {technology.name}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, '');
