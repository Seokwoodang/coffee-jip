"use client";

import CoffeeItem from "@/components/coffee/coffeeItem";
import { NextPage } from "next";
import { useState } from "react";

interface Params {
  franchise: string;
}

interface Props {
  params: Params;
}

export interface CoffeeItem {
  name: string;
  calory: number;
  imageUrl: string;
}

export type CoffeeItemArray = CoffeeItem[];

const FranchiseMainPage: NextPage<Props> = ({ params }) => {
  const [coffeeList, setCoffeeList] = useState<CoffeeItemArray>([
    {
      name: "망고용과 리프레셔",
      calory: 136,
      imageUrl: "/starbucks/mango-refresher.jpg",
    },
    {
      name: "망고용과 리프레셔",
      calory: 136,
      imageUrl: "/starbucks/mango-refresher.jpg",
    },
    {
      name: "망고용과 리프레셔",
      calory: 136,
      imageUrl: "/starbucks/mango-refresher.jpg",
    },
    {
      name: "망고용과 리프레셔",
      calory: 136,
      imageUrl: "/starbucks/mango-refresher.jpg",
    },
    {
      name: "망고용과 리프레셔",
      calory: 136,
      imageUrl: "/starbucks/mango-refresher.jpg",
    },
  ]);

  return (
    <>
      <div>{params.franchise}</div>
      <div className="flex flex-wrap gap-4">
        {coffeeList.map((value, index) => {
          return <CoffeeItem key={index} props={value} />;
        })}
      </div>
    </>
  );
};

export default FranchiseMainPage;
