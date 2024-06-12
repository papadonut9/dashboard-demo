import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

const HighPriorityAlerts: React.FC = () => {
  const alerts = useSelector((state: RootState) => state.dashboard.alerts);

  return (
    <div className="high-priority-alerts">
      <h3>High Priority Alerts</h3>
      {alerts.map((alert) => (
        <div key={alert.id} className="alert">
          <p>{alert.message}</p>
          <span>{alert.date}</span>
          <button>Ignore</button>
          <button>Resolve</button>
        </div>
      ))}
    </div>
  );
};

export default HighPriorityAlerts;
