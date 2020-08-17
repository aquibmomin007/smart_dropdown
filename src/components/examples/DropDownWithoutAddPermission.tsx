import React from 'react'
import DropDown from "../DropDown/DropDown";
import styles from './styles.module.scss'
import { useCountriesList } from '../../hooks/useCountriesList';

export const DropDownWithoutAddPermission = () => {
  const { countries } = useCountriesList("");

  return (
    <div className={styles.mainContainer}>
      <p>Country List (Cannot Add New) + label</p>
      <DropDown
        maxOptionsToShow={5}
        hasAddPermission={false}
        options={[...countries]}
        label="Country List (Add New Permission)"
      />
    </div>
  )
}