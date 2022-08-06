import { ReactNode } from 'react';

export const Page = ({ title, children }: { title: string; children: ReactNode }) => (
  <main>
    <div className="container mx-auto xl:mx-40 md:mx-20">
      <h1 className="text-4xl mb-6">{title}</h1>
      {children}
    </div>
  </main>
);
