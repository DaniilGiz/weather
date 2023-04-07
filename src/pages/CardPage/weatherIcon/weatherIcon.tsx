import React, { FC } from "react";

type WeatherIconProps = {
  iconCode: string;
  style?: React.CSSProperties
};

export const WeatherIcon: FC<WeatherIconProps> = ({ iconCode, style }) => {
  const iconUrl = `http://openweathermap.org/img/wn/${iconCode}.png`;

  return <img style={{
    background: "rgba(81, 141, 155, 0.6)",
    borderRadius: "50%",
    padding: "10px",
    ...style
  }} src={iconUrl} alt="Weather Icon" />;
};
