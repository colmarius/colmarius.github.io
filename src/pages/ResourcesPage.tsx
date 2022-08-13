import { Page } from '@components';
import { trackPage } from '@config';
import { useEffect } from 'react';

export const ResourcesPage = () => {
  useEffect(() => trackPage('/resources'));
  return (
    <Page title="Resources">
      <div>Resources page</div>
    </Page>
  );
};
