export default function Home() {
  return (
    <>
      <div className="w-screen h-[40vh] sm:px-20 flex items-center">
        <div className="w-[80%] inter text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-light whitespace-nowrap">
          We take care about <br />
          <span className=" font-bold">
            <span className="rounded-full bg-[#83C5BE]">your</span> health
          </span>
        </div>
        <div className="w-[20%] flex flex-col gap-10">
          <div>
            <div className="text-2xl text-[#ffa989] font-black">Call us</div>
            <div className="font-bold font-mono">+91-8822260000</div>
          </div>
          <div>
            <div className="text-2xl text-[#ffa989] font-black">Find Us</div>
            <div className="font-bold font-mono">Arjunganj, Lukhnow</div>
          </div>
        </div>
      </div>
      <div className="w-[90vw] h-[1.5px] bg-black m-auto"></div>
    </>
  );
}
