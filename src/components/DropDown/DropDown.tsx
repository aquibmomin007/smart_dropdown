import React, { useState, useCallback } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import styles from './DropDown.module.scss'
import { useCountriesList, CountryOption } from '../../hooks/useCountriesList';

type DropDownProps = {
  maxOptionsToShow: number
}

const DropDown = ({ maxOptionsToShow }: DropDownProps) => { 
  const [showOptions, setShowOptions] = useState(false);
  const toggleExpand = useCallback(() => setShowOptions(!showOptions), [setShowOptions, showOptions]);
  
  const [searchTerm, setSearchTerm] = useState("")
  const handleSearchChange = useCallback((event) => setSearchTerm(event.target.value), [setSearchTerm])

  const [selectedOption, setSelectedOption] = useState<CountryOption | null>(null)
  const handleSelectChange = useCallback((country: CountryOption) => () => {
    setSelectedOption(country)
    setShowOptions(false)
    setSearchTerm("")
  }, [setSelectedOption, setShowOptions])
  
  const { countries } = useCountriesList(searchTerm)

  return (
    <div className={styles.dropdownWrapper}>
      <div className={styles.dropdownHeader} onClick={toggleExpand}>
          {selectedOption ?
            <span className={styles.selectedOption}>{selectedOption.label}</span> :
            <span className={styles.dropdownPlaceholder}>Select a location</span>
          }
          <FaChevronDown className={styles.chevron} />
      </div>
      {showOptions && (
        <div className={styles.dropdownListWrapper}>
          <input type="text" className={styles.dropdownSearchInput} onChange={handleSearchChange} />
          <ul className={styles.dropdownListContainer}>
            {countries
              .slice(0, maxOptionsToShow)
              .map(
                (country, i) => <li key={i} className={styles.dropdownListItem} onClick={handleSelectChange(country)}>{country.label}</li>
              )
            }
          </ul>
        </div>
      )}
    </div>
  )
}

export default DropDown;