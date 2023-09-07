import {
  AreaChart,
  Area,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function ChartItem(props) {
  // TODO: Create a way to pass the keys of the speeds to the ChartItem component
  console.log(props.data);
  const speeds = props.data.speeds;

  return (
    <article aria-label={`Track Length: ${props.data["track-length"]} kilometers`}>
      <h2 style={{ color: "var(--main-text-color)" }}>Track Length: {props.data["track-length"]}</h2>
      <hr />
      <ResponsiveContainer>
        <AreaChart
          width={400}
          height={150}
          data={speeds}
          margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
        >
          <defs>
            <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
          </defs>
          <Area
            type="monotone"
            dataKey="duration"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#color)"
          />
          <CartesianGrid stroke={"var(--main-text-color)"} strokeDasharray="5 5" />
          <XAxis stroke={"var(--main-text-color)"} dataKey="speed" />
          <YAxis stroke={"var(--main-text-color)"} />
          <Tooltip />
        </AreaChart>
      </ResponsiveContainer>
    </article>
  )
}