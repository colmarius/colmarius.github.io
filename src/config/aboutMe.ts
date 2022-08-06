import type { Education, WorkExperience } from '@types';

const LINKEDIN = 'https://www.linkedin.com/in/mariuscolacioiu/';

const MESSAGE = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vulputate id diam dapibus interdum. Nam et odio a augue cursus blandit. Nullam mollis lacus augue, in efficitur nisl scelerisque a. Aenean sodales dictum turpis id finibus.',
  'Nunc aliquet, nulla et faucibus tristique, nisi nisi eleifend sapien, eu porta urna justo vel ex. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vestibulum eros sapien, lacinia et maximus vitae, mattis nec sapien. Vestibulum semper suscipit elit, eget sodales libero accumsan sed.',
  'Donec luctus consectetur risus ac sagittis. Praesent dui felis, sodales a cursus ac, pharetra sit amet erat. Phasellus sapien mi, euismod in lectus at, semper hendrerit felis. Ut varius sem sit amet efficitur sollicitudin. Sed finibus tincidunt nunc, et tristique sem commodo et. Aliquam nec odio egestas ante rutrum mollis. Nullam rhoncus blandit tempus. Integer fermentum orci quis nisl volutpat hendrerit.',
];

const WORK_EXPERIENCE: WorkExperience[] = [
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

const EDUCATION: Education[] = [
  {
    period: 'Graduated in 2012',
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
