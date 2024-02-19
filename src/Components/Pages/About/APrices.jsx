import { GiWaterDrop } from "react-icons/gi";


const APrices = () => {




  return (
    <div className="p-30">
      <div className="max-w-screen-xl m-auto">
        <div className="flex flex-col gap-5 text-center">
          <p className="paragraph">Get started with my services</p>
          <h4 className="heading3">Choose a Plan</h4>
        </div>

        <div className="grid grid-cols-3 gap-7 py-16 ">

          <article className=" bg-[#161616] text-center items-center p-12 flex flex-col gap-5 shadow-lg transition-all	hover:shadow-[#009e66] ">
            <i className="text-5xl text-[#009e66]"><GiWaterDrop /></i>
            <h3 className="heading4">Standard</h3>
            <h4 className="heading5 tracking-widest	text-[#D4D4D4]	">$19/month</h4>
            <div className="flex flex-col gap-5">
              <p className="paragraph">Mobile App Design</p>
              <p className="paragraph">Responsive Design</p>
              <p className="paragraph">Database Development</p>
              <p className="paragraph">Web Design</p>
              <p className="paragraph">24/7 Support</p>
            </div>
            <button className="rounded-full transition-all  hover:bg-[#009e67b9] px-7 py-2 bg-[#009e66]">Get Started</button>
          </article>
          <article className=" bg-[#161616] text-center items-center p-12 flex flex-col gap-5 shadow-lg transition-all	hover:shadow-[#009e66] ">
            <i className="text-5xl text-[#009e66]"><GiWaterDrop /></i>
            <h3 className="heading4">Professional</h3>
            <h4 className="heading5 tracking-widest	text-[#D4D4D4]	">$29/month</h4>
            <div className="flex flex-col gap-5">
              <p className="paragraph">Mobile App Design</p>
              <p className="paragraph">Responsive Design</p>
              <p className="paragraph">Database Development</p>
              <p className="paragraph">Web Design</p>
              <p className="paragraph">24/7 Support</p>
            </div>
            <button className="rounded-full transition-all  hover:bg-[#009e67b9] px-7 py-2 bg-[#009e66]">Get Started</button>
          </article>
          <article className=" bg-[#161616] text-center items-center p-12 flex flex-col gap-5 shadow-lg transition-all	hover:shadow-[#009e66] ">
            <i className="text-5xl text-[#009e66]"><GiWaterDrop /></i>
            <h3 className="heading4">Business</h3>
            <h4 className="heading5 tracking-widest	text-[#D4D4D4]	">$39/month</h4>
            <div className="flex flex-col gap-5">
              <p className="paragraph">Mobile App Design</p>
              <p className="paragraph">Responsive Design</p>
              <p className="paragraph">Database Development</p>
              <p className="paragraph">Web Design</p>
              <p className="paragraph">24/7 Support</p>
            </div>
            <button className="rounded-full transition-all  hover:bg-[#009e67b9] px-7 py-2 bg-[#009e66]">Get Started</button>
          </article>

        </div>
      </div>
    </div>
  )
}

export default APrices
