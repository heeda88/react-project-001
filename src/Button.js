import Protypes from "prop-types";
import styled from "./Button.module.css";
function Button({ text, eventFunchtion, fontSize = 16 }) {
  return (
    <button className={styled.btn} onClick={eventFunchtion}>
      {text}
    </button>
  );
}

Button.propTypes = {
  text: Protypes.string.isRequired,
};

export default Button;
