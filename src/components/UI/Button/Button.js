import PropTypes from 'prop-types';

import styles from "./Button.module.css";

export default function Button({children, buttonType, ...props}) {
  const extraStylesOptions = {
    "primary": styles["primary"],
    "secondary": styles["secondary"],
  }

  const extraStyles = extraStylesOptions[buttonType]; 
  
  return (
    <button className={`${styles["button"]} ${extraStyles}`} {...props}>
      {children}
    </button>
  )
}

Button.propTypes = {
  buttonType: PropTypes.oneOf(["primary", "secondary"]).isRequired,
};