import React, {  } from 'react';
import cx from 'classnames';
import styles from './ListItem.module.scss'
import { SelectOption } from '../../hooks/useCountriesList';

export type ListItemProps = {
    selectedOption: SelectOption | null;
    country: SelectOption,
    handleSelectChange: (country: SelectOption) => () => void
}

const ListItem = ({ selectedOption, country, handleSelectChange }: ListItemProps) => { 
  return (
    <li
        data-testid="list-item-test"
        className={cx(styles.dropdownListItem, {
            [styles.activeListItem]: selectedOption && selectedOption.value === country.value
        })}
        onClick={handleSelectChange(country)}>
            {country.label}
    </li>
  )
}

export default ListItem;