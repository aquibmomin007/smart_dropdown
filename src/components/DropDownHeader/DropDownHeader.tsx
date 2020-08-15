import React, {  } from 'react';
import styles from './DropDownHeader.module.scss'
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';
import { CountryOption } from '../../hooks/useCountriesList';

type DropDownHeaderProps = {
  showOptions: boolean;
  selectedOption: CountryOption | null;
  toggleExpand: () => void;
}

const DropDownHeader = ({ showOptions, selectedOption, toggleExpand }: DropDownHeaderProps) => { 
  return (
    <div className={styles.dropdownHeader} onClick={toggleExpand}>
        {selectedOption ?
          <span className={styles.selectedOption}>{selectedOption.label}</span> :
          <span className={styles.dropdownPlaceholder}>Select a location</span>
        }
        {showOptions ? (
          <FaChevronUp className={styles.chevron} />
        ):(
          <FaChevronDown className={styles.chevron} />
        )}
    </div>
  )
}

export default DropDownHeader;