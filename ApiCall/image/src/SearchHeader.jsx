import React, { useState } from "react";

function SearchHeader({search}) {
  const [valueInput, setValue] = useState("")
  const handleFormSubmit = (event) =>{
    event.preventDefault()
    search(valueInput)
  }
  const handleChange = (event) =>{
    setValue(event.target.value)
  }
  return <div className="searchDiv">
    <form onSubmit={handleFormSubmit}>
        <label>Ne Arıyorsunuz</label>
        <input value={valueInput} onChange={handleChange}/>
    </form>
  </div>;
}

export default SearchHeader;
