import React from 'react'
import DropDown from "../DropDown/DropDown";
import styles from './styles.module.scss';
import { useCountriesList } from '../../hooks/useCountriesList';

export const DropDownWithoutLabel = () => {
  const { countries } = useCountriesList("");

  return (
    <div className={styles.mainContainer}>
      <p>No label</p>
      <DropDown
        maxOptionsToShow={5}
        hasAddPermission={true}
        options={[...countries]}
      />
    </div>
  )
}