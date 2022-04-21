import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {HeaderController, Login, Home} from '@/components';

const App = () => {
  return (
    <div className="App">
      <Router>
        <HeaderController />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
