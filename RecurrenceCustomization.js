import React from 'react';

const RecurrenceCustomization = ({ pattern, customization, setCustomization }) => {
  const handleChange = (e) => {
    setCustomization({ ...customization, [e.target.name]: e.target.value });
  };

  return (
    <div className="mb-4">
      {pattern === 'daily' && (
        <div>
          <label>Every 
            <input type="number" name="days" min="1" value={customization.days || 1} onChange={handleChange} className="ml-2 p-1 border rounded w-16"/>
            day(s)
          </label>
        </div>
      )}


      {pattern === 'weekly' && (
        <div>
          <label>Every 
            <input type="number" name="weeks" min="1" value={customization.weeks || 1} onChange={handleChange} className="ml-2 p-1 border rounded w-16"/>
            week(s) on 
          </label>
          <div className=" mt-2">
            {['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].map(day => (
              <label key={day}>
                <input type="checkbox" name={day} checked={customization[day]} onChange={(e) => setCustomization({ ...customization, [day]: e.target.checked })}/>
                {day.slice(0, 3)}
              </label>
            ))}
          </div>
        </div>
      )}


      {pattern === 'monthly' && (
        <div>
          <label>Every 
            <input type="number" name="months" min="1" value={customization.months || 1} onChange={handleChange} className="ml-2 p-1 border rounded w-16"/>
            month(s) on 
          </label>
          <div className=" mt-2">
            {['January', 'February', 'March', 'April', 'May', 'June', 'July','August', 'September', 'October', 'November', 'December'].map(day => (
              <label key={day}>
                <input type="checkbox" name={day} checked={customization[day]} onChange={(e) => setCustomization({ ...customization, [day]: e.target.checked })}/>
                {day.slice(0, 3)}
              </label>
            ))}
          </div>
        </div>
      )}

      {pattern === 'yearly' && (
        <div>
          <label>Every 
            <input type="number" name="years" min="1" value={customization.years || 1} onChange={handleChange} className="ml-2 p-1 border rounded w-16"/>
            year(s) on 
          </label>
          <div className=" mt-2">
            {['0', '1', '2', '3', '4', '5', '6', '7','8', '9'].map(day => (
              <label key={day}>
                <input type="checkbox" name={day} checked={customization[day]} onChange={(e) => setCustomization({ ...customization, [day]: e.target.checked })}/>
                {day.slice(0, 3)}
              </label>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default RecurrenceCustomization;
