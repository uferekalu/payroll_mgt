import React, { useState } from 'react';
import GeneralModal from '../modal/GeneralModal';
import classes from './CreateElementModal.module.scss';
import stepOne from '../../images/step1.png';
import stepTwo from '../../images/step2.png';
import Input from '../input/Input';
import Select from '../select/Select';
import Textarea from '../textarea/Textarea';
import Button from '../button/Button';
import CreateElementNextStep from './CreateElementNextStep';

interface ICreateElement {
  createElement: boolean;
  setCreateElement: React.Dispatch<React.SetStateAction<boolean>>;
}

const CreateElementModal: React.FC<ICreateElement> = ({
  createElement,
  setCreateElement,
}) => {
  const [nextStep, setNextStep] = useState<boolean>(false);

  const handleNextStep = () => {
    setNextStep(true);
  };
  return (
    <GeneralModal
      size="lg"
      show={createElement}
      onHide={() => {
        setCreateElement(false);
      }}
      className={classes.createElement}
    >
      <h3 className={classes.createElement__heading}>Create Element</h3>
      <div className={classes.createElement__step__holder}>
        {nextStep ? (
          <img
            src={stepTwo}
            className={classes.createElement__step__holder__imgone}
            alt="step two"
          />
        ) : (
          <img
            src={stepOne}
            className={classes.createElement__step__holder__imgone}
            alt="step one"
          />
        )}
      </div>
      {nextStep ? (
        <CreateElementNextStep />
      ) : (
        <>
          <div className={classes.createElement__info}>
            <div className={classes.createElement__info__sectionone}>
              <div
                className={classes.createElement__info__sectionone__nameholder}
              >
                <span
                  className={
                    classes.createElement__info__sectionone__nameholder__name
                  }
                >
                  Name
                </span>
                <Input
                  type="text"
                  classname={
                    classes.createElement__info__sectionone__nameholder__input
                  }
                  placeholder="Input Name"
                />
              </div>
              <div
                className={
                  classes.createElement__info__sectionone__categoryholder
                }
              >
                <span
                  className={
                    classes.createElement__info__sectionone__categoryholder__category
                  }
                >
                  Element Category
                </span>
                <Select
                  classname={
                    classes.createElement__info__sectionone__categoryholder__selectcategory
                  }
                  text="Select Element Category"
                />
              </div>
            </div>
            <div className={classes.createElement__info__sectiontwo}>
              <div
                className={
                  classes.createElement__info__sectiontwo__classificationholder
                }
              >
                <span
                  className={
                    classes.createElement__info__sectiontwo__classificationholder__classification
                  }
                >
                  Element Classification
                </span>
                <Select
                  classname={
                    classes.createElement__info__sectiontwo__classificationholder__selectclassification
                  }
                  text="Select Classification"
                />
              </div>
              <div
                className={
                  classes.createElement__info__sectiontwo__payrunholder
                }
              >
                <span
                  className={
                    classes.createElement__info__sectiontwo__payrunholder__payrun
                  }
                >
                  Payrun
                </span>
                <Select
                  classname={
                    classes.createElement__info__sectiontwo__payrunholder__selectpayrun
                  }
                  text="Select Payrun"
                />
              </div>
            </div>
          </div>
          <div className={classes.createElement__description}>
            <span className={classes.createElement__description__text}>
              Description
            </span>
            <Textarea
              classname={classes.createElement__description__textarea}
              rows={4}
              placeholder="Input Description"
            />
          </div>
          <div className={classes.createElement__reporting}>
            <span className={classes.createElement__reporting__text}>
              Reporting Name
            </span>
            <Textarea
              classname={classes.createElement__reporting__textarea}
              rows={4}
              placeholder="Input Reporting Name"
            />
          </div>
          <div className={classes.createElement__btnaction}>
            <Button
              type="reset"
              btnClassName={classes.createElement__btnaction__cancel}
              onClick={() => {}}
              btnText="Cancel"
            />
            <Button
              type="submit"
              btnClassName={classes.createElement__btnaction__next}
              onClick={() => handleNextStep()}
              btnText="Next"
              // disabled
            />
          </div>
        </>
      )}
    </GeneralModal>
  );
};

export default CreateElementModal;
