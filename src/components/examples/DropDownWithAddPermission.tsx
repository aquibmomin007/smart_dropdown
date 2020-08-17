import React from 'react'
import DropDown from "../DropDown/DropDown";
import styles from './styles.module.scss'
import { useCountriesList } from '../../hooks/useCountriesList';

export const DropDownWithAddPermission = () => {
  const { countries } = useCountriesList("");

  return (
    <div className={styles.mainContainer}>
      <p>Country List (Add New Permission) + label</p>
      <DropDown
        maxOptionsToShow={5}
        hasAddPermission={true}
        options={[...countries]}
        label="Country List (Add New Permission)"
      />
    </div>
  )
}