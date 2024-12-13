"use cilent";

import Image from "next/image";

export function FooterButtons() {
  return (
    <div className="flex justify-between w-[318px] h-[32px] mt-[40px]">
      <Image src={"/home.png"} alt="" width={32} height={32} />
      <Image src={"/location.png"} alt="" width={32} height={32} />
      <Image src={"/heart.png"} alt="" width={32} height={32} />
      <Image src={"/user.png"} alt="" width={32} height={32} />
    </div>
  );
}
