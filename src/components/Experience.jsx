import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import 'react-vertical-timeline-component/style.min.css';
import { styles } from '../styles';
import { experiences } from '../constants';
import { SectionWrapper } from '../hoc';
import { download, downloadHover, resume } from '../assets';
import { textVariant } from '../utils/motion';

const cardStyle = {
  background: 'linear-gradient(145deg, #f4f4f6 0%, #e6e6e9 100%)',
  color: '#292929',
  border: '1px solid rgba(255, 255, 255, 0.6)',
  borderRadius: '16px',
  boxShadow:
    'rgba(0, 0, 0, 0.12) 0px 18px 30px -12px, rgba(0, 0, 0, 0.06) 0px 4px 8px -2px',
};

const arrowStyle = { borderRight: '7px solid #e6e6e9' };

const ExperienceCard = ({ experience, title, date }) => (
  <VerticalTimelineElement
    contentStyle={cardStyle}
    contentArrowStyle={arrowStyle}
    date={
      <div>
        <h3 className="text-dim text-[18px] font-bold font-beckman">
          {date}
        </h3>
      </div>
    }
    iconStyle={{ background: experience.iconBg }}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        {experience.initials ? (
          <span className="text-timberWolf font-beckman font-bold text-[20px] tracking-[1px]">
            {experience.initials}
          </span>
        ) : (
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[60%] h-[60%] object-contain"
          />
        )}
      </div>
    }>
    <div>
      <h3 className="text-jetLight text-[22px] font-bold font-beckman tracking-[2px] leading-[1.2]">
        {title}
      </h3>
      <div className="mt-3 mb-2 h-[2px] w-8 bg-timberWolf" />
      <p
        className="text-taupe text-[18px] font-semibold tracking-[1px]"
        style={{ margin: 0 }}>
        {experience.url ? (
          <a
            href={experience.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1 transition-colors hover:text-eerieBlack">
            {experience.company_name}
            <span className="text-[14px] transition-transform duration-300 group-hover:-translate-y-[2px] group-hover:translate-x-[2px]">
              &#8599;
            </span>
          </a>
        ) : (
          experience.company_name
        )}
      </p>
    </div>
  </VerticalTimelineElement>
);

const Experience = () => {
  const { t } = useTranslation();

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} sm:pl-16 pl-[2rem]`}>
          {t('experience.eyebrow')}
        </p>
        <h2 className={`${styles.sectionHeadText} sm:pl-16 pl-[2rem]`}>
          {t('experience.title')}
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline className="vertical-timeline-custom-line">
          {experiences.map((experience) => (
            <ExperienceCard
              key={experience.key}
              experience={experience}
              title={t(`experience.items.${experience.key}.title`)}
              date={t(`experience.items.${experience.key}.date`)}
            />
          ))}
          <VerticalTimelineElement
            contentStyle={{
              ...cardStyle,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            contentArrowStyle={arrowStyle}
            iconStyle={{ background: '#333333' }}
            icon={
              <div className="flex justify-center items-center w-full h-full">
                <img
                  src={resume}
                  alt="resume"
                  className="w-[45%] h-[45%] object-contain"
                />
              </div>
            }>
            <button
              className="live-demo flex justify-center uppercase
              sm:text-[18px] text-[14px] text-timberWolf
              font-bold font-beckman items-center py-5 pl-3 pr-3
              whitespace-nowrap gap-3 sm:w-[148px] sm:h-[58px]
              w-[125px] h-[46px] rounded-[10px] bg-jetLight 
              sm:mt-[22px] mt-[16px] hover:bg-battleGray 
              hover:text-eerieBlack transition duration-[0.2s] 
              ease-in-out"
              onClick={() =>
                window.open(
                  'https://www.linkedin.com/in/renemarceau/',
                  '_blank'
                )
              }
              onMouseOver={() => {
                document
                  .querySelector('.download-btn')
                  .setAttribute('src', downloadHover);
              }}
              onMouseOut={() => {
                document
                  .querySelector('.download-btn')
                  .setAttribute('src', download);
              }}>
              {t('experience.cv')}
              <img
                src={download}
                alt="download"
                className="download-btn sm:w-[26px] sm:h-[26px] 
                w-[23px] h-[23px] object-contain"
              />
            </button>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, 'experience');
