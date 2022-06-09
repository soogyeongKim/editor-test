import React, { useEffect, useState } from 'react';

function useSelectOpen(props) {
  const [isOpen, setIsOpen] = useState();

  const closeAllSelect = () => {
    setIsOpen();
  };

  useEffect(() => {
    window.addEventListener('click', closeAllSelect);
    return () => {
      window.removeEventListener('click', closeAllSelect);
    };
  }, []);

  return { isOpen, setIsOpen };
}

export default useSelectOpen;
