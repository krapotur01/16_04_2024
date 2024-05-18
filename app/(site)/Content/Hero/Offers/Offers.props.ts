interface OfferProps  {
  pic: string;
  name: string;
  w: number;
  h: number;
  price: string;
}

export interface OffersProps {
	[index: number]: OfferProps;
}
