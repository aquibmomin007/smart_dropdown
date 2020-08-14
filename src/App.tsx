import React from 'react';
import './App.scss';
import DropDown from './components/DropDown/DropDown';

const App = () => {
  return (
    <div className="App">
      <div className="main-container">
        <DropDown maxOptionsToShow={5} />
      </div>
    </div>
  );
}

export default App;
