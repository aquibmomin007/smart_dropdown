import React, { useState, useCallback } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import styles from './DropDown.module.scss'
import { useCountriesList, CountryOption } from '../../hooks/useCountriesList';
import { getMoreLinkHelper } from '../../helpers/getMoreLinkHelper';

type DropDownProps = {
  maxOptionsToShow: number
}

const DropDown = ({ maxOptionsToShow }: DropDownProps) => { 
  const [showOptions, setShowOptions] = useState(false);
  const toggleExpand = useCallback(() => setShowOptions(!showOptions), [setShowOptions, showOptions]);
  const [maxValues, setMaxValues] = useState(maxOptionsToShow);
  
  const [searchTerm, setSearchTerm] = useState("")
  const handleSearchChange = useCallback((event) => setSearchTerm(event.target.value), [setSearchTerm])

  const [selectedOption, setSelectedOption] = useState<CountryOption | null>(null)
  const handleSelectChange = useCallback((country: CountryOption) => () => {
    setSelectedOption(country)
    setShowOptions(false)
    setSearchTerm("")
  }, [setSelectedOption, setShowOptions]);
  
  const { countries } = useCountriesList(searchTerm)
  const handleSetAllCountries = useCallback(() => {
    setMaxValues(countries.length)
  }, [setMaxValues, countries]);

  const showSearchAddBlock = useCallback(() => {
    return (searchTerm.length > 0) && (countries.length < 1)
  }, [searchTerm, countries]);

  

  return (
    <div className={styles.dropdownWrapper}>
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
      {showOptions && (
        <div className={styles.dropdownListWrapper}>
          <input type="text" className={styles.dropdownSearchInput} onChange={handleSearchChange} />
          {showSearchAddBlock() && (
            <div className={styles.searchBlock}>
              <p className={styles.searchBlockText}>{`"${searchTerm}" not found`}</p>
              <button className={styles.searchBlockBtn}>Add &amp; Select</button>
            </div>
          )}
          <ul className={styles.dropdownListContainer}>
            {countries
              .slice(0, maxValues)
              .map(
                (country, i) => <li key={i} className={styles.dropdownListItem} onClick={handleSelectChange(country)}>{country.label}</li>
              )
            }
          </ul>
          {getMoreLinkHelper(countries.length, maxValues) > 0 && (
            <p className={styles.dropdownMoreList} onClick={handleSetAllCountries}>{`${getMoreLinkHelper(countries.length, maxValues)} more...`}</p>
          )}
        </div>
      )}
    </div>
  )
}

export default DropDown;