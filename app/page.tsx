"use client";

import {
  AirPollution,
  DailyForecast,
  FeelsLike,
  FiveDayForecast,
  Humidity,
  Navbar,
  Population,
  Pressure,
  Sunset,
  Temperature,
  UvIndex,
  Visibility,
  Wind,
  defaultStates,
  useGlobalContextUpdate,
} from "@/app/utils/index";
import { ArrowRight } from "lucide-react";
import WeatherNews from "./Components/News/WeatherNews";

export default function Home() {
  const { setActiveCityCoords } = useGlobalContextUpdate();

  const getClickedCityCords = (lat: number, lon: number) => {
    setActiveCityCoords([lat, lon]);
  };

  return (
    <main className="mx-[1rem] lg:mx-[2rem] xl:mx-[6rem] 2xl:mx-[16rem] m-auto">
      <Navbar />
      <div className="pb-4 flex flex-col gap-4 md:flex-row">
        <div className="flex flex-col gap-4 w-full min-w-[18rem] md:w-[35rem]">
          <Temperature />
          <FiveDayForecast />
        </div>
        <div className="flex flex-col w-full">
          <div className="instruments grid h-full gap-4 col-span-full sm-2:col-span-2 lg:grid-cols-3 xl:grid-cols-4">
            <AirPollution />
            <Sunset />
            <Wind />
            <DailyForecast />
            <UvIndex />
            <Population />
            <FeelsLike />
            <Humidity />
            <Visibility />
            <Pressure />
          </div>
          <div className="mapbox-con mt-4 flex gap-4">
            {/* <Mapbox /> */}
            <div className="states flex flex-col gap-3 flex-1">
              <h2 className="flex items-center gap-2 font-medium">
                Top Large Cities
              </h2>
              <div className="flex flex-col gap-4">
                {defaultStates.map((state, index) => {
                  return (
                    <div
                      key={index}
                      className="transition-all border rounded-lg cursor-pointer dark:bg-dark-grey shadow-sm dark:shadow-none
                      hover:dark:bg-white
                      hover:dark:text-black
                      hover:bg-black
                      hover:text-white
                       hover:font-bold
                       flex items-center justify-between
                      "
                      onClick={() => {
                        getClickedCityCords(state.lat, state.lon);
                      }}
                    >
                      <p className="px-6 py-4">{state.name}</p>
                      <p>
                        <ArrowRight size={30} className="m-2 " />
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* weather news  */}
      {/* <WeatherNews /> */}
      {/* close */}
    </main>
  );
}
