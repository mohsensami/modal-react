import * as React from "react";
import { ReactNode } from "react";
import "./Modal.css";

import "animate.css";

type ModalSize = "sm" | "md" | "lg";

interface ModalProps {
  isOpen: boolean;
  title: string;
  children: ReactNode;
  onClose: () => void;
  footer?: ReactNode;
  animationName: string;
  animateDuration?: string;
  size?: ModalSize;
  showCloseButton?: boolean;
  fullSize?: boolean;
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  title,
  children,
  onClose,
  footer,
  animationName,
  animateDuration = "0.3",
  size = "md",
  showCloseButton = true,
  fullSize = false,
}) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modalBackdrop" onClick={onClose}>
      <div
        style={
          {
            "--animate-duration": `${animateDuration}s`,
          } as React.CSSProperties
        }
        className={`animate__animated animate__${animationName}`}
      >
        <div
          className={`modalContent modalContent${size.toUpperCase()}${
            fullSize ? " fullSize" : ""
          }`}
          onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}
        >
          <div className="modalHeader">
            <h2 className="modalTitle">{title}</h2>
            {showCloseButton && (
              <button className="closeButton" onClick={onClose}>
                &times;
              </button>
            )}
          </div>
          <div className="modalBody">{children}</div>
          {footer && <div className="modalFooter">{footer}</div>}
        </div>
      </div>
    </div>
  );
};
