import React from "react";
import "./style.css";

function SearchForm(props) {

  return (
    <form className="search">
      <div className="form-group">
      <button type="submit" onClick={props.handleFormSubmit} className="btn btn-info">
          Search
        </button>
    
        <input
          value={props.search}
          onChange={props.handleInputChange}
          name="name"
          list="names"
          type="text"
          className="form-control"
          placeholder="Employee name"
          id="name"
        />
      </div>
    </form>
  );
}

export default SearchForm;