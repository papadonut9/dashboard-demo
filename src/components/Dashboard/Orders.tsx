import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

const Orders: React.FC = () => {
  const orders = useSelector((state: RootState) => state.dashboard.orders);

  return (
    <div className="widget orders">
      <h3>Orders</h3>
      <div>Total: {orders.total}</div>
      <div>Upcoming: {orders.upcoming}</div>
      <div>Ongoing: {orders.ongoing}</div>
      <div>Completed: {orders.completed}</div>
    </div>
  );
};

export default Orders;
