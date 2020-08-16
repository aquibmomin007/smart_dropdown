import React, {  } from 'react';
import styles from './DropDownHeader.module.scss'
import { FaChevronUp, FaChevronDown, FaTimes } from 'react-icons/fa';
import { SelectOption } from '../../hooks/useCountriesList';

type DropDownHeaderProps = {
  showOptions: boolean;
  selectedOption: SelectOption | null;
  toggleExpand: () => void;
  handleClearSelectedOption: (event: any) => void;
  label?: string;
}

const DropDownHeader = (props: DropDownHeaderProps) => { 
  const { showOptions, selectedOption, toggleExpand, label, handleClearSelectedOption } = props
  return (
    <>
      {label && <p className={styles.dropdownLabel}>{label}</p>}
      <div className={styles.dropdownHeader} onClick={toggleExpand}>
          {selectedOption ?
            (<>
              <span className={styles.selectedOption}>{selectedOption.label} </span>
              <FaTimes className={styles.dropdownClearBtn} onClick={handleClearSelectedOption}/>
            </>) :
            <span className={styles.dropdownPlaceholder}>Select a location</span>
          }
          {showOptions ? (
            <FaChevronUp className={styles.chevron} />
          ):(
            <FaChevronDown className={styles.chevron} />
          )}
      </div>
    </>
  )
}

export default DropDownHeader;