import React, { useState } from 'react';
import RecurrenceOptions from './RecurrenceOptions';
import RecurrenceCustomization from './RecurrenceCustomization';
import MiniCalendar from './MiniCalendar';
import DateRangePicker from './DateRangePicker';

const DatePicker = () => {
  const [recurrencePattern, setRecurrencePattern] = useState('daily');
  const [customization, setCustomization] = useState({});
  const [dateRange, setDateRange] = useState({ startDate: null, endDate: null });

  return (
    <div className="p-4 max-w-md mx-auto">
      <DateRangePicker dateRange={dateRange} setDateRange={setDateRange} />
      <RecurrenceOptions pattern={recurrencePattern} setPattern={setRecurrencePattern} />
      <RecurrenceCustomization pattern={recurrencePattern} customization={customization} setCustomization={setCustomization} />
      <MiniCalendar pattern={recurrencePattern} customization={customization} dateRange={dateRange} />
    </div>
  );
};

export default DatePicker;
