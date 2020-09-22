import React, { useState } from "react";

export interface FilterProps {
  handleFilter: Function;
}

const Filter: React.SFC<FilterProps> = ({ handleFilter }) => {
  const [filter, setFilter] = useState("characters");

  const handleFilters = (e) => {
    setFilter(e.target.value);
    handleFilter(e.target.value);
  };

  return (
    <form className="row">
      <span className="font-weight-bold">Filter:</span>
      <div className="form-check col-md-2 col-3 ml-2 ">
        <input
          className="form-check-input"
          type="radio"
          name="filter"
          value="characters"
          checked={filter === "characters"}
          onChange={handleFilters}
          defaultChecked
        />
        <label className="form-check-label">Character</label>
      </div>
      <div className="form-check col-2 col-md-1 pl-3 mr-md-1 ">
        <input
          className="form-check-input"
          type="radio"
          name="filter"
          value="locations"
          checked={filter === "locations"}
          onChange={handleFilters}
        />
        <label className="form-check-label">Location</label>
      </div>
      <div className="form-check col-2 ml-3 ml-md-4 ">
        <input
          className="form-check-input"
          type="radio"
          name="filter"
          value="episodes"
          checked={filter === "episodes"}
          onChange={handleFilters}
        />
        <label className="form-check-label">Episode</label>
      </div>
    </form>
  );
};

export default Filter;
