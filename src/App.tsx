// example/App.jsx
import React, { useState } from "react";
import Modal from "./components/Modal";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={{ padding: "2rem" }}>
      <h1>React Simple Modal Demo</h1>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <h2>Hello from Modal!</h2>
        <p>This is a simple modal component.</p>
      </Modal>
    </div>
  );
};

export default App;
