import { FaTwitter } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";

const Footer = () => {
    const FooterDetails = [
        { Title: "Arshad Hussain", Description: "I am Developer is a blog website where you will find great tutorials on web design and Development. Here each tutorial is beautifully described step by step with the required source code" }
    ]
    const SocialMedia = [
        { Platform: <FaTwitter />, Link: "#" },
        { Platform: <IoLogoFacebook />, Link: "#" },
        { Platform: <FaLinkedin />, Link: "#" },
        { Platform: <FaGithub />, Link: "#" },
        { Platform: <GrInstagram />, Link: "#" }
    ]
    const FooterLinks = [
        { Lebel: "Home", Link: "/" },
        { Lebel: "About", Link: "/about" },
        { Lebel: "Resume", Link: "/resume" },
        { Lebel: "Contact", Link: "/contact" },
    ]
    return (
        <div className="p-30 bg-[#161616]">
            <div className="max-w-screen-xl m-auto p-14 text-center flex flex-col items-center gap-5">
                {FooterDetails.map((data, i) => (


                    <div key={i} className="flex flex-col gap-7">
                        <h2 className="heading2 font-bold">{data.Title}</h2>
                        <p className="w-1/2 m-auto paragraph max-[680px]:w-full">{data.Description}</p>
                    </div>
                ))}

                <div className="flex gap-5">
                    {SocialMedia.map((data, i) => (


                        <a key={i} className="text-2xl mt-2" href={data.Link}>{data.Platform}</a>
                    ))}
                </div>

            </div>
            <div className="bg-black flex justify-between m-auto py-5 px-10 max-[750px]:justify-center">
                <p className="paragraph1">Copyright © 2024 Arshad Hussain.</p>
                <ul className="flex gap-4 max-[750px]:hidden" >
                    {FooterLinks.map((data, i) => (


                        <li className="paragraph1" key={i}><a href={data.Link}>{data.Lebel}</a></li>

                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Footer
