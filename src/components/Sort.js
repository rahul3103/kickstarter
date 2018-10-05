import React, { Component } from 'react';
import './sort.css';


class Sort extends Component {

  handleChange = (e) => {
    e.preventDefault();
    this.props.sortBy(e.target.value);
  }

  render() {

    return (
      <div className='sort'>
        <button
          onClick={() => this.props.sortBy('percentage.funded', false)}
          className="btn btn-green btn-border-o">
          Funded <i className="fa fa-sort-numeric-asc" aria-hidden="true"></i>
        </button>
        <button
          onClick={() => this.props.sortBy('percentage.funded', true)}
          className="btn btn-blue btn-border-o">
          Funded <i className="fa fa-sort-numeric-desc" aria-hidden="true"></i>
        </button>
        <button
          onClick={() => this.props.sortBy('end.time', false)}
          className="btn btn-purple btn-border-o">
          End Time <i className="fa fa-sort-amount-asc" aria-hidden="true"></i>
        </button>
        <button
          onClick={() => this.props.sortBy('end.time', true)}
          className="btn btn-navy btn-border-o">
          End Time <i className="fa fa-sort-amount-desc" aria-hidden="true"></i>
        </button>
      </div>
    );
  }
}

export default Sort;
