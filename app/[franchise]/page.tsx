"use client";

import { NextPage } from "next";
import { useState } from "react";

interface Params {
  franchise: string;
}

interface Props {
  params: Params;
}

const FranchiseMainPage: NextPage<Props> = ({ params }) => {
  const [coffeeList, setCoffeeList] = useState([1, 2, 3, 4, 5]);

  return (
    <>
      <div>{params.franchise}</div>
      <div>
        {coffeeList.map((value, index) => {
          return <div>dsdds</div>;
        })}
      </div>
    </>
  );
};

export default FranchiseMainPage;
