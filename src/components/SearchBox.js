import React from 'react';

const SearchBox = ({ searchField, searchChange }) => {
  return (
    <div className='pa2'>
      <input
        onChange={searchChange}
        className='pa3 ba br3 b--green bg-lightest-blue'
        type='search'
        placeholder='search robot'
      />
    </div>
  );
}

export default SearchBox;