import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {HeaderController, Login, HomeController} from '@/components';

const App = () => {
  return (
    <div className="App">
      <Router>
        <HeaderController />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<HomeController />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
