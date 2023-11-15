import React, { useState } from 'react';
import classes from './Elements.module.scss';
import { AiOutlineClose } from 'react-icons/ai';
import MobileSidebar from '../components/sidebar/MobileSidebar';
import Sidebar from '../components/sidebar/Sidebar';
import Breadcrumb from '../components/breadcrumb/Breadcrumb';
import ElementDetail from '../components/elementDetail/ElementDetail';

interface IElementsLinks {
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

const ElementLinks: React.FC<IElementsLinks> = ({
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
        <ElementDetail />
      </div>
    </div>
  );
};

export default ElementLinks;
