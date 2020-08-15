import React, {  } from 'react';
import cx from 'classnames';
import styles from './ListItem.module.scss'
import { CountryOption } from '../../hooks/useCountriesList';

type ListItemProps = {
    selectedOption: CountryOption | null;
    country: CountryOption,
    handleSelectChange: (country: CountryOption) => () => void
}

const ListItem = ({ selectedOption, country, handleSelectChange }: ListItemProps) => { 
  return (
    <li
        className={cx(styles.dropdownListItem, {
            [styles.activeListItem]: selectedOption && selectedOption.value === country.value
        })}
        onClick={handleSelectChange(country)}>
            {country.label}
    </li>
  )
}

export default ListItem;