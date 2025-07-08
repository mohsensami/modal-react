import React, { ReactNode } from "react";
import styles from "./Modal.module.css";

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
    <div className={styles.modalBackdrop} onClick={onClose}>
      <div
        style={
          {
            "--animate-duration": `${animateDuration}s`,
          } as React.CSSProperties
        }
        className={`animate__animated animate__${animationName}`}
      >
        <div
          className={`${styles.modalContent} ${
            styles[`modalContent${size.toUpperCase()}`]
          }${fullSize ? ` ${styles.fullSize}` : ""}`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className={styles.modalHeader}>
            <h2 className={styles.modalTitle}>{title}</h2>
            {showCloseButton && (
              <button className={styles.closeButton} onClick={onClose}>
                &times;
              </button>
            )}
          </div>
          <div className={styles.modalBody}>{children}</div>
          {footer && <div className={styles.modalFooter}>{footer}</div>}
        </div>
      </div>
    </div>
  );
};
