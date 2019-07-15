import React from 'react'

const SearchBox = ({Searchfield, SearchChange}) => {
    return (
        <div className='tc'>
            <input 
            type='search' 
            placeholder='search robots'
            className='tc pa3 ba b--green bg-lightest-blue' 
            onChange = {SearchChange}/>
        </div>
    )
}

export default SearchBox;