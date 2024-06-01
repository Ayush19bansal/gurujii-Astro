import AirPollution from "../Components/AirPollution/AirPollution";
import DailyForecast from "../Components/DailyForecast/DailyForecast";
import FeelsLike from "../Components/FeelsLike/FeelsLike";
import FiveDayForecast from "../Components/FiveDayForecast/FiveDayForecast";
import Humidity from "../Components/Humidity/Humidity";
import Navbar from "../Components/Navbar";
import Population from "../Components/Population/Population";
import Pressure from "../Components/Pressure/Pressure";
import Sunset from "../Components/Sunset/Sunset";
import Temperature from "../Components/Temperature/Temperature";
import UvIndex from "../Components/UvIndex/UvIndex";
import Visibility from "../Components/Visibility/Visibility";
import Wind from "../Components/Wind/Wind";
import { useGlobalContextUpdate } from "../context/globalContext";
import defaultStates from "./defaultStates";

export {
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
};
