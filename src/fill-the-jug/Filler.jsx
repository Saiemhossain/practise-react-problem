/* eslint-disable no-unused-vars */
import { useState } from "react";
import Jug from "./Jug";

export default function Filler() {

const [fillPercentage, setFillPercentage] = useState(0);

  

  const fillTheJug = () => {
    setFillPercentage((pre) => {
      if (pre === 0) return 1;
      const change = pre + pre * 0.4;
      if (change > 100) return 100;
      return change;
    })
  }
  const emptyTheJug = () => {
    setFillPercentage((pre) => {
      return pre = pre - pre * 0.2
})
  }

  return (
    <div>
      <Jug fillBy={fillPercentage} />
      <div className="btn-area">
        <button onClick={fillTheJug} className="btn-span">
          &#8593;
        </button>
        <button onClick={emptyTheJug} className="btn-span-2">
          <span>&#8595;</span>
        </button>
      </div>
    </div>
  );
}
