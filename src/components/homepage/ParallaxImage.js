"use client";

import { useEffect, useState } from 'react';
import skrollr from 'skrollr';

const ParallaxImage = () => {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(typeof window !== 'undefined');
    if (isBrowser) {
      const s = skrollr.init();
      return () => s.destroy(); // Clean up on unmount
    }
  }, [isBrowser]);

  if (!isBrowser) {
    return null; // Prevent rendering on the server
  }

  return (
    <div
      id="image"
      data-0="background-size: 30% auto;"
      data-300="background-size: 100% auto;"
      data-500="position: fixed; top:0;"
      data-501="position: absolute; top: 201px;"
      style={{
        width: '100%',
        height: 'auto',
        minHeight: '100vh',
        display: 'block',
        position: 'fixed',
        top: '80px',
        left: 0,
        zIndex: -1,
        backgroundSize: '30% auto',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        backgroundImage: 'url(/image_1.png)',
        transition: 'background-size 0.3s ease, opacity 0.3s ease',
      }}
    />
  );
};

export default ParallaxImage;
