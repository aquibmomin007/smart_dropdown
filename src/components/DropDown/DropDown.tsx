import React, { useState, useCallback, useEffect, useRef } from 'react';
import styles from './DropDown.module.scss'
import { useCountriesList, SelectOption } from '../../hooks/useCountriesList';
import { getMoreLinkHelper } from '../../helpers/getMoreLinkHelper';
import MoreLink from '../MoreLink/MoreLink';
import ListItem from '../ListItem/ListItem';
import SearchBlock from '../SearchBlock/SearchBlock';
import DropDownHeader from '../DropDownHeader/DropDownHeader';

type DropDownProps = {
  maxOptionsToShow: number;
  hasAddPermission: boolean;
  options: SelectOption[];
  label?: string;
}

const DropDown = ({ maxOptionsToShow, hasAddPermission, options, label }: DropDownProps) => { 
  const [showOptions, setShowOptions] = useState(false);
  const toggleExpand = useCallback(() => setShowOptions(!showOptions), [setShowOptions, showOptions]);

  const [searchTerm, setSearchTerm] = useState("")

  const { countries, addCountry, isLoading } = useCountriesList(searchTerm)

  const [maxValues, setMaxValues] = useState(maxOptionsToShow);
  const handleSetAllCountries = useCallback(() => setMaxValues(countries.length), [setMaxValues, countries]);

  const [selectedOption, setSelectedOption] = useState<SelectOption | null>(null)
  const handleClearSelectedOption = useCallback((event:MouseEvent) => {
    event.stopPropagation();
    setSelectedOption(null)
  }, [setSelectedOption]);

  
  const handleSelectChange = useCallback((country: SelectOption) => () => {
    setSelectedOption(country);
    setShowOptions(false);
    setSearchTerm("")
  }, [setSelectedOption, setShowOptions, ]);

  const handleSearchChange = useCallback((event) => setSearchTerm(event.target.value), [setSearchTerm, ]);
  
  const handleAddNewOption = useCallback(() => {
    addCountry(searchTerm)
      .then(result => {
        const updatedCountries = result.data as SelectOption[]
        setSelectedOption(updatedCountries.find(c => c.label === searchTerm) || null)
        setShowOptions(false)
        setSearchTerm("")
        if (maxValues !== maxOptionsToShow) setMaxValues(updatedCountries.length)
      })
  }, [searchTerm, addCountry, maxValues, maxOptionsToShow])

  const showSearchAddBlock = useCallback(
    () => (searchTerm.length > 0) && (countries.length < 1), 
    [searchTerm, countries]
  );

  //handling clickoutside behavior
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setShowOptions(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [ref]);

  return (
    <div ref={ref} className={styles.dropdownWrapper}>
      <DropDownHeader 
        showOptions={showOptions}
        selectedOption={selectedOption}
        toggleExpand={toggleExpand}
        handleClearSelectedOption={handleClearSelectedOption}
        label={label}
      />
      {showOptions && (
        <div className={styles.dropdownListWrapper}>
          <SearchBlock 
            searchTerm={searchTerm}
            hasAddPermission={hasAddPermission}
            handleAddNewOption={handleAddNewOption}
            handleSearchChange={handleSearchChange}
            showSearchAddBlock={showSearchAddBlock}
            isLoading={isLoading}
          />
          <ul className={styles.dropdownListContainer}>
            {countries
              .slice(0, maxValues)
              .map(
                (country, i) =>
                  <ListItem 
                    key={i}
                    country={country}
                    selectedOption={selectedOption}
                    handleSelectChange={() => handleSelectChange(country)}
                  />
              )
            }
          </ul>
          {getMoreLinkHelper(countries.length, maxValues) > 0 && (
            <MoreLink moreValue={getMoreLinkHelper(countries.length, maxValues)} handleSetAllCountries={handleSetAllCountries} />
          )}
        </div>
      )}
    </div>
  )
}

export default DropDown;