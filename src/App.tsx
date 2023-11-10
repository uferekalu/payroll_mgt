import React from 'react';
import Layout from './components/layout/Layout';
import { Routes, Route } from 'react-router-dom';
import Elements from './pages/Elements';
import ElementLinks from './pages/ElementsLinks';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Elements />} />
        <Route path="/element-links" element={<ElementLinks />} />
      </Routes>
    </Layout>
  );
}

export default App;
