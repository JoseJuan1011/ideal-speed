import React from 'react'

import styles from "./Form.module.css";
import Button from '../UI/Button/Button';

export default function Form() {
  return (
    <form className={styles["form"]} >
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
          <Button type="submit" buttonType="primary">Calculate</Button>
        </article>
        <article id="reset-action">
          <Button type="button" buttonType="secondary">Reset</Button>
        </article>
      </section>
    </form>
  )
}
