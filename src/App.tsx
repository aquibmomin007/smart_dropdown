import React from 'react';
import styles from './App.module.scss';
import DropDown from './components/DropDown/DropDown';
import { useCountriesList } from './hooks/useCountriesList';

const App = () => {
  const { countries } = useCountriesList("");
  
  return (
    <div className={styles.root}>
      <h2>Examples</h2>
      <div className={styles.mainWrapper}>
        <div className={styles.mainContainer}>
          <p>Country List (Add New Permission) + label</p>
          <DropDown 
            maxOptionsToShow={5}
            hasAddPermission={true}
            options={countries}
            label="Country List (Add New Permission)"
          />
        </div>
        <div className={styles.mainContainer}>
          <p>Country List (Cannot Add New) + label</p>
          <DropDown 
            maxOptionsToShow={5}
            hasAddPermission={false}
            options={countries}
            label="Country List (Cannot Add New)"
          />
        </div>
        <div className={styles.mainContainer}>
          <p>No label</p>
          <DropDown 
            maxOptionsToShow={5}
            hasAddPermission={true}
            options={countries}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
