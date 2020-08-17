import React, {  } from 'react';
import styles from './SearchBlock.module.scss'
import { FaSpinner } from 'react-icons/fa';


export type SearchBlockProps = {
  searchTerm: string;
  hasAddPermission: boolean;
  handleAddNewOption: () => void;
  handleSearchChange: (event: any) => void;
  showSearchAddBlock: () => boolean
  isLoading: boolean
}

const SearchBlock = ({ searchTerm, hasAddPermission, handleAddNewOption, handleSearchChange, showSearchAddBlock, isLoading }: SearchBlockProps) => { 
  return (
    <>
    <div className={styles.searchInputWrapper}>
      <input 
        type="text" 
        value={searchTerm} 
        className={styles.dropdownSearchInput} 
        placeholder="Search..." 
        onChange={handleSearchChange} 
      />
      {isLoading && (
        <div className={styles.searchInputSpinnerWrapper}>
          <FaSpinner className={styles.searchInputSpinner}/>
        </div>  
      )}    
    </div>
    {showSearchAddBlock() && (
      <div className={styles.searchBlock} data-testid="add-block-test">
        <p className={styles.searchBlockText}>{`"${searchTerm}" not found`}</p>
        {hasAddPermission && <button  className={styles.searchBlockBtn} onClick={handleAddNewOption}>Add &amp; Select</button>}
      </div>
    )}
    </>
  )
}

export default SearchBlock;