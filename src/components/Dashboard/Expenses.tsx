import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

const Expenses: React.FC = () => {
  const expenses = useSelector((state: RootState) => state.dashboard.expenses);

  return (
    <div className="widget expenses">
      <h3>Expenses</h3>
      <div>Total: {expenses.total}</div>
      <div>Freight Charge: {expenses.freightCharge}</div>
      <div>Driver Charge: {expenses.driverCharge}</div>
      <div>Other Charges: {expenses.otherCharges}</div>
    </div>
  );
};

export default Expenses;
