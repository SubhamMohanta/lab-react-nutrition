import React from 'react'
export default function Search(props) {
    return (
        <div className='search'>
                <input placeholder='Search here!' type="text" name='search' id='search-box' onChange={(e) => {
                    props.setSearch(e.target.value)
                }} />
        </div>
    )
}