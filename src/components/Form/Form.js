import { useState } from 'react'

import styles from "./Form.module.css";
import Button from '../UI/Button/Button';

export default function Form(props) {
  const USER_INPUT_PROPERTIES = new Map(Object.entries({
    "speed": Symbol("speed"),
    "track-length": Symbol("track-length"),
  }))

  const [userInput, setUserInput] = useState({
    "speed": 1,
    "track-length": 1,
  });

  const userInputPropertyHandler = (property, value) => {
    if (property === undefined) {
      return;
    }
    const propertyName = property.description;
    const propertyNotExisting = !USER_INPUT_PROPERTIES.has(propertyName);
    const propertyValueNotEqual = USER_INPUT_PROPERTIES.get(propertyName) !== property;
    if (propertyNotExisting || propertyValueNotEqual) {
      return;
    }
    setUserInput((prevUserInput) => {
      return {...prevUserInput, [propertyName]: value};
    })
  }

  const submitHandler = (e) => {
    e.preventDefault();
    props.calculateHandler(userInput);
  }

  const resetHandler = (e) => {
    setUserInput({
      speed: 1,
      "track-length": 1,
    })
  }

  return (
    <form className={styles["form"]} onSubmit={submitHandler}>
      <section className={styles["input-group"]}>
        <article id="speed-input">
          <label htmlFor="speed">Enter the speed: </label>
          <input type="number" name="speed" id="speed" min="1" step="1" onChange={(e) => userInputPropertyHandler(USER_INPUT_PROPERTIES.get("speed"),e.target.value)} value={userInput.speed}/>
        </article>
        <article id="track-length-input">
          <label htmlFor="track-length">Enter the track's length: </label>
          <input
            type="number"
            name="track-length"
            id="track-length"
            min="0.1"
            step="0.1"
            onChange={(e) => userInputPropertyHandler(USER_INPUT_PROPERTIES.get("track-length"),e.target.value)}
            value={userInput["track-length"]}
          />
        </article>
      </section>
      <section className={styles["actions-group"]}>
        <article id="calculate-action">
          <Button type="submit" buttonType="primary">Calculate</Button>
        </article>
        <article id="reset-action">
          <Button type="button" buttonType="secondary" onClick={resetHandler}>Reset</Button>
        </article>
      </section>
    </form>
  )
}
