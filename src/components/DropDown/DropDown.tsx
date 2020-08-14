import React, { useState, useCallback } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import styles from './DropDown.module.scss'

const DropDown = () => { 
  const [showOptions, setShowOptions] = useState(false);
  const toggleExpand = useCallback(() => setShowOptions(!showOptions), [setShowOptions, showOptions]);

  return (
    <div className={styles.dropdownWrapper}>
      <div className={styles.dropdownHeader} onClick={toggleExpand}>
          <span className={styles.dropdownPlaceholder}>Select a location</span>
          <FaChevronDown className={styles.chevron} />
      </div>
      {showOptions && (
        <ul className={styles.dropdownListContainer}>
          <li className={styles.dropdownListItem}>Singapore</li>
          <li className={styles.dropdownListItem}>Malaysia</li>
          <li className={styles.dropdownListItem}>Indonesia</li> 
          <li className={styles.dropdownListItem}>Philippines</li> 
          <li className={styles.dropdownListItem}>Thailand</li> 
          <li className={styles.dropdownListItem}>Japan</li> 
          <li className={styles.dropdownListItem}>Australia</li>
        </ul>
      )}
    </div>
  )
}

export default DropDown;