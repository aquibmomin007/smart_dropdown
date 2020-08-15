import React, {  } from 'react';
import styles from './SearchBlock.module.scss'

type SearchBlockProps = {
  searchTerm: string;
  hasAddPermission: boolean;
  handleAddNewOption: () => void;
  handleSearchChange: (event: any) => void;
  showSearchAddBlock: () => boolean
}

const SearchBlock = ({ searchTerm, hasAddPermission, handleAddNewOption, handleSearchChange, showSearchAddBlock }: SearchBlockProps) => { 
  return (
    <>
    <input 
      type="text" 
      value={searchTerm} 
      className={styles.dropdownSearchInput} 
      placeholder="Search..." 
      onChange={handleSearchChange} 
    />
    {showSearchAddBlock() && (
      <div className={styles.searchBlock}>
        <p className={styles.searchBlockText}>{`"${searchTerm}" not found`}</p>
        {hasAddPermission && <button className={styles.searchBlockBtn} onClick={handleAddNewOption}>Add &amp; Select</button>}
      </div>
    )}
    </>
  )
}

export default SearchBlock;