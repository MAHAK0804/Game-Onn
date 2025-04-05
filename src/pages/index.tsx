// import { Geist, Geist_Mono } from "next/font/google";
import BasketBallPlayer from "@/components/BasketBallPlayer";
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
    <div className="flex-row">
      <div className="relative z-0">
        <FootballText />
      </div>
      <div className="relative z-10">
        <BasketBallPlayer />
      </div>
    </div>
  );
}
