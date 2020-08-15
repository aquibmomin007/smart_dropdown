import React, {  } from 'react';
import styles from './MoreLink.module.scss'

type MoreLinkProps = {
  moreValue: number;
  handleSetAllCountries: () => void;
}

const MoreLink = ({ moreValue, handleSetAllCountries }: MoreLinkProps) => { 
  return (
    <p 
        className={styles.dropdownMoreList} 
        onClick={handleSetAllCountries}
    >
        {`${moreValue} more...`}
    </p>
  )
}

export default MoreLink;