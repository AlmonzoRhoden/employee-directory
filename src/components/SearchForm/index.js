import React from "react";
import "./style.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SearchForm(props) {

  return (
    <form className="search">
      <div className="form-group">

        <input
          value={props.search}
          onChange={props.handleInputChange}
          name="name"
          list="names"
          type="text"
          className="form-control"
          placeholder="Enter employee name"
          id="name"
        />
        <button type="submit" onClick={props.handleFormSubmit} className="btn btn-info">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;