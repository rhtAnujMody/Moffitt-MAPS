import React, { useState } from 'react';

const SliderQuestion = ({
  question,
  min,
  max,
  initialValue,
  onChange,
  labels,
}) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (event) => {
    setValue(event.target.value);
    onChange(event.target.value);
  };

  return (
    <div className="slider-question">
      <p>{question}</p>
      <div className="slider-container">
        <input
          type="range"
          min={min}
          max={max}
          value={value}
          onChange={handleChange}
        />
        <div className="slider-value">{value}</div>
      </div>
      <div className="slider-labels">
        <span className="slider-label-left">{labels[0]}</span>
        <span className="slider-label-right">{labels[1]}</span>
      </div>
    </div>
  );
};

export default SliderQuestion;