import soccer from "../../public/assets/soccerBall.png";
import closeUpBasket from "../../public/assets/closeBasketBall.png";
import sportCar from "../../public/assets/sportCar.png";
import redPing from "../../public/assets/redPing.png";

export const categoryData = [
  { text: "football", img: [soccer, closeUpBasket] },
  { text: "BasketBall", img: [closeUpBasket, soccer] },
  { text: "Car Sport", img: [sportCar, redPing] },
  { text: "Table Tennis", img: [redPing, sportCar] },
];
