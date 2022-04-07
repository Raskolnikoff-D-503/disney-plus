import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {Header, Login} from '@/components';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
