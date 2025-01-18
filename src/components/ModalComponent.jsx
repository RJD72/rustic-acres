/* eslint-disable react/prop-types */
import { Modal, Button } from "flowbite-react";
import { customModalTheme } from "../customThemes/modalTheme";
import { customButtonTheme } from "../customThemes/buttonTheme";

const ModalComponent = ({ openModal, setOpenModal, testimonial }) => {
  return (
    <Modal
      show={openModal}
      onClose={() => setOpenModal(false)}
      theme={customModalTheme}
    >
      <Modal.Header>Full Testimonial</Modal.Header>
      <Modal.Body>
        <p className="text-gray-700">{testimonial}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button
          theme={customButtonTheme}
          color="button"
          onClick={() => setOpenModal(false)}
        >
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
export default ModalComponent;
