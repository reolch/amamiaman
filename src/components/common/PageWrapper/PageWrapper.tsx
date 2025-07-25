import React from 'react';
import styles from './PageWrapper.module.css';

interface PageWrapperProps {
  children: React.ReactNode;
  className?: string;
}

const PageWrapper: React.FC<PageWrapperProps> = ({ children, className }) => {
  return (
    <div className={`${styles.pageWrapper} ${className || ''}`}>
      {children}
    </div>
  );
};

export default PageWrapper;