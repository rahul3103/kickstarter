import React from 'react';
import './Card.css';
import Config from './../config';

const Card = (props) => {

  return (
    <div className="wrapper">
      <figure style={{'backgroundColor': Config.COLOR() }}>
        <h3 className="card-title"><a href={Config.KICK_URL + props.url}>{props.title}</a></h3>
        <span className="card-by">by {props.by}</span>
        <div className="card-blurb">{props.blurb}</div>
        <div className="card-stats clearfix">
          <div className="one-third">
            <div className="stat">{props['amt.pledged']}<sup>{Config.CURRENCY[props.currency]}</sup></div>
            <div className="stat-value">Pledged</div>
          </div>
          <div className="one-third">
            <div className="stat">{props['percentage.funded']}<sup>%</sup></div>
            <div className="stat-value">Funded</div>
          </div>
          <div className="one-third no-border">
            <div className="stat">{props['num.backers']}</div>
            <div className="stat-value">Backers</div>
          </div>
        </div>
        <div className="card-stats clearfix">
          <div className="one-third">
            <div className="stat">{Config.TIME_SINCE(props['end.time'])}</div>
            <div className="stat-value">End Time</div>
          </div>
          <div className="one-third">
            <div className="stat">{props.location}</div>
            <div className="stat-value">Location</div>
          </div>
          <div className="one-third no-border">
            <div className="stat">{Config.COUNTRY[props.country]}</div>
            <div className="stat-value">Country</div>
          </div>
        </div>
    	</figure>
    </div>
  );
}

export default Card;
