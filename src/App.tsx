import React, { useState } from 'react';
import Layout from './components/layout/Layout';
import { Routes, Route } from 'react-router-dom';
import Elements from './pages/Elements';
import ElementLinks from './pages/ElementsLinks';

function App() {
  const [openSwitchModule, setOpenSwitchModule] = useState<boolean>(false);
  const [selectedModule, setSelectedModule] = useState<string | null>(
    'Payroll Management',
  );
  const [payrollActivities, setPayrollActivities] = useState<boolean>(false);
  const [elementSetup, setElementSetup] = useState<boolean>(false);

  const toggleElementSetup = () => {
    setElementSetup((prevState) => !prevState);
  };

  const togglePayrollActivities = () => {
    setPayrollActivities((prevState) => !prevState);
  };

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
    <Layout>
      <Routes>
        <Route
          path="/"
          element={
            <Elements
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
          }
        />
        <Route
          path="/elements"
          element={
            <Elements
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
          }
        />
        <Route path="/element-links" element={<ElementLinks />} />
      </Routes>
    </Layout>
  );
}

export default App;
