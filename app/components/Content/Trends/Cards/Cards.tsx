import { Card } from "./Card/Card";
import { chairs } from "../../../../api/trendsData";

export const Cards = () => {
  return (
    <div className="flex gap-x-[30px] gap-y-[45px] justify-center flex-wrap mt-[70px]">
      <Card {...chairs} />
    </div>
  );
};
