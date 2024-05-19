import React, { FunctionComponent } from "react";
import { IFlower } from "../../models";


interface IProps {
  flower: IFlower;
}

export const FlowerCard: FunctionComponent<IProps> = ({ flower }) => {
  const { name, img, description, price } = flower;

  return (
    <div className="catalog-card">
      <h3>{name}</h3>
      <img src={img} alt={name} className="catalog-image" />
      <p className="catalog-description">{description}</p>
      <p className="catalog-price">{price} руб.</p>
      <button className="catalog-btn">Купить</button>
    </div>
  );
};
