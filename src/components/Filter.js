import React, { Component } from 'react';
import './filter.css';


class Filter extends Component {

  state = {
    searchedLocation: [],
    searchedTerm: ''
  }

  handleChange = (location) => {
    this.props.projectFilter(location);
    if (location === 'All')
    this.setState({ searchedLocation: [], searchedTerm: '' });
    else this.setState({ searchedLocation: [], searchedTerm: location });
  }

  onInputChange = (e) => {
    const { locations } = this.props;
    e.preventDefault();
    const searchedTerm = e.target.value;

    if (searchedTerm.length > 0) {
      const searchedLocation = locations.filter(location => location.match(new RegExp('\\b'+ searchedTerm + '.*','i')));
      this.setState({ searchedLocation, searchedTerm });
    }
    else this.handleChange('All');
  }

  displayLocations = () => {
    return this.state.searchedLocation.map(location => (
      <li
        onClick={() => this.handleChange(location)}
        key={location}
        className="c-dropdown__item">
          {location}
      </li>
    )
  )}

  render() {
    return (
      <div className='filter-loc'>
        <input value={this.state.searchedTerm} onChange={event => this.onInputChange(event)} placeholder="Filter by Location" />
        <ul className="c-dropdown__list">
          {this.displayLocations()}
        </ul>
      </div>
    );
  }
}

export default Filter;
