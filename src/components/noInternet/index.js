import React, { useEffect } from 'react';

const NoInternet = () => {
  useEffect(() => {
    document.title = 'James Bond';
  });

  return <div></div>;
};

export default NoInternet;
