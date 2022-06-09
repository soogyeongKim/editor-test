import Loading from 'components/Element/Loading';
import React, { useEffect } from 'react';

function NotFound(props) {
  useEffect(() => {
    window.location.href = '/';
  }, []);
  return <Loading></Loading>;
}

export default NotFound;
