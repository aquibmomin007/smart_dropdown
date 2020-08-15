import React from 'react';
import styles from './App.module.scss';
import DropDown from './components/DropDown/DropDown';

const App = () => {
  return (
    <div className={styles.root}>
      <div className={styles.mainContainer}>
        <DropDown maxOptionsToShow={12} />
      </div>
    </div>
  );
}

export default App;
