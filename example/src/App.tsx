import React, { useState } from "react";
import { Modal } from "@mohsensami/modal";

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        animationName="bounceInDown"
        animateDuration="0.9"
      >
        <h2>Modal Title</h2>
        <p>This is a simple modal content.</p>
      </Modal>
    </div>
  );
};

export default App;
