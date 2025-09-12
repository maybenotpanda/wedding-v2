// ** React Imports
import React, { useCallback, useEffect, useMemo, useState } from "react";

// ** Elements Imports
import TimeBox from "components/elements/time-box";

const CountdownTimer = ({ type }) => {
  const times = useMemo(() => ({
    akad: new Date("2025-10-03T07:00:00").getTime(),
    resepsi: new Date("2025-10-04T10:00:00").getTime(),
    unduhMantu: new Date("2025-10-05T10:00:00").getTime(),
  }), []);

  const getTargetDate = useCallback(() => {
    const now = Date.now();
    if (type === "Keluarga" || type === "VIP" || type === "Teman") {
      if (now < times.akad) return { label: "Akad", date: times.akad };
    }
    if (type === "Keluarga" || type === "VIP") {
      if (now < times.unduhMantu) return { label: "Unduh Mantu", date: times.unduhMantu };
    }
    if (now < times.resepsi) return { label: "Resepsi", date: times.resepsi };

    return { label: "Selesai", date: null };
  }, [type, times])

  const initialTarget = getTargetDate();
  const [timeRemaining, setTimeRemaining] = useState(
    calculateTimeRemaining(initialTarget.date)
  );


  useEffect(() => {
    const interval = setInterval(() => {
      const newTarget = getTargetDate();
      setTimeRemaining(calculateTimeRemaining(newTarget.date));
    }, 1000);

    return () => clearInterval(interval)
  }, [getTargetDate])

  const { days, hours, minutes, seconds } = timeRemaining;

  return (
    <div className="justify-between bg-primary py-12">
      <div className="grid gap-2 justify-center items-center">
        <h2
          className="text-center font-serif text-secondary font-title"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
        >
          Save The Date
        </h2>
        <div className="flex gap-14 text-center">
          <TimeBox value={days} label="Hari" delay="250" />
          <TimeBox value={hours} label="Jam" delay="350" />
          <TimeBox value={minutes} label="Menit" delay="450" />
          <TimeBox value={seconds} label="Detik" delay="550" />
        </div>
      </div>
    </div>
  );
}

// helper
function calculateTimeRemaining(targetDate) {
  if (!targetDate) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  const now = Date.now();
  const diff = targetDate - now;

  if (isNaN(diff) || diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return {
    days: Math.max(0, Math.floor(diff / (1000 * 60 * 60 * 24))),
    hours: Math.max(0, Math.floor((diff / (1000 * 60 * 60)) % 24)),
    minutes: Math.max(0, Math.floor((diff / (1000 * 60)) % 60)),
    seconds: Math.max(0, Math.floor((diff / 1000) % 60)),
  };
}


export default CountdownTimer;
