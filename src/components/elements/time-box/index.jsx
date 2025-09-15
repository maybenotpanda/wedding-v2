// ** React Imports
import React from 'react'

const TimeBox = ({ value, label, delay = 300 }) => {
  return (
    <div className="grid gap-1 items-center" data-aos="fade-up" data-aos-duration={delay}>
      <h3 className="text-selected font-serif text-white">{Number(value) || 0}</h3>
      <p className="text-readOnly text-white">{label}</p>
    </div>
  );
}

export default TimeBox