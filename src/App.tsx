import React, { useState } from "react";
import "./App.css";
import Searcher from "./Components/Searcher";
import CardContainer from "./Components/CardContainer";
import Filter from "./Components/Filter";

function App(): JSX.Element {
  const [busqueda, setBusqueda] = useState("");
  const [filter, setFilter] = useState("characters");
  const [page, setPage] = useState(1);

  const handleSearch = (name) => {
    setBusqueda(name);
  };
  const handlePage = (action) => {
    if (action === "prev") {
      setPage(page - 1);
    } else {
      setPage(page + 1);
    }
  };
  const handleFilter = (filters) => {
    setFilter(filters);
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-6  offset-md-3 mt-3">
          <Searcher handleSearch={handleSearch} />
        </div>
        <div className="col-md-6 col-12 offset-1 offset-md-6 mb-2  ">
          <Filter handleFilter={handleFilter} />
        </div>
        <div className="col-12">
          <CardContainer
            busqueda={busqueda}
            filter={filter}
            handlePage={handlePage}
            page={page}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
