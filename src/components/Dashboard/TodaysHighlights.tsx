import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

const TodaysHighlights: React.FC = () => {
  const highlights = useSelector((state: RootState) => state.dashboard.highlights);

  return (
    <div className="todays-highlights">
      <h3>Today's Highlights</h3>
      <div>Income: {highlights.income} CAD</div>
      <div>Expenses: {highlights.expenses} CAD</div>
      <div>
        Completed Activities:
        {highlights.completedActivities.map((activity, index) => (
          <p key={index}>{activity}</p>
        ))}
      </div>
      <div>
        Scheduled Activities:
        {highlights.scheduledActivities.map((activity, index) => (
          <p key={index}>{activity}</p>
        ))}
      </div>
    </div>
  );
};

export default TodaysHighlights;
