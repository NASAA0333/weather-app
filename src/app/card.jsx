import Image from "next/image";
// import { footerButtons } from "./buttons";
// export default function weatherCard() {}
const WeatherCard = ({ city }) => {
  return (
    <div>
      <div className="flex gap-[100px] items-center  mt-[64px]">
        <div>
          <div className="text-[18px] text-gray-500 ">September 10,2021</div>
          <div className="text-[48px] text-black ">{city}</div>
        </div>
        <div>
          <Image src={"/location.png"} alt="" width={32} height={32} />
        </div>
      </div>
      <div>
        <Image src={"/sun.png"} alt="" width={275} height={275} />
      </div>
      <div className="text-[144px]">26°</div>
      <div className="text-[24px] text-[#FF8E27] font-bold">Bright</div>
    </div>
  );
};

export { WeatherCard };
