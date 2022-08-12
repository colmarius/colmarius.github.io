import { Page, Section } from '@components';
import { ABOUT_ME } from '@config';

const AboutMeMessage = () => (
  <div className="mb-20">
    {ABOUT_ME.MESSAGE.map((line, index) => (
      <p key={index} className="mb-8 font-light text-md">
        {line}
      </p>
    ))}
  </div>
);

const WorkExperience = () => (
  <Section title="Work Experience" className="mb-20">
    {ABOUT_ME.WORK_EXPERIENCE.map((work, index) => (
      <div key={index} className="mb-6">
        <p>{work.period}</p>
        <p className="text-medium font-bold">{work.title}</p>
        <a
          href={work.link}
          target="_blank"
          rel="noreferrer"
          className="text-indigo-600 hover:text-indigo-500"
        >
          {work.company}
        </a>
      </div>
    ))}
  </Section>
);

const Education = () => (
  <Section title="Education" className="mb-10">
    {ABOUT_ME.EDUCATION.map((education, index) => (
      <div key={index} className="mb-6">
        <p>{education.period}</p>
        <p className="text-medium font-bold">{education.title}</p>
        <p className="">{education.university}</p>
      </div>
    ))}
  </Section>
);

const ArrowRight = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6 ml-1"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
  </svg>
);

const ViewMyFullCv = () => (
  <a
    className="flex text-medium hover:text-indigo-600 mb-20"
    href="https://marius-colacioiu.com/cv/"
    target="_blank"
    rel="noopener noreferrer"
  >
    <strong className="text-xl">View my full CV</strong> <ArrowRight />
  </a>
);

export const AboutPage = () => (
  <Page title="About">
    <AboutMeMessage />
    <WorkExperience />
    <Education />
    <hr className="w-40 bg-indigo-600 mb-5" />
    <ViewMyFullCv />
  </Page>
);
