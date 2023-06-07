import { ReactNode } from 'react';

export const Section = ({
  title,
  children,
  className,
}: {
  title: string;
  children: ReactNode;
  className: string;
}) => (
  <div className={className}>
    <h1 className="text-3xl mb-6">{title}</h1>
    <div className="text-xl sm:text-lg font-extralight">{children}</div>
  </div>
);
