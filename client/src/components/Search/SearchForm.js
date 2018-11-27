import React from "react";

function SearchForm(props) {
  return (
    <form className="books">
      <div className="form-group">
        <label htmlFor="search">Title:</label>
        <input
          value={props.search}
          onChange={props.handleInputChange}
          name="search"
          type="text"
          className="form-control"
          placeholder="Type a book name to search"
          id="search"
        />
        <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
