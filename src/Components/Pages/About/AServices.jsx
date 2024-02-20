import { SiCss3 } from "react-icons/si";
import { RiGalleryFill } from "react-icons/ri";
import { SiBabylondotjs } from "react-icons/si";
import { FaLaptopCode } from "react-icons/fa";
import { HiMiniSquaresPlus } from "react-icons/hi2";
import { IoRocketSharp } from "react-icons/io5";

const AServices = () => {
  const Services = [
    {
      Icon: <SiCss3 />,
      Title: "Design Trends",
      Description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    },
    {
      Icon: <RiGalleryFill />,
      Title: "PSD Designs",
      Description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    },
    {
      Icon: <SiBabylondotjs />,
      Title: "Customer Support",
      Description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    },
    {
      Icon: <FaLaptopCode />,
      Title: "Web Development",
      Description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    },
    {
      Icon: <HiMiniSquaresPlus />,
      Title: "Fully Responsive",
      Description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    },
    {
      Icon: <IoRocketSharp />,
      Title: "Branding",
      Description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    },
  ];

  return (
    <div className="p-30">
      <div className="max-w-screen-xl px-10 m-auto">
        <div className="flex flex-col gap-5 text-center">
          <p className="paragraph">Services i offer to my clients</p>
          <h4 className="heading3">My Services</h4>
        </div>

        <div className="grid grid-cols-3 gap-7 py-16 max-[980px]:grid-cols-2 max-[600px]:grid-cols-1 max-[600px]:text-center">
          {Services.map((data, i) => (
            <article key={i} className=" bg-[#161616] max-[730px]:p-7 max-[600px]:items-center p-12 flex flex-col gap-5 shadow-lg transition-all	hover:shadow-[#009e66] ">
              <i className="text-5xl text-[#009e66]">{data.Icon}</i>
              <h3 className="heading5">{data.Title}</h3>
              <p className="paragraph">{data.Description}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AServices;
