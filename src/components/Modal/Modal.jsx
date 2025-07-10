import { useEffect, useRef } from 'react';
import Button from '../Button/Button';
import './Modal.css';

const Modal = ({ className = '', children, isOpen, onClose, noBtn }) => {
  const modalRef = useRef();

  console.log('soy el modal y me renderizo');

  useEffect(() => {
    if (modalRef.current) {
      if (isOpen) {
        modalRef.current.showModal();
      } else {
        modalRef.current.close();
      }
    }
  }, [isOpen]);

  const handleClose = () => {
    if (onClose) {
      onClose();
    }
  };

  const handleBtnClose = () => {
    if (modalRef.current) {
      modalRef.current.close();
    }
  };

  return (
    <dialog
      className={`modal ${className}`}
      ref={modalRef}
      onClose={handleClose}
    >
      {children}
      {!noBtn && (
        <Button
          className='close-btn-modal'
          text='Cerrar'
          onClick={handleBtnClose}
        />
      )}
    </dialog>
  );
};

export default Modal;
