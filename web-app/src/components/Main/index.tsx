import React from 'react';
import './index.scss';

interface Props {
  children: React.ReactNode;
  title: string;
}

const Wrapper: React.FC<Props> = ({ children, title }) => {
  return (
    <div className="wrapper">
      <h2>{title}</h2>
      <div className="form-content">
        {children}
      </div>
    </div>
  );
}

export default Wrapper;
