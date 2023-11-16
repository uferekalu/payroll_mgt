import React, { useEffect, useState, useMemo } from 'react';
import GeneralModal from '../modal/GeneralModal';
import classes from './CreateElementModal.module.scss';
import stepOne from '../../images/step1.png';
import stepTwo from '../../images/step2.png';
import Input from '../input/Input';
import Textarea from '../textarea/Textarea';
import Button from '../button/Button';
import CreateElementNextStep from './CreateElementNextStep';
import { Modal } from 'react-bootstrap';
import axios from 'axios';
import { LookupValueObject } from '../../utils/interface';
import { baseUrl } from '../../slices/api';

interface ICreateElement {
  lookUpValueIds: {
    payRunValueId: string;
    classificationValueId: string;
    categoryValueId: string;
  };
  createElement: boolean;
  setCreateElement: React.Dispatch<React.SetStateAction<boolean>>;
  setCreateElementSuccess: React.Dispatch<React.SetStateAction<boolean>>;
  stepOneFormData: {
    name: string;
    elementCategory: string;
    elementClassification: string;
    payrun: string;
    description: string;
    reportingName: string;
  };
  setStepOneFormData: React.Dispatch<
    React.SetStateAction<{
      name: string;
      elementCategory: string;
      elementClassification: string;
      payrun: string;
      description: string;
      reportingName: string;
    }>
  >;
  errors: {
    name: string;
    elementCategory: string;
    elementClassification: string;
    payrun: string;
    description: string;
    reportingName: string;
    effectiveStartDate: string;
    effectiveEndDate: string;
    processingType: string;
    payFrequency: string;
    selectedPayMonths: string;
    prorate: string;
  };
  setErrors: React.Dispatch<
    React.SetStateAction<{
      name: string;
      elementCategory: string;
      elementClassification: string;
      payrun: string;
      description: string;
      reportingName: string;
      effectiveStartDate: string;
      effectiveEndDate: string;
      processingType: string;
      payFrequency: string;
      selectedPayMonths: string;
      prorate: string;
    }>
  >;
  setLookUpValueIds: React.Dispatch<
    React.SetStateAction<{
      payRunValueId: string;
      classificationValueId: string;
      categoryValueId: string;
    }>
  >;
  stepTwoFormData: {
    effectiveStartDate: Date | null;
    effectiveEndDate: Date | null;
    processingType: string;
    payFrequency: string;
    selectedPayMonths: string[];
    prorate: string;
    status: boolean;
  };
  setStepTwoFormData: React.Dispatch<
    React.SetStateAction<{
      effectiveStartDate: Date | null;
      effectiveEndDate: Date | null;
      processingType: string;
      payFrequency: string;
      selectedPayMonths: string[];
      prorate: string;
      status: boolean;
    }>
  >;
  selectedStartDate: Date | null;
  setSelectedStartDate: React.Dispatch<React.SetStateAction<Date | null>>;
  selectedEndDate: Date | null;
  setSelectedEndDate: React.Dispatch<React.SetStateAction<Date | null>>;
  processingType: string;
  setProcessingType: React.Dispatch<React.SetStateAction<string>>;
  monthlySelectedMonths: string;
  setMonthlySelectedMonths: React.Dispatch<React.SetStateAction<string>>;
  selectedMonths: string[];
  setSelectedMonths: React.Dispatch<React.SetStateAction<string[]>>;
  prorate: string;
  setProrate: React.Dispatch<React.SetStateAction<string>>;
}

