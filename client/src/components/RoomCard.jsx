import React from 'react';

const RoomCard = ({ room }) => (
  <div className="card mb-3">
    <div className="card-body">
      <h5 className="card-title">{room.name}</h5>
      <p className="card-text">{room.description}</p>
      <p className="card-text">${room.price} / night</p>
      <button className="btn btn-success">Book Now</button>
    </div>
  </div>
);

export default RoomCard;