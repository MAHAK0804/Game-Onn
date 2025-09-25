import { sportIcons, statusColors } from "@/constants/app.constants";
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
export interface IBtnTitle {
  title: string;
}
export interface IBackSide {
  categoryImg: StaticImageData | string;
}
export interface IVenueHost {
  venuename: string;
  reviews: number;
  desc: string;
}
export interface IVenue {
  name: string;
  rating: number;
  loc: string;
  reviews: number;
  sports: string[];
  // distance: number;
  // cost: string;
}

export interface IFilters {
  location: string;
  sport: string;
  date: string;
  timeSlot: string;
  [x: string]: string;
}

export interface ITopVenues {
  id: number;
  game: string;
  img: StaticImageData;
  venueName: string;
  reviews: number;
  desc: string;
}
export interface Venues {
  id: number;
  venueName: string;
  rating: number;
  loc: string;
  cost: string;
  distance: number;
  img: StaticImageData[];
  sport: string[];
  date: string;
  timeSlot: string;
  desc: string;
  multiImg: StaticImageData[];
  reviews: number;
}

export interface UsefulLink {
  id: number;
  text: string;
  route: string;
}

export interface SocialLink {
  text: string;
  media: string;
}

export interface LinksType {
  UsefullLinks: UsefulLink[];
  FollowUs: SocialLink[];
}
export interface IFields {
  name: string;
  type: string;
  placeholder: string;
  label: string;
}

export interface ILogin {
  emailId: string;
  password: string;
}
export interface IRegister {
  firstName: string;
  lastName: string;
  mobileNo: string;
  pinCode: string;
  emailId: string;
  password: string;
  confirmPassword: string;
}
export interface IContactUs {
  fullName: string;
  mobileNo: string;
  emailId: string;
  message: string;
}

export interface VenueType {
  id: number | string;
  image: StaticImageData;
  name: string;
  location: string;
  date: string;
  timeSlots: timeSlots[];
  price: VenuePriceDetails;
  status: keyof typeof statusColors;
  sport: keyof typeof sportIcons;
}
export interface VenuePriceDetails {
  subTotal: number;
  tax: number;
  bookingFees: number;
  total: number;
}
export interface timeSlots {
  id: number;
  sport: string;
  court: string;
  date: string;
  time: string;
  checkIn: string;
  checkOut: string;
}
