import React, { useState } from 'react';
import SearchForm from '../components/SearchForm';
import RoomCard from '../components/RoomCard';
import rooms from "../mock/mockRooms.json"; // ✅ correct


const HomePage = () => {
  const [filteredRooms, setFilteredRooms] = useState(rooms);

  const handleSearch = (e) => {
    e.preventDefault();
    const location = e.target.location.value.toLowerCase();
    const results = rooms.filter(r => r.location.toLowerCase().includes(location));
    setFilteredRooms(results);
  };

  return (
    <div className="container py-4">
      <SearchForm onSearch={handleSearch} />
      {filteredRooms.map(room => <RoomCard key={room.id} room={room} />)}
    </div>
  );
};

export default HomePage;