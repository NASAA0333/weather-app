import Image from "next/image";

const NigthCard = () => {
  return (
    <div>
      <div>
        <div>
          <div className="text-[18px] text-white">September 10,2021</div>
          <div className="text-[48px] text-white">Kraków</div>
        </div>
        <div>
          <Image src={"/location.png"} alt="" width={32} height={32} />
        </div>
      </div>
      <div>
        <Image src={"/moon.png"} alt={""} width={200} height={200} />
      </div>
    </div>
  );
};
export { NigthCard };
