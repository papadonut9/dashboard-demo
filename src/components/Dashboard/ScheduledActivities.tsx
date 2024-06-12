import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

const ScheduledActivities: React.FC = () => {
  const scheduledActivities = useSelector((state: RootState) => state.dashboard.highlights.scheduledActivities);

  return (
    <div className="scheduled-activities">
      <h3>Scheduled Activities</h3>
      {scheduledActivities.map((activity, index) => (
        <p key={index}>{activity}</p>
      ))}
    </div>
  );
};

export default ScheduledActivities;
