// import { Geist, Geist_Mono } from "next/font/google";
import FootballText from "@/components/FootballText";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export default function Home() {
  return (
    <div>
      {/* <p>Hi</p> */}
      <FootballText />
    </div>
  );
}
