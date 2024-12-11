"use cilent";

import "./style.css";
export default function Home() {
  return (
    <div>
      <div className="w-full h-screen flex  justify-center items-center relative">
        <div className="w-[50%] bg-[#F3F4F6] flex justify-center">
          <div className=" w-[414px] h-[828px] mt-[216px] bg-[#FFFFFFBF] rounded-[48px]"></div>
        </div>
        <div className="w-[50%] bg-[#0F141E] flex justify-center">
          <div className="w-[414px] h-[828px] mt-[216px] bg-[#111827BF] rounded-[48px]"></div>
        </div>{" "}
        <div className="border rounded-[50%] border-black h-[50px] w-[50px] absolute"></div>
        <div className="border rounded-[50%] border-black h-[50px] w-[50px] absolute"></div>
        <div className="border rounded-[50%] border-black h-[50px] w-[50px] absolute"></div>
        <div className="border rounded-[50%] border-black h-[50px] w-[50px] absolute"></div>
        <div className="border rounded-[50%] border-black h-[50px] w-[50px] absolute"></div>
        <div className="border rounded-[50%] border-black h-[50px] w-[50px] absolute"></div>
      </div>
    </div>
  );
}
