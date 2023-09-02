import styles from "./App.module.css";

import {
  AreaChart,
  Area,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

/* 
  Format of data for chart:
  {
    speed: number,
    "track-length": number, (X axis)
    duration: float, (Y axis)
  }
*/
function App() {
  const DUMMY_DATA = [
    { "track-length": 1, duration: 2.1 },
    { "track-length": 2, duration: 1.4 },
    { "track-length": 3, duration: 1.3 },
    { "track-length": 4, duration: 0.2 },
  ];

  const renderLineChart = (
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
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="track-length" />
        <YAxis />
        <Tooltip />
      </AreaChart>
    </ResponsiveContainer>
  );

  return (
    <main className={styles["main"]}>
      {renderLineChart}
      <form className={styles["form"]}>
        <section className={styles["input-group"]}>
          <article id="speed-input">
            <label htmlFor="speed">Enter the speed: </label>
            <input type="number" name="speed" id="speed" min="1" step="1" />
          </article>
          <article id="track-length-input">
            <label htmlFor="track-length">Enter the track's length: </label>
            <input
              type="number"
              name="track-length"
              id="track-length"
              min="0.1"
              step="0.1"
            />
          </article>
        </section>
        <section className={styles["actions-group"]}>
          <article id="calculate-action">
            <button type="submit">Calculate</button>
          </article>
          <article className="reset-action">
            <button type="button">Reset</button>
          </article>
        </section>
      </form>
    </main>
  );
}

export default App;
