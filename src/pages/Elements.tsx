import React, { useState } from 'react';
import classes from './Elements.module.scss';
import Sidebar from '../components/sidebar/Sidebar';
import MobileSidebar from '../components/sidebar/MobileSidebar';
import { AiOutlineClose } from 'react-icons/ai';
import Breadcrumb from '../components/breadcrumb/Breadcrumb';
import NoElement from '../components/noElement/NoElement';
import CreateElementModal from '../components/createElementModal/CreateElementModal';
import SuccessModal from '../components/successModl/SuccessModal';
import check from '../images/check.png';

const initialValues = {
  name: '',
  elementCategory: '',
  elementClassification: '',
  payrun: '',
  description: '',
  reportingName: '',
};

const secondStepValues = {
  effectiveStartDate: null,
  effectiveEndDate: null,
  processingType: '',
  payFrequency: '',
  selectedPayMonths: [],
  prorate: '',
  status: false,
};

interface IElements {
  openSwitchModule: boolean;
  setOpenSwitchModule: React.Dispatch<React.SetStateAction<boolean>>;
  selectedModule: string | null;
  setSelectedModule: React.Dispatch<React.SetStateAction<string | null>>;
  payrollActivities: boolean;
  setPayrollActivities: React.Dispatch<React.SetStateAction<boolean>>;
  elementSetup: boolean;
  setElementSetup: React.Dispatch<React.SetStateAction<boolean>>;
  toggleElementSetup: () => void;
  togglePayrollActivities: () => void;
  handleSelectedModule: (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => void;
  handleOpenSwitchModule: () => void;
}

const Elements: React.FC<IElements> = ({
  openSwitchModule,
  setOpenSwitchModule,
  selectedModule,
  setSelectedModule,
  payrollActivities,
  setPayrollActivities,
  elementSetup,
  setElementSetup,
  toggleElementSetup,
  togglePayrollActivities,
  handleSelectedModule,
  handleOpenSwitchModule,
}) => {
  const [showMobileSidebar, setShowMobileSidebar] = useState<boolean>(false);
  const [createElement, setCreateElement] = useState<boolean>(false);
  const [createElementSucces, setCreateElementSuccess] =
    useState<boolean>(false);
  const [stepOneFormData, setStepOneFormData] = useState<{
    name: string;
    elementCategory: string;
    elementClassification: string;
    payrun: string;
    description: string;
    reportingName: string;
  }>(initialValues);
  const [stepTwoFormData, setStepTwoFormData] = useState<{
    effectiveStartDate: Date | null;
    effectiveEndDate: Date | null;
    processingType: string;
    payFrequency: string;
    selectedPayMonths: string[];
    prorate: string;
    status: boolean;
  }>(secondStepValues);

  const [lookUpValueIds, setLookUpValueIds] = useState({
    payRunValueId: '',
    classificationValueId: '',
    categoryValueId: '',
  });

  const [errors, setErrors] = useState({
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

  const [selectedStartDate, setSelectedStartDate] = useState<Date | null>(null);
  const [selectedEndDate, setSelectedEndDate] = useState<Date | null>(null);
  const [processingType, setProcessingType] = useState<string>('');
  const [monthlySelectedMonths, setMonthlySelectedMonths] =
    useState<string>('');
  const [selectedMonths, setSelectedMonths] = useState<string[]>([]);
  const [prorate, setProrate] = useState<string>('');

  const toggleMobileShowSidebar = () => {
    setShowMobileSidebar((prevState) => !prevState);
  };

  return (
    <div className={classes.elements}>
      <div className={classes.elements__showsidebar}>
        {showMobileSidebar ? (
          <AiOutlineClose
            style={{
              cursor: 'pointer',
            }}
            onClick={toggleMobileShowSidebar}
          />
        ) : (
          <i
            style={{
              cursor: 'pointer',
            }}
            className="bi bi-list"
            onClick={toggleMobileShowSidebar}
          ></i>
        )}
      </div>

      {showMobileSidebar && (
        <div className={classes.mobileSidebar}>
          <MobileSidebar
            openSwitchModule={openSwitchModule}
            setOpenSwitchModule={setOpenSwitchModule}
            selectedModule={selectedModule}
            setSelectedModule={setSelectedModule}
            payrollActivities={payrollActivities}
            setPayrollActivities={setPayrollActivities}
            elementSetup={elementSetup}
            setElementSetup={setElementSetup}
            toggleElementSetup={toggleElementSetup}
            togglePayrollActivities={togglePayrollActivities}
            handleSelectedModule={handleSelectedModule}
            handleOpenSwitchModule={handleOpenSwitchModule}
          />
        </div>
      )}

      <div className={classes.elements__sidebar}>
        <Sidebar
          openSwitchModule={openSwitchModule}
          setOpenSwitchModule={setOpenSwitchModule}
          selectedModule={selectedModule}
          setSelectedModule={setSelectedModule}
          payrollActivities={payrollActivities}
          setPayrollActivities={setPayrollActivities}
          elementSetup={elementSetup}
          setElementSetup={setElementSetup}
          toggleElementSetup={toggleElementSetup}
          togglePayrollActivities={togglePayrollActivities}
          handleSelectedModule={handleSelectedModule}
          handleOpenSwitchModule={handleOpenSwitchModule}
        />
      </div>
      <div className={classes.elements__main}>
        <Breadcrumb />
        <NoElement setCreateElement={setCreateElement} />
      </div>
      <CreateElementModal
        createElement={createElement}
        setCreateElement={setCreateElement}
        setCreateElementSuccess={setCreateElementSuccess}
        stepOneFormData={stepOneFormData}
        setStepOneFormData={setStepOneFormData}
        errors={errors}
        setErrors={setErrors}
        setLookUpValueIds={setLookUpValueIds}
        stepTwoFormData={stepTwoFormData}
        setStepTwoFormData={setStepTwoFormData}
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
      />
      <SuccessModal
        successModal={createElementSucces}
        setSuccessModal={setCreateElementSuccess}
        imgSrc={check}
        alt="Success"
        onClick={() => setCreateElementSuccess(false)}
        successMsg={'Element has been created successfully'}
        btnText={'Close to continue'}
      />
    </div>
  );
};

export default Elements;
