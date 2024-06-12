import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

const Trips: React.FC = () => {
  const trips = useSelector((state: RootState) => state.dashboard.trips);

  return (
    <div className="widget trips">
      <h3>Trips</h3>
      <div>Total: {trips.total}</div>
      <div>Upcoming: {trips.upcoming}</div>
      <div>Ongoing: {trips.ongoing}</div>
      <div>Completed: {trips.completed}</div>
    </div>
  );
};

export default Trips;
