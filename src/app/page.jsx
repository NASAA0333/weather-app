"use client";

import Image from "next/image.js";
import { WeatherCard } from "./card.jsx";
import { FooterButtons } from "./buttons.jsx";
import { Logo } from "./logo.jsx";
import { useEffect, useState } from "react";
import { Sircles } from "./sircles.jsx";
import { SearchInput } from "./Searchinput.jsx";

const API_KEY = "1b0f4de2b0204a37892100828241312";

export default function Home() {
  const [search, setSearch] = useState("");
  const [city, setCity] = useState("Ulaanbaatar");
  const onChangeText = (event) => {
    setSearch(event.target.value);
  };
  const keyDown = (e) => {
    if (e.code == "Enter") {
      setCity(search);
    }
  };

  let dayTemp = 0;

  useEffect(() => {
    fetch(
      "http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=1&aqi=no&alerts=no"
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  }, [city]);

  return (
    <div className="w-full  h-screen flex  justify-center items-center relative rounded-[30px] overflow-hidden">
      <div className="w-[50%] h-[100%] bg-[#F3F4F6] flex justify-center">
        <div className="bg-white h-[80px] w-[587px] absolute flex justify-center items-center rounded-[48px] gap-[16px] mt-[40px] z-[2] ">
          <SearchInput
            keyDown={keyDown}
            search={search}
            onChangeText={onChangeText}
          />
        </div>
        <div className=" w-[414px] h-[828px] mt-[216px] mb-[193px] bg-[#FFFFFF] rounded-[48px] z-[3]">
          <div className="flex  flex-col ml-[48px]">
            <WeatherCard city={city} />
            <FooterButtons />
          </div>
        </div>
      </div>

      <div className="w-[50%] h-[100%] bg-[#F3F4F6] flex flex-col items-center">
        <div className="w-[100%] h-[49%] bg-[#0F141E] relaitve rounded-bl-[32px] "></div>
        <div className="w-[100%] h-[12%] bg-[#0F141E] relaitve"></div>
        <div className="w-[100%] h-[49%] bg-[#0F141E] relaitve rounded-tl-[32px] "></div>
        <div className="w-[414px] h-[828px] mt-[216px] mb-[193px] bg-[#111827] rounded-[48px] z-[3] absolute ">
          <div className="flex  flex-col ml-[48px]">
            <WeatherCard city={city} />
            <FooterButtons />
          </div>
        </div>
      </div>
      <Logo />
      <Sircles />
    </div>
  );
}
