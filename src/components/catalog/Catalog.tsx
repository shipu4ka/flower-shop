import React from "react";
import { FlowerCard } from "./FlowerCard";
import './Catalog.css';

const mockedFlowers = [
  {
    name: "Фиалка",
    img: ".././assets/images/fialka.jpg",
    description: "Oдни из самых популярных комнатных растений. В уходе они многим кажутся простыми, но на самом деле у них немало прихотей",
    price: "400"
  },
  {
    name: "Герань",
    img: ".././assets/images/geran.jpg",
    description: "Неприхотливое растение со специфическим ароматом.",
    price: "500"
  },
  {
    name: "Хлорофитум",
    img: ".././assets/images/hlorofitum.jpg",
    description: "Растение не имеет типичного стебля, его длинные листья собраны в прикорневую розетку, из которых время от времени появляются свисающие цветоносы.",
    price: "600"
  },
  {
    name: "Калатея",
    img: ".././assets/images/fialka.jpg",
    description: "Самая красивая",
    price: "456"
  },
  {
    name: "Кактус",
    img: ".././assets/images/fialka.jpg",
    description: "Самая красивая",
    price: "222"
  },
  {
    name: "Рео",
    img: ".././assets/images/fialka.jpg",
    description: "Самая красивая",
    price: "78"
  },
  {
    name: "Фикус",
    img: ".././assets/images/fialka.jpg",
    description: "Самая красивая",
    price: "89"
  },
  {
    name: "Толстянка обыкновенная",
    img: ".././assets/images/fialka.jpg",
    description: "Самая красивая",
    price: "544"
  },
  {
    name: "Филодендрон",
    img: ".././assets/images/fialka.jpg",
    description: "Самая красивая",
    price: "3455"
  },
  {
    name: "Пальма",
    img: ".././assets/images/fialka.jpg",
    description: "Самая красивая",
    price: "7655"
  },
];

export const Catalog = () => {
  
  return (
    <div className="catalog-flowers">
      {mockedFlowers.map((mockedFlower)=>{
        return <FlowerCard flower={mockedFlower}/>
      })}
      
    </div>
  );
};
