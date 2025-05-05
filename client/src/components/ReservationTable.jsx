import React from 'react';

const ReservationTable = ({ reservations }) => (
  <table className="table table-bordered">
    <thead>
      <tr>
        <th>Hotel</th>
        <th>Check-in</th>
        <th>Check-out</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      {reservations.map((res, idx) => (
        <tr key={idx}>
          <td>{res.hotel}</td>
          <td>{res.checkIn}</td>
          <td>{res.checkOut}</td>
          <td>{res.status}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default ReservationTable;