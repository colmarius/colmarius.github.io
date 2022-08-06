import { ABOUT_ME } from '../config/aboutMe';
import { Page } from './Page';

export const ContactPage = () => (
  <Page title="Contact">
    <div className="text-lg leading-loose">
      <p>
        Get in touch if you find my expertise useful and think I can help, or if you simply want to
        say hello.
      </p>
      <p>
        In that case{' '}
        <a href="/" className="text-indigo-500">
          send me an email
        </a>{' '}
        or a message on{' '}
        <a href={ABOUT_ME.LINKEDIN} className="text-indigo-500" target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        .
      </p>
      <p>
        <span className="font-bold"> Marius Colacioiu</span> based in Zürich, Switzerland
      </p>
    </div>
  </Page>
);
