import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";

import styles from "../css/About.module.css";
import modalStyles from "../css/Modal.module.css";

import FormEaxmple from "../components/FormExample";
import FormExampleReact from "../components/FormExampleReact";
import NavScrollExampleReact from "../components/NavScrollExampleReact";
import NavExample from "../components/NavExample";
import ModalCodeBlock from "../components/ModalCodeBlock";
import ButtonExample from "../components/ButtonExample";

import componentsJson from "../data/componentCodeData";

function About() {
  const context = componentsJson;
  return (
    <div className={styles.wrapper + " " + styles.modalFlag}>
      <Card className={styles.card_contents}>
        <h1>About</h1>
        <br></br>
        <h5>Lecture</h5>
        <p>
          From :{" "}
          <a href="https://nomadcoders.co/react-for-beginners">
            https://nomadcoders.co/react-for-beginners
          </a>
        </p>
        <p>
          With : <a href="https://yts.mx/api">https://yts.mx/api</a>
        </p>
        <br></br>
        <h5>CSS</h5>
        <p>Bootstrap for Reactjs </p>
        <p>
          For reactjs :{" "}
          <a href="https://react-bootstrap.github.io/">
            https://react-bootstrap.github.io/
          </a>
        </p>
        <p>
          With Them :{" "}
          <a href="https://bootswatch.com/morph/">
            https://bootswatch.com/morph/
          </a>
        </p>
        <br></br>
      </Card>

      <Card className={styles.card_contents}>
        <h2> React-bootstrap</h2>
        <br></br>
        <h5>Button</h5>
        <div className={modalStyles.modalFlag}>
          <ModalCodeBlock context={context["ButtonExample"]} />
          <ButtonExample />
        </div>
        <br></br>
        <h5>Nav</h5>
        <br></br>
        <div className={modalStyles.modalFlag}>
          <ModalCodeBlock context={context["NavScrollExampleReact"]} />
          <NavScrollExampleReact />
        </div>
        <br></br>
        <h5> Form</h5>
        <div className={modalStyles.modalFlag}>
          <ModalCodeBlock context={context["FormExampleReact"]} />
          <FormExampleReact />
        </div>
      </Card>

      <Card className={styles.card_contents}>
        <br></br>
        <h2> JS </h2>
        <NavExample />
        <br></br>
        <FormEaxmple />
        <br></br>
      </Card>
    </div>
  );
}

export default About;
