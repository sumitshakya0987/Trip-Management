import React from 'react';
import ReservationTable from '../components/ReservationTable';
import reservations from "../mock/mockReservations.json"; // ✅ No destructuring


const ReservationsPage = () => (
  <div className="container py-4">
    <h2>My Reservations</h2>
    <ReservationTable reservations={reservations} />
  </div>
);

export default ReservationsPage;