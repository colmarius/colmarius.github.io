import { ArrowRight, Page, Section } from '@components';
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
