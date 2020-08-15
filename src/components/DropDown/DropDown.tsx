import React, { useState, useCallback } from 'react';
import cx from 'classnames';
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

  const [searchTerm, setSearchTerm] = useState("")
  const handleSearchChange = useCallback((event) => setSearchTerm(event.target.value), [setSearchTerm])

  const { countries, addCountry } = useCountriesList(searchTerm)

  const [maxValues, setMaxValues] = useState(maxOptionsToShow);
  const handleSetAllCountries = useCallback(() => setMaxValues(countries.length), [setMaxValues, countries]);

  const [selectedOption, setSelectedOption] = useState<CountryOption | null>(null)
  const handleSelectChange = useCallback((country: CountryOption) => () => {
    setSelectedOption(country);
    setShowOptions(false);
    setSearchTerm("")
  }, [setSelectedOption, setShowOptions]);

  const handleAddNewOption = useCallback(() => {
    addCountry(searchTerm)
      .then(result => {
        const updatedCountries = result.data as CountryOption[]
        setSelectedOption(updatedCountries.find(c => c.label === searchTerm) || null)
        setShowOptions(false)
        setSearchTerm("")
        if (maxValues !== maxOptionsToShow) setMaxValues(updatedCountries.length)
      })
  }, [searchTerm, addCountry, maxValues, maxOptionsToShow])

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
          <input type="text" value={searchTerm} className={styles.dropdownSearchInput} placeholder="Search..." onChange={handleSearchChange} />
          {showSearchAddBlock() && (
            <div className={styles.searchBlock}>
              <p className={styles.searchBlockText}>{`"${searchTerm}" not found`}</p>
              <button className={styles.searchBlockBtn} onClick={handleAddNewOption}>Add &amp; Select</button>
            </div>
          )}
          <ul className={styles.dropdownListContainer}>
            {countries
              .slice(0, maxValues)
              .map(
                (country, i) =>
                  <li
                    key={i}
                    className={cx(styles.dropdownListItem, {
                      [styles.activeListItem]: selectedOption && selectedOption.value === country.value
                    })}
                    onClick={handleSelectChange(country)}>
                      {country.label}
                  </li>
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