const CreateElementModal: React.FC<ICreateElement> = ({
  createElement,
  setCreateElement,
  setCreateElementSuccess,
  stepOneFormData,
  setStepOneFormData,
  errors,
  setErrors,
  setLookUpValueIds,
  stepTwoFormData,
  setStepTwoFormData,
  selectedStartDate,
  setSelectedStartDate,
  selectedEndDate,
  setSelectedEndDate,
  processingType,
  setProcessingType,
  monthlySelectedMonths,
  setMonthlySelectedMonths,
  selectedMonths,
  setSelectedMonths,
  prorate,
  setProrate,
  lookUpValueIds,
}) => {
  const [nextStep, setNextStep] = useState<boolean>(false);
  const [elementCategories, setElementCategories] = useState<
    LookupValueObject[]
  >([]);
  const [elementClassifications, setElementClassifications] = useState<
    LookupValueObject[]
  >([]);
  const [payRuns, setPayruns] = useState<LookupValueObject[]>([]);

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setStepOneFormData({
      ...stepOneFormData,
      [name]: value,
    });
  };

  const elementCategoriesData = useMemo(() => {
    if (stepOneFormData.elementClassification === '7') {
      return elementCategories.filter((cat) => cat.name.includes('Deduction'));
    }
    if (stepOneFormData.elementClassification === '8') {
      return elementCategories.filter((cat) => cat.name.includes('Earning'));
    }
    return elementCategories;
  }, [elementCategories, stepOneFormData.elementClassification]);

  const payRunValueId = useMemo(() => {
    if (stepOneFormData?.payrun) {
      const prun = payRuns.filter(
        (pr) => String(pr.id) === stepOneFormData?.payrun,
      )[0];
      return prun?.lookupId;
    }
  }, [payRuns, stepOneFormData.payrun]);

  const classificationValueId = useMemo(() => {
    if (stepOneFormData?.elementClassification) {
      const eClass = elementClassifications.filter(
        (ec) => String(ec.id) === stepOneFormData?.elementClassification,
      )[0];
      return eClass?.lookupId;
    }
  }, [elementClassifications, stepOneFormData.elementClassification]);

  const categoryValueId = useMemo(() => {
    if (stepOneFormData?.elementCategory) {
      const eCat = elementCategories.filter(
        (ecat) => String(ecat.id) === stepOneFormData?.elementCategory,
      )[0];
      return eCat?.lookupId;
    }
  }, [elementCategories, stepOneFormData.elementCategory]);

  useEffect(() => {
    const fetchLookups = async () => {
      try {
        const req1 = axios.get(`${baseUrl}/lookups/1/lookupvalues`);
        const req2 = axios.get(`${baseUrl}/lookups/2/lookupvalues`);
        const req3 = axios.get(`${baseUrl}/lookups/5/lookupvalues`);

        const responses = await Promise.all([req1, req2, req3]);

        const elementCat = responses[0].data;
        const elementClass = responses[1].data;
        const payrun = responses[2].data;

        setElementCategories(elementCat);
        setElementClassifications(elementClass);
        setPayruns(payrun);
      } catch (error) {
        console.log(error);
      }
    };
    fetchLookups();
  }, []);

  const handleCancelCreateElement = () => {
    setCreateElement(false);
    setStepOneFormData({
      name: '',
      elementCategory: '',
      elementClassification: '',
      payrun: '',
      description: '',
      reportingName: '',
    });
    setErrors({
      name: '',
      elementCategory: '',
      elementClassification: '',
      payrun: '',
      description: '',
      reportingName: '',
      effectiveStartDate: '',
      effectiveEndDate: '',
      processingType: '',
      payFrequency: '',
      selectedPayMonths: '',
      prorate: '',
    });
  };

  const validateStepOneForm = () => {
    let isValid = true;
    const newErrors = { ...errors };

    if (stepOneFormData.name.trim() === '') {
      newErrors.name = 'Please input name';
      isValid = false;
    } else {
      newErrors.name = '';
    }

    if (stepOneFormData.description.trim() === '') {
      newErrors.description = 'Please input description';
      isValid = false;
    } else {
      newErrors.description = '';
    }

    if (stepOneFormData.elementCategory === '') {
      newErrors.elementCategory = 'Plese select element category';
      isValid = false;
    } else {
      newErrors.elementCategory = '';
    }

    if (stepOneFormData.elementClassification === '') {
      newErrors.elementClassification = 'Plese select element classification';
      isValid = false;
    } else {
      newErrors.elementClassification = '';
    }

    if (stepOneFormData.payrun === '') {
      newErrors.payrun = 'Plesse select a Pay run';
      isValid = false;
    } else {
      newErrors.payrun = '';
    }

    if (stepOneFormData.reportingName.trim() === '') {
      newErrors.reportingName = 'Please input reporting name';
      isValid = false;
    } else {
      newErrors.reportingName = '';
    }

    setErrors((prevState) => {
      return {
        ...prevState,
        ...newErrors,
      };
    });
    return isValid;
  };

  const handleNextStep = () => {
    if (validateStepOneForm()) {
      if (payRunValueId && classificationValueId && categoryValueId) {
        setLookUpValueIds({
          payRunValueId,
          classificationValueId,
          categoryValueId,
        });
      }
      setNextStep(true);
    } else {
      console.log('Form validation failed');
    }
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
      <Modal.Body className={classes.createElement__body}>
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
          <CreateElementNextStep
            setNextStep={setNextStep}
            setCreateElementSuccess={setCreateElementSuccess}
            setCreateElement={setCreateElement}
            errors={errors}
            stepTwoFormData={stepTwoFormData}
            setStepTwoFormData={setStepTwoFormData}
            setErrors={setErrors}
            selectedStartDate={selectedStartDate}
            setSelectedStartDate={setSelectedStartDate}
            selectedEndDate={selectedEndDate}
            setSelectedEndDate={setSelectedEndDate}
            processingType={processingType}
            setProcessingType={setProcessingType}
            monthlySelectedMonths={monthlySelectedMonths}
            setMonthlySelectedMonths={setMonthlySelectedMonths}
            selectedMonths={selectedMonths}
            setSelectedMonths={setSelectedMonths}
            prorate={prorate}
            setProrate={setProrate}
            lookUpValueIds={lookUpValueIds}
            setStepOneFormData={setStepOneFormData}
            stepOneFormData={stepOneFormData}
          />
        ) : (
          <>
            <div className={classes.createElement__info}>
              <div className={classes.createElement__info__sectionone}>
                <div
                  className={
                    classes.createElement__info__sectionone__nameholder
                  }
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
                    name="name"
                    value={stepOneFormData.name}
                    onChange={handleChange}
                  />
                  {errors.name && (
                    <span className={classes.createElement__errors}>
                      {errors.name}
                    </span>
                  )}
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
                  <select
                    className={
                      classes.createElement__info__sectionone__categoryholder__selectcategory
                    }
                    name="elementCategory"
                    value={stepOneFormData.elementCategory}
                    onChange={handleChange}
                  >
                    <option>Select Element Category</option>
                    {elementCategoriesData.map((data) => (
                      <option key={data.id} value={data.id}>
                        {data.name}
                      </option>
                    ))}
                  </select>
                </div>
                {errors.elementCategory && (
                  <div className={classes.createElement__errors}>
                    {errors.elementCategory}
                  </div>
                )}
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
                  <select
                    className={
                      classes.createElement__info__sectiontwo__classificationholder__selectclassification
                    }
                    name="elementClassification"
                    value={stepOneFormData.elementClassification}
                    onChange={handleChange}
                  >
                    <option>Select Classification</option>
                    {elementClassifications.map((data) => (
                      <option key={data.id} value={data.id}>
                        {data.name}
                      </option>
                    ))}
                  </select>
                  {errors.elementClassification && (
                    <div className={classes.createElement__errors}>
                      {errors.elementClassification}
                    </div>
                  )}
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
                  <select
                    className={
                      classes.createElement__info__sectiontwo__payrunholder__selectpayrun
                    }
                    name="payrun"
                    value={stepOneFormData.payrun}
                    onChange={handleChange}
                  >
                    <option>Select Payrun</option>
                    {payRuns.map((data) => (
                      <option key={data.id} value={data.id}>
                        {data.name}
                      </option>
                    ))}
                  </select>
                  {errors.payrun && (
                    <div className={classes.createElement__errors}>
                      {errors.payrun}
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className={classes.createElement__description}>
              <span className={classes.createElement__description__text}>
                Description
              </span>
              <Textarea
                classname={classes.createElement__description__textarea}
                rows={2}
                placeholder="Input Description"
                name="description"
                value={stepOneFormData.description}
                onChange={handleChange}
              />
              {errors.description && (
                <div className={classes.createElement__errors}>
                  {errors.description}
                </div>
              )}
            </div>
            <div className={classes.createElement__reporting}>
              <span className={classes.createElement__reporting__text}>
                Reporting Name
              </span>
              <Textarea
                classname={classes.createElement__reporting__textarea}
                rows={2}
                placeholder="Input Reporting Name"
                name="reportingName"
                value={stepOneFormData.reportingName}
                onChange={handleChange}
              />
              {errors.reportingName && (
                <div className={classes.createElement__errors}>
                  {errors.reportingName}
                </div>
              )}
            </div>
            <div className={classes.createElement__btnaction}>
              <Button
                type="reset"
                btnClassName={classes.createElement__btnaction__cancel}
                onClick={() => handleCancelCreateElement()}
                btnText="Cancel"
              />
              <Button
                style={
                  Object.keys(errors).length === 0
                    ? {
                        background: '#4BAA79',
                      }
                    : {
                        background: '#93ccaf',
                      }
                }
                type="submit"
                btnClassName={classes.createElement__btnaction__next}
                onClick={() => handleNextStep()}
                btnText="Next"
                // disabled={Object.keys(errors).length > 0}
              />
            </div>
          </>
        )}
      </Modal.Body>
    </GeneralModal>
  );
};

export default CreateElementModal;
