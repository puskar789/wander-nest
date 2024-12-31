import React, { useEffect, useState } from "react";
import moment from "moment";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import useGlobal from "../../zustand/useGlobal";

const months = 5;
const today = new Date();
const tempDate = [];
for (let i = 0; i < months; i++) {
  const date = new Date(
    today.getFullYear(),
    today.getMonth() - (months - (i + 1))
  );
  tempDate.push({
    date,
    name: moment(date).format("MMM YYYY"),
    users: 0,
    rooms: 0,
  });
}

export default function AreaRoomsUsers() {
  const { rooms, users } = useGlobal();
  const [data, setData] = useState([]);

  useEffect(() => {
    for (let i = 0; i < months; i++) {
      tempDate[i].users = 0;
    }
    users.forEach((user) => {
      for (let i = 0; i < months; i++) {
        if (moment(tempDate[i].date).isSame(user?.createdAt, "month")) {
          tempDate[i].users++;
        }
      }
    });
    setData([...tempDate]);
  }, [users]);

  useEffect(() => {
    for (let i = 0; i < months; i++) {
      tempDate[i].rooms = 0;
    }
    rooms.forEach((room) => {
      for (let i = 0; i < months; i++) {
        if (moment(tempDate[i].date).isSame(room?.createdAt, "month")) {
          tempDate[i].rooms++;
        }
      }
    });
    setData([...tempDate]);
  }, [rooms]);
  return (
    <div className="w-full" style={{ height: 300, minWidth: 250 }}>
      <ResponsiveContainer>
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 20,
            right: 40,
            left: 5,
            bottom: 5,
          }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="users"
            stackId="1"
            stroke="#8884d8"
            fill="#8884d8"
          />
          <Area
            type="monotone"
            dataKey="rooms"
            stackId="1"
            stroke="#82ca9d"
            fill="#82ca9d"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
