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
