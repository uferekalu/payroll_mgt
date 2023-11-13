import React from 'react';
import GeneralModal from '../modal/GeneralModal';
import classes from './SuccessModal.module.scss';
import Button from '../button/Button';

interface ISuccessModal {
  successModal: boolean;
  setSuccessModal: React.Dispatch<React.SetStateAction<boolean>>;
  imgSrc: string;
  alt: string;
  successMsg: string;
  btnText: string;
  onClick: () => void;
}

const SuccessModal: React.FC<ISuccessModal> = ({
  successModal,
  setSuccessModal,
  imgSrc,
  alt,
  successMsg,
  btnText,
  onClick,
}) => {
  return (
    <GeneralModal
      size="sm"
      show={successModal}
      onHide={() => {
        setSuccessModal(false);
      }}
      className={classes.successmodal}
    >
      <div className={classes.successModal__iconholder}>
        <img
          src={imgSrc}
          alt={alt}
          className={classes.successModal__iconholder__img}
        />
      </div>
      <span className={classes.successmodal__successmsg}>{successMsg}</span>
      <div className={classes.successModal__btnholder}>
        <Button
          type="submit"
          btnClassName={classes.successModal__btnholder__btn}
          btnText={btnText}
          onClick={onClick}
        />
      </div>
    </GeneralModal>
  );
};

export default SuccessModal;
