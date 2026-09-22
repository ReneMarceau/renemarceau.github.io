import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
// TODO: Re-import when project repos/demos are ready: pineapple, pineappleHover
import { github } from '../assets';
import { ContribGrid, OutlineWordmark } from './Decor';
import { projects } from '../constants';
import { fadeIn, textVariant, staggerContainer } from '../utils/motion';

const ProjectCard = ({
  id,
  name,
  description,
  image,
  tags,
  index,
  active,
  handleClick,
}) => {
  return (
    <motion.div
      variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
      className={`relative ${
        active === id ? 'lg:flex-[3.5] flex-[10]' : 'lg:flex-[0.5] flex-[2]'
      } flex items-center justify-center min-w-[170px]
      h-[420px] cursor-pointer card-shadow`}
      onClick={() => handleClick(id)}>
      <div
        className="absolute top-0 left-0 z-10 bg-jetLight 
      h-full w-full opacity-[0.5] rounded-[24px]"></div>

      <img
        src={image}
        alt={name}
        className="absolute w-full h-full object-cover rounded-[24px] saturate-[0.15]"
      />

      {active !== id ? (
        <div className="flex items-center justify-start pr-[4.5rem]">
          <h3
            className="font-extrabold font-beckman uppercase w-[200px] h-[30px] 
        whitespace-nowrap sm:text-[27px] text-[18px] text-timberWolf tracking-[1px]
        absolute z-0 lg:bottom-[7rem] lg:rotate-[-90deg] lg:origin-[0,0]
        leading-none z-20">
            {name}
          </h3>
        </div>
      ) : (
        <>
          <span
            aria-hidden="true"
            className="text-outline absolute top-5 left-7 z-20 select-none
              font-poppins font-black leading-none text-[56px] sm:text-[72px]">
            {String(index + 1).padStart(2, '0')}
          </span>

          <div
            className="absolute bottom-0 p-8 sm:pt-24 pt-16 justify-start w-full
            flex-col rounded-b-[24px] z-20 bg-gradient-to-t
            from-[rgba(20,20,20,0.95)] via-[rgba(20,20,20,0.75)] to-transparent">
            <div className="absolute inset-0 flex justify-end m-3">
              {/* TODO: Re-enable GitHub link when project repos are ready */}
              {/* <div
                onClick={() => window.open(repo, '_blank')}
                className="bg-night sm:w-11 sm:h-11 w-10 h-10 rounded-full
                  flex justify-center items-center cursor-pointer
                  sm:opacity-[0.9] opacity-[0.8]">
                <img
                  src={github}
                  alt="source code"
                  className="w-4/5 h-4/5 object-contain"
                />
              </div> */}
            </div>

            <h2
              className="font-bold sm:text-[32px] text-[24px] 
              text-timberWolf uppercase font-beckman sm:mt-0 -mt-[1rem]">
              {name}
            </h2>
            <p
              className="text-silver sm:text-[14px] text-[12px] 
              max-w-3xl sm:leading-[24px] leading-[18px]
              font-poppins tracking-[1px]">
              {description}
            </p>
            {tags?.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag.name}
                    className="glassmorphism rounded-full px-3 py-1 font-poppins
                      text-[11px] font-medium uppercase tracking-[1.5px]
                      text-timberWolf sm:text-[12px]">
                    {tag.name}
                  </span>
                ))}
              </div>
            )}
            {/* TODO: Re-enable demo button when project demos are ready */}
            {/* <button
              className="live-demo flex justify-between
              sm:text-[16px] text-[14px] text-timberWolf
              font-bold font-beckman items-center py-5 pl-2 pr-3
              whitespace-nowrap gap-1 sm:w-[138px] sm:h-[50px]
              w-[125px] h-[46px] rounded-[10px] glassmorphism
              sm:mt-[22px] mt-[16px] hover:bg-battleGray
              hover:text-eerieBlack transition duration-[0.2s]
              ease-in-out"
              onClick={() => window.open(demo, '_blank')}
              onMouseOver={() => {
                document
                  .querySelector('.btn-icon')
                  .setAttribute('src', pineappleHover);
              }}
              onMouseOut={() => {
                document
                  .querySelector('.btn-icon')
                  .setAttribute('src', pineapple);
              }}>
              <img
                src={pineapple}
                alt="pineapple"
                className="btn-icon sm:w-[34px] sm:h-[34px]
                  w-[30px] h-[30px] object-contain"
              />
              DEMO
            </button> */}
          </div>
        </>
      )}
    </motion.div>
  );
};

const GITHUB_URL = 'https://github.com/ReneMarceau';

const GithubCard = () => {
  const { t } = useTranslation();

  return (
    <motion.a
      href={GITHUB_URL}
      target="_blank"
      rel="noopener noreferrer"
      variants={fadeIn('', 'tween', 0.3, 1)}
      className="group panel-dark panel-dark-hover relative mt-10 block
        overflow-hidden rounded-[24px]">
      <div
        className="pointer-events-none absolute inset-y-0 right-0 flex items-center
          pr-6 opacity-40 transition duration-500 group-hover:opacity-70
          [mask-image:linear-gradient(to_left,transparent,black_25%,black_55%,transparent)]">
        <ContribGrid />
      </div>

      <OutlineWordmark
        className="-bottom-7 left-[38%] text-[120px] opacity-20 sm:text-[170px]
          group-hover:opacity-40">
        GITHUB
      </OutlineWordmark>

      <div
        className="relative z-10 flex flex-col gap-6 p-8 sm:p-12
          md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-6">
          <div
            className="glassmorphism flex h-[72px] w-[72px] shrink-0 items-center
              justify-center rounded-full sm:h-[88px] sm:w-[88px]
              transition duration-300 group-hover:rotate-[-8deg]">
            <img src={github} alt="GitHub" className="h-3/5 w-3/5 object-contain" />
          </div>
          <div>
            <p className={styles.sectionSubTextLight}>{t('projects.github.eyebrow')}</p>
            <h3
              className="font-beckman font-bold uppercase text-timberWolf
                sm:text-[34px] text-[22px] leading-tight tracking-[1px]">
              {t('projects.github.title')}
            </h3>
            <p className="mt-1 font-poppins text-[14px] tracking-[1px] text-silver sm:text-[16px]">
              github.com/<span className="font-semibold text-white-100">ReneMarceau</span>
            </p>
          </div>
        </div>

        <span
          className="glassmorphism flex h-[50px] w-fit shrink-0 items-center gap-3
            self-start rounded-[10px] px-5 font-beckman font-bold uppercase
            text-[14px] text-timberWolf whitespace-nowrap sm:h-[58px]
            sm:text-[18px] md:self-auto transition duration-[0.2s] ease-in-out
            group-hover:bg-battleGray group-hover:text-eerieBlack">
          {t('projects.github.cta')}
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            &rarr;
          </span>
        </span>
      </div>
    </motion.a>
  );
};

const Projects = () => {
  const { t } = useTranslation();
  const [active, setActive] = useState('project-1');

  return (
    <div className="-mt-[6rem]">
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>{t('projects.eyebrow')}</p>
        <h2 className={`${styles.sectionHeadTextLight}`}>{t('projects.title')}</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px]">
          {t('projects.intro')}
        </motion.p>
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}>
        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] lg:min-h-0 gap-5">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              index={index}
              {...project}
              description={t(`projects.items.${project.key}`)}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>

        <GithubCard />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Projects, 'projects');
