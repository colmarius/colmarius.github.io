import type { EducationProps, WorkExperienceProps } from '@types';

const LINKEDIN = 'https://www.linkedin.com/in/mariuscolacioiu/';

const MESSAGE = [
  'I started coding at a young age, initially for school projects having been in both middle school and high school in classes having Informatics in the curriculum.',
  'My big passion for programming developed during my Computer Science bachelor at the University of Milan, after doing advanced programming and security courses, and having discovering the open source movement and the Linux operating system.',
  'I got hooked on startups since 2012, after following one of this first YC Startup School online courses. Since then I have joined several startups as one of the first employees which got modest successes (either an exit or IPO). Very early in my career I got lucky and worked for Gild a company based in San Francisco, where I have done my onboarding and got contaminated with the Silicon Valley startup mindset.',
  'Since then I have always pushed myself to continue learning and find environments where I can learn and contribute the most. It gives me great joy being part of an amazing startup environment with great mission, team and culture.',
];

const WORK_EXPERIENCE: WorkExperienceProps[] = [
  {
    period: '2019 - Present',
    title: 'Engineering Leader',
    company: 'Ledgy AG',
    link: 'https://ledgy.com/',
  },
  {
    period: '2018 - 2019',
    title: 'Full Stack Engineer',
    company: 'On AG',
    link: 'https://www.crunchbase.com/organization/on-ag',
  },
  {
    period: '2016 - 2018',
    title: 'Engineering Team Lead',
    company: 'XING',
    link: 'https://www.crunchbase.com/organization/xing',
  },
  {
    period: '2015 - 2016',
    title: 'Lead Software Engineer',
    company: 'BuddyBroker AG',
    link: 'https://www.crunchbase.com/organization/buddy-broker',
  },
  {
    period: '2013 - 2015',
    title: 'Frontend Software Engineer',
    company: 'Gild',
    link: 'https://www.crunchbase.com/organization/gild',
  },
];

const EDUCATION: EducationProps[] = [
  {
    period: 'Graduated in 2012 cum laude',
    title: 'Master in Computer Science',
    university: 'University of Milan, Italy',
  },
  {
    period: 'Graduated in 2008',
    title: 'Bachelor in Computer Science',
    university: 'University of Milan, Italy',
  },
];

export const ABOUT_ME = Object.freeze({
  LINKEDIN,
  MESSAGE,
  WORK_EXPERIENCE,
  EDUCATION,
});
