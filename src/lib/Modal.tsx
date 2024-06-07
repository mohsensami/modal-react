import React, { ReactNode } from 'react';
import styles from './Modal.module.css';

import 'animate.css';

interface ModalProps {
    isOpen: boolean;
    title: string;
    children: ReactNode;
    onClose: () => void;
    footer?: ReactNode;
    animationName: string;
    animateDuration?: string;
}

export const Modal: React.FC<ModalProps> = ({
    isOpen,
    title,
    children,
    onClose,
    footer,
    animationName,
    animateDuration = '0.3',
}) => {
    if (!isOpen) {
        return null;
    }

    return (
        <div className={styles.modalBackdrop} onClick={onClose}>
            <div
                style={
                    {
                        '--animate-duration': `${animateDuration}s`,
                    } as React.CSSProperties
                }
                className={` animate__animated animate__${animationName}`}
            >
                <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                    <div className={styles.modalHeader}>
                        <h2 className={styles.modalTitle}>{title}</h2>
                        <button className={styles.closeButton} onClick={onClose}>
                            &times;
                        </button>
                    </div>
                    <div className={styles.modalBody}>{children}</div>
                    {footer && <div className={styles.modalFooter}>{footer}</div>}
                </div>
            </div>
        </div>
    );
};
