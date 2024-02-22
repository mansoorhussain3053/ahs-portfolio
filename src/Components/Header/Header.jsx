"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Logo from '../../../public/Images/Logo.webp';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import Link from 'next/link';
import ProgressBar from '../ProgressBar/ProgressBar';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

const Header = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.5
      }
    }
  }
  
  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 }
  }
  const pathname = usePathname(); // Corrected variable name

  const [scrolling, setScrolling] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const MenuLinks = [
    { Name: 'Home', Link: '/' },
    { Name: 'About', Link: '/about' },
    { Name: 'Resume', Link: '/resume' },
    { Name: 'Contact', Link: '/contact' }
  ];

  return (
    <>
      <ProgressBar />
      <div
        className={`p-10 w-full transition-all duration-300 z-50 fixed ${scrolling ? 'bg-[#161616] shadow-md' : 'bg-transparent'
          }`}
      >
        <div className="flex justify-between">
          <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          >
            <Link href="/">
              <Image src={Logo} alt="Logo" width={110} />
            </Link>
          </motion.div>

          <div>
            <motion.ul
            variants={container}
            initial="hidden"
            animate="show"
            className="flex gap-8 max-[650px]:hidden">
              {MenuLinks.map((data, i) => {
                const isActive = pathname === data.Link; // Compare pathname directly with Link
                return (
                  <motion.li variants={item} key={i}>
                    {/* Wrap Link with PageTransition */}

                    <Link
                      href={data.Link}
                      className={isActive ? "text-[#009e66] nav-links relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-[#009e66] after:w-full  after:scale-x-100 after:transition after:duration-300 after:origin-center" : "nav-links relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-[#009e66] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"}
                    >
                      {data.Name}
                    </Link>

                  </motion.li>
                );
              })}
            </motion.ul>
            <div className="hidden max-[650px]:block">
              <i className="text-4xl hover:text-[#009e66]">
                {' '}
                <HiOutlineMenuAlt3 />
              </i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
