import Image from "next/image"
import Profile from "../../../../public/Images/profile.webp"
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6"
import { IoLogoFacebook } from "react-icons/io"
import { GrInstagram } from "react-icons/gr"

const About = () => {
    const SocialLinks = [
        { Link: "#", Icon: <FaXTwitter /> },
        { Link: "#", Icon: <IoLogoFacebook /> },
        { Link: "#", Icon: <FaLinkedin /> },
        { Link: "#", Icon: <FaGithub /> },
        { Link: "#", Icon: <GrInstagram /> }
    ]




    return (
        <div className="py-52">

            <div className="max-w-screen-xl m-auto flex flex-col gap-16">
                <div className="text-center flex flex-col gap-8">
                    <p className="paragraph">Get to know me</p>
                    <h2 className="heading3">About Me</h2>
                    <div class="h-1 m-auto bg-[#009e66] w-24"></div>
                </div>


                <div className="flex gap-20 items-center m-auto px-10">
                    <article className="w-1/2"><Image src={Profile} alt="Arshad Hussain" /></article>
                    <article className="w-10/12 flex flex-col gap-5">
                        <h4 className="heading6 text-[#009e66]">Who am i?</h4>
                        <h3 className="heading4">I'm Emma Smith, a visual UX/UI Designer and Web Developer</h3>
                        <p className="paragraph">I am a freelancer based in the United Kingdom and i have been building noteworthy UX/UI designs and websites for years, which comply with the latest design trends. I help convert a vision and an idea into meaningful and useful products. Having a sharp eye for product evolution helps me prioritize tasks, iterate fast and deliver faster.
                        </p>
                        <div className="h-[1px] bg-[#222222]"></div>

                        <div className=" flex justify-between">
                            <div>
                                <article className="flex gap-5">
                                    <p className="paragraph1">Name:</p>
                                    <p className="paragraph">Emma Smith</p>
                                </article>


                                <article className="flex gap-5">
                                    <p className="paragraph1">Age:</p>
                                    <p className="paragraph">21</p>
                                </article>

                            </div>
                            <div>
                                <article className="flex gap-5">
                                    <p className="paragraph1">Email:</p>
                                    <a href="#" className="paragraph text-[#009e66]">arshadhussain89@live.com</a>
                                </article>
                                <article className="flex gap-5">
                                    <p className="paragraph1">
                                        From: </p>
                                    <p className="paragraph">Pakistan</p>
                                </article>
                            </div>


                        </div>
                        <div className="flex gap-10 items-center justify-start py-3">
                            <article>
                                <button className="rounded-full transition-all  hover:bg-[#009e67b9] px-7 py-2 bg-[#009e66]">Download CV</button>
                            </article>
                            <div className="h-[1px] w-[60px] bg-[#009e66]"></div>
                            <article className="flex gap-3 items-center">
                                {SocialLinks.map((data, i) => (

                                    <a key={i} className="text-xl" href={data.Link}>{data.Icon}</a>
                                ))}
                            </article>
                        </div>

                    </article>
                </div>
            </div>
        </div>
    )
}

export default About
