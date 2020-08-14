import React, { useState, useCallback } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import styles from './DropDown.module.scss'
import { useCountriesList } from '../../hooks/useCountriesList';

const DropDown = () => { 
  const [showOptions, setShowOptions] = useState(false);
  const toggleExpand = useCallback(() => setShowOptions(!showOptions), [setShowOptions, showOptions]);
  const { countries } = useCountriesList()

  return (
    <div className={styles.dropdownWrapper}>
      <div className={styles.dropdownHeader} onClick={toggleExpand}>
          <span className={styles.dropdownPlaceholder}>Select a location</span>
          <FaChevronDown className={styles.chevron} />
      </div>
      {showOptions && (
        <ul className={styles.dropdownListContainer}>
          {countries.map((country, i) => <li key={i} className={styles.dropdownListItem}>{country.label}</li>)}
        </ul>
      )}
    </div>
  )
}

export default DropDown;