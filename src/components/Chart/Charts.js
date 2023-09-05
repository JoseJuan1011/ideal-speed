// import React from "react";

import styles from "./Charts.module.css";

import ChartItem from "./ChartItem/ChartItem";

export default function Charts(props) {
  const trackLengths = props.data;
  const trackLengthsKeys = Object.keys(trackLengths);

  const chartItems = trackLengthsKeys.map((key) => {
    const chartData = trackLengths[key];
    const finalElement = <ChartItem key={key} data={chartData} />;
    return finalElement;
  })

  return (<section className={styles.charts} aria-label="Charts Section">
    {chartItems}
  </section>)
}