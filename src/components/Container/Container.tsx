import React, { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

type TContainerProps ={
  children: ReactNode;
  className?: string;
}

const Container = ({ children, className='' }:TContainerProps) => {
  return (
    <div className={twMerge('max-w-[1220px] mx-auto px-4 sm:px-6 lg:px-8', className)}>
      {children}
    </div>
  );
};

export default Container;
