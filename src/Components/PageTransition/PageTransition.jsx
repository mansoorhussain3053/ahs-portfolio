"use client"; // This directive indicates that this module should only be executed in the client-side bundle.

import { motion } from "framer-motion";
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const PageTransition = ({ children }) => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = () => {
      document.body.classList.add('page-transition');
    };

    router.events.on('routeChangeStart', handleRouteChange);

    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
    };
  }, [router]);

  return (
    <>
      {children}
      <motion.div
        key="page-transition-in"
        className="slide-in"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      />

      <motion.div
        key="page-transition-out"
        className="slide-out"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      />
    </>
  );
};

export default PageTransition;
