import React from 'react';

const Form = (props) => {
    return (
        <form action="" className="searchForm" onSubmit={props.getPhotos}>
            <label htmlFor="search" className="sr-only">Search</label>
            <input onChange={props.handleUserInput} type="text" id="search" placeholder="'Mountains'"></input>
            <button type="submit" aria-label="Search">
                <i className="fas fa-search" aria-hidden="true"></i>
            </button>
        </form> 
    )
}

export default Form; 