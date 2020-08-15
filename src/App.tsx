import React from 'react';
import styles from './App.module.scss';
import DropDown from './components/DropDown/DropDown';

const App = () => {
  return (
    <div className={styles.root}>
      <div className={styles.mainContainer}>
        <DropDown 
          maxOptionsToShow={5}
          hasAddPermission={true}
        />
      </div>
      <div className={styles.mainContainer}>
        <DropDown 
          maxOptionsToShow={5}
          hasAddPermission={false}
        />
      </div>
    </div>
  );
}

export default App;
