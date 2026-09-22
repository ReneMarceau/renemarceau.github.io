import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { styles } from '../styles';
import { services, stats, yearsOfExperience } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <motion.div
      variants={fadeIn('', 'tween', 0.15 * index, 0.8)}
      className="group panel-dark panel-dark-hover relative flex min-h-[250px]
        flex-col justify-between overflow-hidden rounded-[20px] p-7">
      <div className="flex items-start justify-between">
        <div
          className="glassmorphism flex h-[64px] w-[64px] items-center
            justify-center rounded-full transition duration-300
            group-hover:rotate-[-8deg]">
          <img src={icon} alt="" className="h-1/2 w-1/2 object-contain" />
        </div>
        <span
          aria-hidden="true"
          className="text-outline select-none font-poppins text-[44px]
            font-black leading-none opacity-70 transition duration-500
            group-hover:opacity-100">
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>

      <div>
        <div
          className="mb-4 h-[2px] w-10 bg-taupe transition-all duration-500
            group-hover:w-20 group-hover:bg-timberWolf"
        />
        <h3
          className="min-h-[78px] font-beckman text-[19px] font-bold uppercase leading-snug
            tracking-[1px] text-timberWolf">
          {title}
        </h3>
      </div>
    </motion.div>
  );
};

const About = () => {
  const { t } = useTranslation();
  const duration = t('about.duration', { count: yearsOfExperience() });

  return (
    <div className="-mt-[6rem]">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>{t('about.eyebrow')}</p>
        <h2 className={styles.sectionHeadText}>{t('about.title')}</h2>
      </motion.div>

      <div className="mt-4 flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className="text-taupe text-[18px] max-w-3xl leading-[30px]">
          {t('about.body', { duration })}
        </motion.p>

        <motion.dl
          variants={fadeIn('', 'tween', 0.3, 1)}
          className="grid grid-cols-3 gap-4 border-t border-timberWolf pt-6
            lg:grid-cols-1 lg:gap-6 lg:border-t-0 lg:border-l lg:pl-10 lg:pt-0">
          {stats.map((stat) => (
            <div key={stat}>
              <dt className="sr-only">{t(`about.stats.${stat}.label`)}</dt>
              <dd
                className="font-poppins font-black leading-none text-eerieBlack
                  text-[34px] sm:text-[44px]">
                {t(`about.stats.${stat}.value`, { duration })}
              </dd>
              <dd
                className="mt-1 font-poppins text-[11px] font-semibold uppercase
                  tracking-[1.5px] text-taupe sm:text-[13px]">
                {t(`about.stats.${stat}.label`)}
              </dd>
            </div>
          ))}
        </motion.dl>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-6 xs:grid-cols-2 lg:grid-cols-4">
        {services.map((service, index) => (
          <ServiceCard
            key={service.key}
            index={index}
            icon={service.icon}
            title={t(`about.services.${service.key}`)}
          />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, 'about');
