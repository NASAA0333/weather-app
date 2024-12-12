import Image from "next/image";

const DayCard = () => {
  return (
    <div className="flex  flex-col items-center  ">
      <div className="flex gap-[100px] items-center  mt-[64px]">
        <div>
          <div className="text-[18px] text-gray-500 ">September 10,2021</div>
          <div className="text-[48px] text-black ">Kraków</div>
        </div>
        <div>
          <Image src={"/location.png"} alt="" width={32} height={32} />
        </div>
      </div>
      <div>
        <Image src={"/sun.png"} alt="" width={275} height={275} />
      </div>
      <div className="text-[144px]">26°</div>
      <div className="text-[32px] text-orange-700">Bright</div>
      <div className="flex justify-between gap-[50px] mt-[50px]">
        <img src={"/home.png"} className="w-[32px] h-[32px]" />
        <Image src={"/location.png"} alt="" width={32} height={32} />
        <Image src={"/heart.png"} alt="" width={32} height={32} />
        <Image src={"/user.png"} alt="" width={32} height={32} />
      </div>
    </div>
  );
};

const NigthCard = () => {
  return (
    <div className="flex  flex-col items-center  ">
      <div className="flex gap-[100px] items-center  mt-[64px]">
        <div>
          <div className="text-[18px] text-gray-500">September 10,2021</div>
          <div className="text-[48px] text-white">Kraków</div>
        </div>
        <div>
          <Image src={"/location.png"} alt="" width={32} height={32} />
        </div>
      </div>
      <div>
        <Image src={"/moon.png"} alt="" width={275} height={275} />
      </div>
      <div className="text-[144px]">17°</div>
      <div className="text">Clear</div>
      <div className="flex justify-between w-[318px] h-[32px] ">
        <div>
          <Image src={"/home.png"} alt="" width={32} height={32} />
        </div>
        <div>
          <Image src={"/location.png"} alt="" width={32} height={32} />
        </div>
        <div>
          <Image src={"/heart.png"} alt="" width={32} height={32} />
        </div>
        <div>
          <Image src={"/user.png"} alt="" width={32} height={32} />
        </div>
      </div>
    </div>
  );
};

export { DayCard };
export { NigthCard };
