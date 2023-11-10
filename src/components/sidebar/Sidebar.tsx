import React, { useState } from 'react';
import classes from './Sidebar.module.scss';
import switchModule from '../../images/switch-module.png';
import arrowDown from '../../images/arrowdown.png';
import salaryIcon from '../../images/salaryicon.png';
import dashboardIcon from '../../images/dasboardicon.png';
import payrollIcon from '../../images/payrollicon.png';
import elementIcon from '../../images/elementicon.png';
import elementArrowDown from '../../images/elementArrowDown.png';
import employeesIcon from '../../images/employeeicon.png';
import payrollSettings from '../../images/payrollsetting.png';
import myaccountIcon from '../../images/account.png';
import logoutIcon from '../../images/logout.png';
import PayrollContent from '../payrollContent/PayrollContent';
import PayrollActivitiesContent from '../payrollActivitiesContent/PayrollActivitiesContent';

interface ISidebar {}

const Sidebar: React.FC<ISidebar> = () => {
  const [openSwitchModule, setOpenSwitchModule] = useState<boolean>(false);
  const [selectedModule, setSelectedModule] = useState<string | null>(
    'Payroll Management',
  );

  const handleSelectedModule = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    const textContent = e.currentTarget.textContent;
    setSelectedModule(textContent);
  };

  const handleOpenSwitchModule = () => {
    setOpenSwitchModule((prevState) => !prevState);
  };
  return (
    <div className={classes.sidebar}>
      <div
        className={classes.sidebar__switch__module}
        onClick={handleOpenSwitchModule}
      >
        <img
          src={switchModule}
          alt="switch"
          className={classes.sidebar__switch__module__img}
        />
        <div className={classes.sidebar__switch__module__content}>
          <span className={classes.sidebar__switch__module__content__title1}>
            Switch Module
          </span>
          <span className={classes.sidebar__switch__module__content__title2}>
            {selectedModule}
          </span>
        </div>
        <img
          src={arrowDown}
          alt="arrow"
          className={classes.sidebar__switch__module__img}
        />
      </div>
      {openSwitchModule && (
        <PayrollContent
          handleSelectedModule={handleSelectedModule}
          selectedModule={selectedModule}
        />
      )}
      <div className={classes.sidebar__dashboard}>
        <img
          src={dashboardIcon}
          alt="dashboard icon"
          className={classes.sidebar__dashboard__icon}
        />
        <span className={classes.sidebar__dashboard__title}>Dashboard</span>
      </div>
      <div className={classes.sidebar__payroll}>
        <img
          src={payrollIcon}
          alt="payroll icon"
          className={classes.sidebar__payroll__icon}
        />
        <span className={classes.sidebar__payroll__title}>
          Payroll Activities
        </span>
        <div></div>
        <img
          src={arrowDown}
          alt="arroe icon"
          className={classes.sidebar__payroll__arrowdown}
        />
      </div>
      <PayrollActivitiesContent />
      <div className={classes.sidebar__salary__structure}>
        <img
          src={salaryIcon}
          alt="dashboard icon"
          className={classes.sidebar__salary__structure__icon}
        />
        <div></div>
        <span className={classes.sidebar__salary__structure__title}>
          Salary Structure
        </span>
      </div>
      <div className={classes.sidebar__element}>
        <img
          src={elementIcon}
          alt="element icon"
          className={classes.sidebar__element__icon}
        />
        <span className={classes.sidebar__element__title}>Element Setup</span>
        <div></div>
        <img
          src={elementArrowDown}
          alt="arroe icon"
          className={classes.sidebar__element__arrow}
        />
      </div>
      <div className={classes.sidebar__employees}>
        <img
          src={employeesIcon}
          alt="employee icon"
          className={classes.sidebar__employees__icon}
        />
        <div></div>
        <span className={classes.sidebar__employees__title}>Employees</span>
      </div>
      <hr className={classes.sidebar__hl} />
      <div className={classes.sidebar__payroll__settings}>
        <img
          src={payrollSettings}
          alt="payroll setting icon"
          className={classes.sidebar__payroll__settings__icon}
        />
        <span className={classes.sidebar__payroll__settings__title}>
          Payroll Settings
        </span>
        <div></div>
        <img
          src={arrowDown}
          alt="arroe icon"
          className={classes.sidebar__payroll__settings__arrow}
        />
      </div>
      <div className={classes.sidebar__myaccount}>
        <img
          src={myaccountIcon}
          alt="myaccount icon"
          className={classes.sidebar__myaccount__icon}
        />
        <span className={classes.sidebar__myaccount__title}>My Account</span>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className={classes.sidebar__logout}>
        <img
          src={logoutIcon}
          alt="myaccount icon"
          className={classes.sidebar__logout__icon}
        />
        <span className={classes.sidebar__logout__title}>My Account</span>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Sidebar;
