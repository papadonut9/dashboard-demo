import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Orders from './Orders';
import Trips from './Trips';
import Revenue from './Revenue';
import Expenses from './Expenses';
import QuickActions from './QuickActions';
import HighPriorityAlerts from './HighPriorityAlerts';
import TodaysHighlights from './TodaysHighlights';
import CompletedActivities from './CompletedActivities';
import ScheduledActivities from './ScheduledActivities';
import { fetchDashboardData } from '../../redux/slices/dashboardSlice';
import { AppDispatch } from '../../redux/store';

const Dashboard: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDashboardData());
  }, [dispatch]);

  return (
    <div className="dashboard">
      <div className="widgets">
        <Orders />
        <Trips />
        <Revenue />
        <Expenses />
      </div>
      <QuickActions />
      <HighPriorityAlerts />
      <TodaysHighlights />
      <div className="activities">
        <CompletedActivities />
        <ScheduledActivities />
      </div>
    </div>
  );
};

export default Dashboard;
