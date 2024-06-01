import {DetailedHTMLProps, HTMLAttributes} from "react";

interface OfferProps  {
  pic: string;
  name: string;
  w: number;
  h: number;
  price: string;
}

export interface OffersProps extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>{
	offer: OfferProps[];
}
