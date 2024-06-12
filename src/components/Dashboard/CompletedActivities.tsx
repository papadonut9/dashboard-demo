import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

const CompletedActivities: React.FC = () => {
  const completedActivities = useSelector((state: RootState) => state.dashboard.highlights.completedActivities);

  return (
    <div className="completed-activities">
      <h3>Completed Activities</h3>
      {completedActivities.map((activity, index) => (
        <p key={index}>{activity}</p>
      ))}
    </div>
  );
};

export default CompletedActivities;
