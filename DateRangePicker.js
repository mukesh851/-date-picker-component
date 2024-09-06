import React from 'react';

const DateRangePicker = ({ dateRange, setDateRange }) => {
  return (
    <div className="mb-4">
      <label>
        Start Date:
        <input type="date" value={dateRange.startDate} onChange={(e) => setDateRange({ ...dateRange, startDate: e.target.value })} className="ml-2 p-1 border rounded"/>
      </label>
      <label className="ml-4">
        End Date:
        <input type="date" value={dateRange.endDate} onChange={(e) => setDateRange({ ...dateRange, endDate: e.target.value })} className="ml-2 p-1 border rounded"/>
      </label>
    </div>
  );
};

export default DateRangePicker;
