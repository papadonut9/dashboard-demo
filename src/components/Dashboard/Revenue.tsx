import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

const Revenue: React.FC = () => {
  const revenue = useSelector((state: RootState) => state.dashboard.revenue);

  return (
    <div className="widget revenue">
      <h3>Revenue</h3>
      <div>Total: {revenue.total}</div>
      <div>Upcoming: {revenue.upcoming}</div>
      <div>Ongoing: {revenue.ongoing}</div>
      <div>Completed: {revenue.completed}</div>
    </div>
  );
};

export default Revenue;
