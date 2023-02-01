import { Button, Modal } from "react-bootstrap";
import modalStyles from "../css/Modal.module.css";
import { useState } from "react";

import ModalMarkdown from "./ModalMarkdown";

function ModalCodeBlock({ context }) {
  const [modalShow, setModalshow] = useState(false);
  const initModal = (event) => {
    return setModalshow(!event.target.value);
  };
  const closeButton = () => {
    return setModalshow(false);
  };
  const markdownText = context;
  return (
    <div className={modalStyles.modalDiv}>
      <Button
        className={modalStyles.modalBtn + " " + "btn"}
        onClick={initModal}
      >
        &lt; code &gt;
      </Button>
      <Modal show={modalShow} className={modalStyles.modalContents}>
        <Modal.Header closeButton onClick={closeButton}>
          <Modal.Title>Code</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ModalMarkdown context={markdownText} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={initModal} value={modalShow}>
            Close
          </Button>
          <Button variant="dark" onClick={initModal} value={modalShow}>
            Copy
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ModalCodeBlock;
