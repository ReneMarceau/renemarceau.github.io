import { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
// TODO: Re-import when project repos/demos are ready: pineapple, pineappleHover
import { github } from '../assets';
import { projects } from '../constants';
import { fadeIn, textVariant, staggerContainer } from '../utils/motion';

const ProjectCard = ({
  id,
  name,
  description,
  image,
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
          <div
            className="absolute bottom-0 p-8 justify-start w-full 
            flex-col bg-[rgba(122,122,122,0.5)] rounded-b-[24px] z-20">
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

// Decorative contribution-style grid, deterministic so it stays stable between renders
const CONTRIB_WEEKS = 26;
const contribCells = Array.from({ length: CONTRIB_WEEKS * 7 }, (_, i) => {
  const v = Math.abs(Math.sin(i * 12.9898) * 43758.5453) % 1;
  return v > 0.82 ? 4 : v > 0.62 ? 3 : v > 0.4 ? 2 : v > 0.22 ? 1 : 0;
});
const contribShades = [
  'bg-[rgba(255,255,255,0.04)]',
  'bg-[rgba(255,255,255,0.1)]',
  'bg-[rgba(255,255,255,0.2)]',
  'bg-[rgba(255,255,255,0.35)]',
  'bg-[rgba(255,255,255,0.55)]',
];

const GithubCard = () => (
  <motion.a
    href={GITHUB_URL}
    target="_blank"
    rel="noopener noreferrer"
    variants={fadeIn('', 'tween', 0.3, 1)}
    className="group relative mt-10 block overflow-hidden rounded-[24px]
      bg-gradient-to-br from-jet via-night to-night card-shadow
      transition duration-500 hover:shadow-[0_0_40px_rgba(155,155,155,0.25)]">
    {/* Contribution grid backdrop */}
    <div
      className="pointer-events-none absolute inset-y-0 right-0 flex items-center
        pr-6 opacity-40 transition duration-500 group-hover:opacity-70
        [mask-image:linear-gradient(to_left,transparent,black_25%,black_55%,transparent)]">
      <div className="grid grid-flow-col grid-rows-[repeat(7,11px)] gap-[5px]">
        {contribCells.map((level, i) => (
          <span
            key={i}
            className={`block h-[11px] w-[11px] rounded-[3px] ${contribShades[level]}`}
          />
        ))}
      </div>
    </div>

    {/* Oversized outline wordmark */}
    <span
      className="pointer-events-none absolute -bottom-7 left-[38%] select-none
        font-overcameOutline text-[120px] leading-none text-jetGray opacity-20
        sm:text-[170px] transition duration-500 group-hover:opacity-40">
      GITHUB
    </span>

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
          <p className={styles.sectionSubTextLight}>Open source</p>
          <h3
            className="font-beckman font-bold uppercase text-timberWolf
              sm:text-[34px] text-[24px] leading-tight tracking-[1px]">
            Le code derriere les projets
          </h3>
          <p className="mt-1 font-poppins text-[14px] tracking-[1px] text-silver sm:text-[16px]">
            github.com/<span className="font-semibold text-white-100">ReneMarceau</span>
          </p>
        </div>
      </div>

      <span
        className="flex h-[50px] w-fit shrink-0 items-center gap-3 self-start
          rounded-[10px] glassmorphism px-5 font-beckman font-bold
          text-[14px] text-timberWolf whitespace-nowrap sm:h-[58px]
          sm:text-[18px] md:self-auto transition duration-[0.2s] ease-in-out
          group-hover:bg-battleGray group-hover:text-eerieBlack">
        VOIR MON GITHUB
        <span className="transition-transform duration-300 group-hover:translate-x-1">
          &rarr;
        </span>
      </span>
    </div>
  </motion.a>
);

const Projects = () => {
  const [active, setActive] = useState('project-1');

  return (
    <div className="-mt-[6rem]">
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>Ce que je construis</p>
        <h2 className={`${styles.sectionHeadTextLight}`}>Projets.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px]">
          Des problemes reels, des solutions IA en production. Voici une
          selection de projets qui illustrent mon approche.
        </motion.p>
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}>
        <div className="mt-[50px] flex lg:flex-row flex-col gap-5">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              index={index}
              {...project}
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
