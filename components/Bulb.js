import Image from "next/image";

const Bulb = () => {
  return (
    <div>
      {/* <div className="absolute -right-36 -rotate-90 blend-color-dodge animate-pulse duration-75 z-10 w-[200px] xl:w-[390px]">
        <Image src={'/bulb.png'} width={260} height={200} className="w-full h-full" alt="" />
      </div> */}


      <div className="absolute -left-36 -bottom-12 rotate-12 mix blend-color-dodge animate-pulse duration-75 z-10 w-[200px] xl:w-[260px]">
        <Image src={'/bulb.png'} width={260} height={200} className="'w-full h-full" alt="" />
      </div>
    </div>


  )
};

export default Bulb;
