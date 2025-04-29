import { StaticImageData } from "next/image";

export interface IHeaderLink {
  name: string;
  route: string;
}
export interface IImageLabels {
  img: StaticImageData | string;
  text: string;
  details: string;
}
export interface ILabelText {
  text: string;
}
export interface IContunieBtn {
  title: string;
}
export interface IBackSide {
  categoryImg: StaticImageData | string;
}
export interface IVenueHost {
  img: StaticImageData | string;
  name: string;
  date: string;
  heading: string;
  details: string;
}
export interface IVenue {
  name: string;
  rating: number;
  loc: string;
  distance: number;
  cost: string;
}

export interface IFilters {
  location: string;
  sport: string;
  date: string;
  timeSlot: string;
  [x: string]: string;
}
