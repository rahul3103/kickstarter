import React from 'react';
import Filter from './Filter';
import Sort from './Sort';
import './filter-bar.css';

const FilterBar = (props) => {
  const { locations, projectFilter, sortBy } = props;
  return (
    <div className="filters">
      <div className="container">
        <div className="block">
          <Filter locations={locations} projectFilter={projectFilter}/>
        </div>
        <div className="block">
          <Sort sortBy={sortBy} />
        </div>
      </div>
    </div>
  );
}

export default FilterBar;
