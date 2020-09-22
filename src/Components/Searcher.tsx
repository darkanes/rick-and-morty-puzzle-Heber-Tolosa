import React, { useState } from "react";

export interface SearchearProps {
  handleSearch: Function;
}

const Searchear: React.SFC<SearchearProps> = ({ handleSearch }) => {
  const [name, setName] = useState("");

  const handleSearchs = (e) => {
    e.preventDefault();
    let nombre = name;
    if (nombre.length < 3) {
      return;
    }
    handleSearch(nombre);
  };

  return (
    <form action="" onSubmit={(e) => handleSearchs(e)}>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          onChange={(e) => setName(e.target.value)}
        />
        <div className="input-group-append">
          <button type="submit" className="btn btn-outline-success">
            Buscar
          </button>
        </div>
      </div>
    </form>
  );
};

export default Searchear;
