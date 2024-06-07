import React, { useState } from 'react';
import { Modal } from './lib/Modal';
// import './App.css';

const App: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="App">
            <h1>My App</h1>
            <button onClick={openModal}>Open Modal</button>
            <Modal
                isOpen={isModalOpen}
                title="My Modal"
                onClose={closeModal}
                footer={<button onClick={closeModal}>Close</button>}
                animationName="bounceInDown"
                animateDuration="0.9"
            >
                <p>This is the modal content.</p>
            </Modal>
        </div>
    );
};

export default App;
