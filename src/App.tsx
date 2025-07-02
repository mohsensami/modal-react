// example/App.jsx
import { useState } from "react";
import Modal from "./components/Modal";

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div style={{ padding: "2rem" }}>
      <button onClick={openModal}>Open Modal</button>

      <Modal
        isOpen={isModalOpen}
        title="My Modal"
        onClose={closeModal}
        footer={<button onClick={closeModal}>Close</button>}
        animationName="bounceInDown"
        animateDuration="0.9"
        size="sm"
        showCloseButton={false}
      >
        <p>This is the modal content.</p>
      </Modal>
    </div>
  );
};

export default App;
