import React from "react";
import {TimesProps} from "./Time.props";



export const Time = ({ times }: TimesProps) => {
  const time = times.map((i) => {
    return (
      <div
        key={i.text}
        className="flex flex-col items-center justify-center w-10 h-10 rounded-full bg-[var(--primary)] "
      >
        <span className="text-sm font-medium text-white">{i.num}</span>
        <span className="text-xss text-white">{i.text}</span>
      </div>
    );
  });

  return <div className="flex flex-row gap-4 mt-8">{time}</div>;
};
