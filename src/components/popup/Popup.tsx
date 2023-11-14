import React, { ReactNode, useEffect, useRef, useState } from 'react';
import './Popup.module.scss';
import classes from './Popup.module.scss';

interface IPopup {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  position?: { top: number; left: number };
}

const Popup: React.FC<IPopup> = ({ isOpen, onClose, children, position }) => {
  const popupRef = useRef<HTMLDivElement>(null);
  const [popupStyle, setPopupStyle] = useState<{ top?: number; left?: number }>(
    {},
  );

  useEffect(() => {
    const updatedPopupPosition = () => {
      if (isOpen && position && popupRef.current) {
        const { top, left } = position;
        const rect = popupRef.current.getBoundingClientRect();
        const offsetTop = top - rect.height;
        setPopupStyle({ top: offsetTop, left });
      }
    };
    updatedPopupPosition();
    window.addEventListener('scroll', updatedPopupPosition);

    return () => {
      window.removeEventListener('scroll', updatedPopupPosition);
    };
  }, [isOpen, position]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isOpen &&
        popupRef.current &&
        !popupRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose, isOpen]);

  return (
    <div
      className={classes.popup}
      ref={popupRef}
      style={
        isOpen ? { ...popupStyle, position: 'fixed' } : { display: 'none' }
      }
    >
      {isOpen && <div className={classes.popup__content}>{children}</div>}
    </div>
  );
};

export default Popup;
