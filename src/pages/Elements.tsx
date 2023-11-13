import React, { useState } from 'react';
import classes from './Elements.module.scss';
import Sidebar from '../components/sidebar/Sidebar';
import MobileSidebar from '../components/sidebar/MobileSidebar';
import { AiOutlineClose } from 'react-icons/ai';
import Breadcrumb from '../components/breadcrumb/Breadcrumb';
import NoElement from '../components/noElement/NoElement';
import CreateElementModal from '../components/createElementModal/CreateElementModal';

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
  const [createElement, setCreateElement] = useState<boolean>(false)

  const toggleMobileShowSidebar = () => {
    setShowMobileSidebar((prevState) => !prevState);
  };

  return (
    <div className={classes.elements}>
      <div className={classes.elements__showsidebar}>
        {showMobileSidebar ? (
          <AiOutlineClose onClick={toggleMobileShowSidebar} />
        ) : (
          <i className="bi bi-list" onClick={toggleMobileShowSidebar}></i>
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
      />
    </div>
  );
};

export default Elements;
