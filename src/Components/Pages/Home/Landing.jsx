"use client";
import { useState, useEffect } from "react";
import { FaTwitter } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";

const Landing = () => {
  const SocialLinks = [
    { Link: "#", Icon: <FaTwitter /> },
    { Link: "#", Icon: <IoLogoFacebook /> },
    { Link: "#", Icon: <FaLinkedin /> },
    { Link: "#", Icon: <FaGithub /> },
    { Link: "#", Icon: <GrInstagram /> },
  ];

  const [activeWord, setActiveWord] = useState("");
  const words = [" SEO Specialist", " Social Media Marketer", " Freelancer"];
  const [letterIndex, setLetterIndex] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for forward, -1 for backward

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (direction === 1) {
        if (letterIndex < words[wordIndex].length) {
          setActiveWord((prevWord) => prevWord + words[wordIndex][letterIndex]); // Add next letter
          setLetterIndex((prevIndex) => prevIndex + 1);
        } else {
          setDirection(-1); // Start reversing animation
        }
      } else {
        if (letterIndex > 0) {
          setActiveWord((prevWord) => prevWord.slice(0, -1)); // Remove last letter when reversing
          setLetterIndex((prevIndex) => prevIndex - 1);
        } else {
          setDirection(1); // Start forward animation
          setWordIndex((prevIndex) => (prevIndex + 1) % words.length); // Move to the next word
        }
      }
    }, 130); // Change letter every 130 milliseconds

    return () => clearInterval(intervalId);
  }, [letterIndex, direction, wordIndex]);

  return (
    <div className="bg-custom-image">
      <div className="flex flex-col h-screen justify-end">
        <div className="text-center flex flex-col gap-5 max-[600px]:gap-1">
          <h1 className="heading1 ">Arshad Hussain</h1>
          <h4 className="heading2 cd-headline clip home-headline">
            {"I’m"} a
            <span className="cd-words-wrapper single-headline text-[#009e66] font-bold">
              <span className="word wordactive">{activeWord}</span>
            </span>
          </h4>
        </div>
        <div className="flex justify-between p-10">
          <article className=" flex flex-col justify-end">
            <a href="#" className="rotate-90">
              ENG
            </a>
          </article>
          <article className="flex flex-col gap-4">
            {SocialLinks.map((data, i) => (
              <a href={data.Link} key={i} className="text-xl">
                {data.Icon}
              </a>
            ))}
          </article>
        </div>
      </div>
    </div>
  );
};

export default Landing;
