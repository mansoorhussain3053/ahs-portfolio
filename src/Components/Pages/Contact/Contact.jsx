"use client";
import Footer from "@/Components/Footer/Footer";
import { PiRadioButtonFill } from "react-icons/pi";
import { FaMapLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdSend } from "react-icons/io";
import { toast } from "sonner";

import { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [loading, isLoading] = useState(false);

  const sendMail = async (e) => {
    isLoading(true);
    e.preventDefault();
    try {
      const response = await fetch("/api/SendEmail", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          subject,
          message,
        }),
      });

      if (response.ok) {
        toast.success("Email send successfully");
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
      } else {
        toast.error("Something went worng while sending email");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      isLoading(false);
    }
  };

  const ContactDetails = [
    {
      Title: "Name",
      Description: "Emma Smith",
    },
    {
      Title: "Location",
      Description: "4155 Mann Island, Liverpool, United Kingdom.",
    },
    {
      Title: "Call Me",
      Description: "+44 1632 967704",
    },
    {
      Title: "Email Me",
      Description: "emma@example.com",
    },
  ];

  const Icons = [
    { Icon: <PiRadioButtonFill /> },
    { Icon: <FaMapLocationDot /> },
    { Icon: <FaPhoneAlt /> },
    { Icon: <IoMdSend /> },
  ];

  return (
    <>
      <div className="py-52 max-[1000px]:py-36">
        <div className="max-w-screen-xl px-10 m-auto flex flex-col gap-16 max-[1000px]:px-0 ">
          <div className="text-center flex flex-col gap-8 max-[1200px]:gap-2 ">
            <p className="paragraph">Feel free to contact me anytime</p>
            <h2 className="heading3">Get in Touch</h2>
            <div className="h-1 m-auto bg-[#009e66] w-24"></div>
          </div>
        </div>
        <div className="flex max-w-screen-xl px-10 m-auto gap-10 mt-28 max-[920px]:flex-col max-[920px]:gap-32">
          <div className="w-[55%] flex flex-col gap-8 max-[920px]:w-full">
            <h5 className="heading6 font-bold">Message Me</h5>

            <form onSubmit={sendMail}>
              <div className="flex flex-col gap-5">
                <div className="flex gap-5">
                  <input
                    name="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Name"
                    className=" focus-visible:outline-0 focus-visible:border-b border-[#009e66] w-full py-2 px-4 bg-[#161616] placeholder:text-[#606060]"
                  />

                  <input
                    name="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    className="focus-visible:outline-0 focus-visible:border-b border-[#009e66] w-full py-2 px-4 bg-[#161616] placeholder:text-[#606060]"
                  />
                </div>
                <input
                  name="subject"
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="Subject"
                  className="focus-visible:outline-0 focus-visible:border-b border-[#009e66] w-full py-2 px-4 bg-[#161616] placeholder:text-[#606060]"
                />
                <div>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Message"
                    name="message"
                    id=""
                    cols="30"
                    rows="7"
                    className="focus-visible:outline-0 focus-visible:border-b border-[#009e66] w-full py-2 px-4 bg-[#161616] placeholder:text-[#606060]"
                  />
                </div>
              </div>
              <button
                type="submit"
                className={`rounded-full transition-all mt-7 hover:bg-[#009e67b9] px-7 py-2 bg-[#009e66]`}
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>

          <div className="w-[45%] flex flex-col gap-8 max-[920px]:w-full">
            <div className="flex flex-col gap-5">
              <h5 className="heading6 font-bold">Contact Info</h5>
              <p className="paragraph">
                Always available for freelance work if the right project comes
                along. Feel free to contact me!
              </p>
              <div className="flex gap-5">
                <div className="flex flex-col gap-9">
                  {Icons.map((data, i) => (
                    <i key={i} className="text-3xl text-[#009e66]">
                      {data.Icon}
                    </i>
                  ))}
                </div>
                <div className="border border-[#333333]"></div>
                <div className="flex flex-col gap-3">
                  {ContactDetails.map((data, i) => (
                    <article key={i}>
                      <h6 className="font-bold">{data.Title}</h6>
                      <p className="paragraph">{data.Description}</p>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
