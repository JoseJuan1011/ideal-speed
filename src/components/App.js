import { useState } from "react";
import styles from "./App.module.css";
import Charts from "./Chart/Charts";


import Form from "./Form/Form";

/* 
  Format of data for chart:
  {
    speed: number,
    "track-length": number, (X axis)
    duration: float, (Y axis)
  }
*/
/*
  Format of Map for chart:
  {
    "track-length": number as key
    "chart-Map": Map<speed: number, duration: float>
  }
*/
/*
  The objective here will be to have one chart for every track length,
  so when the track length is the same but with different speed it calculates 
  the duration and adds it to the corresponding chart.
*/
function App() {
  // const DUMMY_DATA = [
  //   { "track-length": 1, duration: 2.1 },
  //   { "track-length": 2, duration: 1.4 },
  //   { "track-length": 3, duration: 1.3 },
  //   { "track-length": 4, duration: 0.2 },
  // ];
  const HOUR_IN_MINUTES = 60;

  /*
  Structure of every element in the array
    {
      "track-length": number,
      "speeds": Array[Object{
        "speed": number,
        "duration": float,
      }]
    }
  */
  const [chartData, setChartData] = useState([]);

  /*
  In the case of calculate I want to check if there are any tracks length
  equal to the introduced, because then I will add the duration and the speed
  */
  const calculateHandler = (userInput) => {
    userInput.speed = parseInt(userInput.speed);
    const kmPerMin = (userInput.speed / HOUR_IN_MINUTES);
    const trackLength = parseInt(userInput["track-length"]);
    const duration = Math.fround(trackLength / kmPerMin);
    setChartData((prevChartData) => {
      const newChartData = [...prevChartData];

      const existingTrackLength = prevChartData.find((obj) => {
        return obj["track-length"] === trackLength;
      });
      if (existingTrackLength === undefined) {
        newChartData.push({
          "track-length": trackLength,
          speeds: [{
            speed: userInput.speed,
            duration: duration,
          }]
        })
        return newChartData;
      }
      const speedsHasInputSpeed = existingTrackLength.speeds.some((obj) => obj.speed === userInput.speed);
      if (speedsHasInputSpeed) {
        return newChartData;
      }
      existingTrackLength.speeds.push({
        speed: userInput.speed,
        duration: duration,
      })
      existingTrackLength.speeds.sort((a, b) => {
        if (a.speed < b.speed) {
          return -1;
        }
        if (a.speed > b.speed) {
          return 1;
        }
        return 0;
      })
      return newChartData;
    })
  }

  return (
    <main className={styles["main"]}>
      {chartData.length > 0 && <Charts data={chartData}/>}
      {console.log(chartData)}
      <Form calculateHandler={calculateHandler}/>
    </main>
  );
}

export default App;
