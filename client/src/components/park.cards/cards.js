import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ballparksActions from '../../actions/ballparks.actions';
import Card from '../card/card';
import ParkCardFront from '../park.card/front';
import ParkCardBack from '../park.card/back';
import './cards.css';

const Cards = ({
  ballparks
  }) => {
  const {ballparks: parks, isFetching} = ballparks;
  return isFetching ? <div>loading</div> : (
    <div className="card-container">
      {
        parks.map(park =>
          <Card key={park.name} width={350} height={600}
                front={<ParkCardFront park={park} imageHeight={300} width={350} height={600} />}
                back={<ParkCardBack  park={park} imageHeight={300} width={350} height={600} />}
          ></Card>)
      }
    </div>);
}

export default Cards;