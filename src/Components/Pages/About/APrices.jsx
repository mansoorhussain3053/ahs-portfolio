
const APrices = () => {
  return (
    <div className="p-30">
    <div className="max-w-screen-xl m-auto">
      <div className="flex flex-col gap-5 text-center">
        <p className="paragraph">Get started with my services</p>
        <h4 className="heading3">Choose a Plan</h4>
      </div>

      <div className="grid grid-cols-3 gap-7 py-16 ">
       
          <article  className=" bg-[#161616] p-12 flex flex-col gap-5 shadow-lg transition-all	hover:shadow-[#009e66] ">
            <i className="text-5xl text-[#009e66]"></i>
            <h3 className="heading5"></h3>
            <p className="paragraph"></p>
          </article>
          <article  className=" bg-[#161616] p-12 flex flex-col gap-5 shadow-lg transition-all	hover:shadow-[#009e66] ">
            <i className="text-5xl text-[#009e66]"></i>
            <h3 className="heading5"></h3>
            <p className="paragraph"></p>
          </article>
          <article  className=" bg-[#161616] p-12 flex flex-col gap-5 shadow-lg transition-all	hover:shadow-[#009e66] ">
            <i className="text-5xl text-[#009e66]"></i>
            <h3 className="heading5"></h3>
            <p className="paragraph"></p>
          </article>
  
      </div>
    </div>
  </div>
  )
}

export default APrices
