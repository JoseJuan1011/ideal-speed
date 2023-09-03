// import React from "react";
import {
  AreaChart,
  Area,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function Chart() {
  const DUMMY_DATA = [
    { "track-length": 1, duration: 2.1 },
    { "track-length": 2, duration: 1.4 },
    { "track-length": 3, duration: 1.3 },
    { "track-length": 4, duration: 0.2 },
  ];

  return (
    <ResponsiveContainer width="50%" height="60%">
      <AreaChart
        width={600}
        height={300}
        data={DUMMY_DATA}
        margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
      >
        <defs>
          <linearGradient id="color120" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
          </linearGradient>
        </defs>
        <Area
          type="monotone"
          dataKey="duration"
          stroke="#8884d8"
          fillOpacity={1}
          fill="url(#color120)"
        />
        <CartesianGrid stroke={"var(--main-text-color)"} strokeDasharray="5 5" />
        <XAxis stroke={"var(--main-text-color)"} dataKey="track-length" />
        <YAxis stroke={"var(--main-text-color)"} />
        <Tooltip />
      </AreaChart>
    </ResponsiveContainer>
  )
}