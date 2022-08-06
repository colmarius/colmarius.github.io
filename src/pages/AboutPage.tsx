import { ABOUT_ME } from '../config/aboutMe';
import { Page } from './Page';

const AboutMeMessage = () => (
  <div className="mb-20">
    {ABOUT_ME.MESSAGE.map((line, index) => (
      <p key={index} className="mb-8 font-light text-md">
        {line}
      </p>
    ))}
  </div>
);

const Section = ({ title, children }: { title: string; children: ReactNode }) => (
  <div className="mb-20">
    <h1 className="text-3xl mb-6">{title}</h1>
    <div className="text-lg font-extralight">{children}</div>
  </div>
);

const WorkExperience = () => (
  <Section title="Work Experience">
    {ABOUT_ME.WORK_EXPERIENCE.map((work, index) => (
      <div key={index} className="mb-6">
        <p>{work.period}</p>
        <p className="text-medium font-bold">{work.title}</p>
        <a href={work.link} target="_blank" rel="noreferrer" className="text-indigo-600">
          {work.company}
        </a>
      </div>
    ))}
  </Section>
);

const Education = () => (
  <Section title="Education">
    {ABOUT_ME.EDUCATION.map((education, index) => (
      <div key={index} className="mb-6">
        <p>{education.period}</p>
        <p className="text-medium font-bold">{education.title}</p>
        <p className="">{education.university}</p>
      </div>
    ))}
  </Section>
);

export const AboutPage = () => (
  <Page title="About">
    <AboutMeMessage />
    <WorkExperience />
    <Education />
  </Page>
);
