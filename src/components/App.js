import styles from "./App.module.css";
import Chart from "./Chart/Chart";


import Form from "./Form/Form";

/* 
  Format of data for chart:
  {
    speed: number,
    "track-length": number, (X axis)
    duration: float, (Y axis)
  }
*/
function App() {
  return (
    <main className={styles["main"]}>
      <Chart />
      <Form />
    </main>
  );
}

export default App;
