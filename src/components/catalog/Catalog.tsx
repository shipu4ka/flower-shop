import React, { useEffect, useState } from "react";
import { FlowerCard } from "./FlowerCard";
import "./Catalog.css";
import axios from "axios";
import { IFlower } from "../../models";


export const Catalog = () => {
  const [flowers, setFlowers] = useState<IFlower[]>([]);

  useEffect(() => {
    axios.get("flowers.json").then((res) => {
      setFlowers(res.data);
    })
  }, []);

  return (
    <div className="catalog-flowers">
      {flowers ? flowers.map((mockedFlower) => {
        return <FlowerCard flower={mockedFlower} key={mockedFlower.name} />;
      }): null}
    </div>
  );
};
