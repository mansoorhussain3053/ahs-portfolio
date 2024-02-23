import { PiFlagPennantFill } from "react-icons/pi";
import Skills from "./Skills";
import Footer from "@/Components/Footer/Footer";

const Resume = () => {
  const Education = [
    {
      Title: "Computer Science",
      Icon: <PiFlagPennantFill />,
      Institude: "Cambridge University / 2004 - 2007",
      Description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quo repudiandae.",
    },
    {
      Title: "Bachelor Degree",
      Icon: <PiFlagPennantFill />,
      Institude: "University of Tokyo / 2008 - 2010        ",
      Description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quo repudiandae.",
    },
    {
      Title: "Master Degree        ",
      Icon: <PiFlagPennantFill />,
      Institude: "Harvard University / 2012 - 2015        ",
      Description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quo repudiandae.",
    },
  ];

  const Experience = [
    {
      Title: "Software Engineer",
      Icon: <PiFlagPennantFill />,
      Designation: "Adobe / 2015 - 2017",
      Description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio quo repudiandae.",
    },
    {
      Title: "Back-End Developer        ",
      Icon: <PiFlagPennantFill />,
      Designation: "Google / 2017 - 2018        ",
      Description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio quo repudiandae.",
    },
    {
      Title: "UI/UX Designer",
      Icon: <PiFlagPennantFill />,
      Designation: "Discord / 2019 - Present        ",
      Description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio quo repudiandae.",
    },
  ];
  return (
    <>
      <div className="py-52 max-[1000px]:py-36">
        <div className="max-w-screen-xl px-10 m-auto flex flex-col gap-16 max-[1000px]:px-0 ">
          <div className="text-center flex flex-col gap-8 max-[1200px]:gap-2 ">
            <p className="paragraph">Check out my Resume</p>
            <h2 className="heading3">Resume</h2>
            <div class="h-1 m-auto bg-[#009e66] w-24"></div>
          </div>

          <div className="flex py-16 gap-10 max-[1000px]:flex-col max-[1000px]:p-10">
            <div className="flex flex-col">
              <h4 className="heading6 py-6">Education</h4>
              {Education.map((data, i) => (
                <article
                  key={i}
                  className="bg-[#161616] flex   border-l-4 border-l-[#009e66] border-b border-b-[#313131]"
                >
                  <i className="text-[#009e66]  mt-2 ml-[-10px] text-4xl">
                    {data.Icon}
                  </i>
                  <div className="flex flex-col gap-2 p-7">
                    <h5 className="heading5">{data.Title}</h5>
                    <p className="paragraph1">{data.Institude}</p>
                    <p className="paragraph">{data.Description}</p>
                  </div>
                </article>
              ))}
            </div>

            <div className="flex flex-col">
              <h4 className="heading6 py-6">Experience</h4>

              {Experience.map((data, i) => (
                <article
                  key={i}
                  className="bg-[#161616] flex   border-l-4 border-l-[#009e66] border-b border-b-[#313131]"
                >
                  <i className="text-[#009e66]  mt-2 ml-[-10px] text-4xl">
                    {data.Icon}
                  </i>
                  <div className="flex flex-col gap-2 p-7">
                    <h5 className="heading5">{data.Title}</h5>
                    <p className="paragraph1">{data.Designation}</p>
                    <p className="paragraph">{data.Description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Skills />
      <Footer />
    </>
  );
};

export default Resume;
