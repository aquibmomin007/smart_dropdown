import React, {  } from 'react';
import styles from './MoreLink.module.scss';

export type MoreLinkProps = {
  moreValue: number;
  handleSetAllCountries: () => void;
}

const MoreLink = (props: MoreLinkProps) => { 
  const { moreValue, handleSetAllCountries } = props;
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