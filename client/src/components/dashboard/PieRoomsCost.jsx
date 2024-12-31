import React, { useEffect, useState } from "react";
import { PieChart, Pie, Cell, Tooltip } from "recharts";
import useGlobal from "../../zustand/useGlobal";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export default function PieRoomsCost() {
  const { rooms } = useGlobal();
  const [costGroups, setCostGroups] = useState([]);

  useEffect(() => {
    let free = 0,
      lessThan15 = 0,
      between15And35 = 0,
      moreThan35 = 0;
    rooms.forEach((room) => {
      if (room.price === 0) {
        free++;
      } else if (room.price < 15) {
        lessThan15++;
      } else if (room.price <= 35) {
        between15And35++;
      } else {
        moreThan35++;
      }
    });
    setCostGroups([
      { name: "Free Stay", qty: free },
      { name: "Less than $15", qty: lessThan15 },
      { name: "Between $15 and $35", qty: between15And35 },
      { name: "More than $35", qty: moreThan35 },
    ]);
  }, [rooms]);
  return (
    <div className="h-full flex justify-center items-center gap-16">
      <PieChart width={200} height={200}>
        <Pie
          data={costGroups}
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={80}
          fill="#8884d8"
          dataKey="qty"
        >
          {costGroups.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
      <div className="flex flex-col text-black">
        <h1 className="text-center text-lg font-semibold">Rooms Cost</h1>
        <div className="mt-4 flex justify-between gap-10">
          {costGroups.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-center items-center"
            >
              <div
                className="w-6 h-6"
                style={{ backgroundColor: COLORS[idx] }}
              ></div>
              <h3>{item.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
