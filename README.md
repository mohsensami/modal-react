# Modal React

A customizable modal component built with React and TypeScript. The component uses CSS Modules for styling.

## Manual Setup

1- Add the Modal Component Files

-   Modal.tsx
-   Modal.module.css
-   App.tsx (Example usage)
-   App.css (Optional, for styling the example)

2- Ensure your project supports CSS Modules. This can typically be done by configuring your build tool (e.g., Webpack or Create React App).

## Demo

[**Live Demo**](#)

![modal-react]()

## Installation

To use the Modal component, you need to have a React environment set up. You can then add the Modal component files to your project.

The package can be installed via [npm](https://github.com/npm/cli):

```
npm install modal-react
```

## Usage

React Component:

```javascript
import React, { useState } from 'react';
import Modal from 'Modal-react';

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
            >
                <p>This is the modal content.</p>
            </Modal>
        </div>
    );
};

export default App;
```

## Props

Here are the props that can be passed to the `<Modal />` component:

| Name       | Type         | Required | Description                                                |
| :--------- | :----------- | :------- | :--------------------------------------------------------- |
| `isOpen`   | `boolean`    | True     | Determines whether the modal is visible or not.            |
| `title`    | `string`     | False    | The title of the modal, displayed in the header.           |
| `children` | `ReactNode`  | False    | The content to display inside the modal.                   |
| `onClose`  | `() => void` | False    | Function to call when the modal is requested to be closed. |
| `footer`   | `ReactNode`  | False    | (optional): The content to display in the modal footer.    |

## Authors

-   [@mohsensami](https://github.com/mohsensami)

## Contributing

If you want to contribute to this project and make it better, your help is very welcome. Create an issue or submit a pull request.
