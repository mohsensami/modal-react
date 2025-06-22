# @mohsensami/modal

A lightweight, accessible, and easy-to-use React modal component.

## Features

- Simple API
- Keyboard accessible (closes on Escape key)
- Prevents background scrolling when open
- Click outside to close
- Customizable content

## Installation

```bash
npm install @mohsensami/modal
# or
yarn add @mohsensami/modal
```

> **Peer dependencies:**
>
> - React >=16.8.0
> - ReactDOM >=16.8.0

## Usage

```jsx
import { Modal } from "@mohsensami/modal";
import { useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <h2>My Modal Content</h2>
      </Modal>
    </div>
  );
}

export default App;
```

## Props

| Name     | Type              | Required | Description                                 |
| -------- | ----------------- | -------- | ------------------------------------------- |
| isOpen   | `boolean`         | Yes      | Controls whether the modal is open          |
| onClose  | `() => void`      | Yes      | Called when the modal requests to be closed |
| children | `React.ReactNode` | Yes      | Modal content                               |

## Behavior

- Clicking the overlay or the close button will call `onClose`.
- Pressing the Escape key will call `onClose`.
- When open, background scrolling is disabled.

## Styling

The modal comes with default styles. To override, use CSS modules or target the following classes:

- `.modalOverlay`
- `.modalContent`
- `.modalClose`

## License

MIT
