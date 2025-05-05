import React from 'react';

const SearchForm = ({ onSearch }) => {
  return (
    <form className="row g-3 mb-4" onSubmit={onSearch}>
      <div className="col-md-4">
        <input type="text" className="form-control" name="location" placeholder="Location" />
      </div>
      <div className="col-md-3">
        <input type="date" className="form-control" name="checkIn" />
      </div>
      <div className="col-md-3">
        <input type="date" className="form-control" name="checkOut" />
      </div>
      <div className="col-md-2">
        <button type="submit" className="btn btn-primary w-100">Search</button>
      </div>
    </form>
  );
};

export default SearchForm;