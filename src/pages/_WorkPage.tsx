import { Page } from '@components';
import { trackPage } from '@config';
import { useEffect } from 'react';

export const WorkPage = () => {
  useEffect(() => trackPage('/work'));
  return (
    <Page title="Work">
      <div>Work page</div>
    </Page>
  );
};
