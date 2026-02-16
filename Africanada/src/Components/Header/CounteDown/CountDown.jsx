import { useEffect, useState } from "react";
import "./countdown.css"

const Countdown = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = new Date(targetDate) - new Date();

    if (difference <= 0) return null;

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor(
        (difference / (1000 * 60 * 60)) % 24
      ),
      minutes: Math.floor(
        (difference / (1000 * 60)) % 60
      ),
      seconds: Math.floor(
        (difference / 1000) % 60
      ),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  if (!timeLeft) return <p>Countdown finished 🚀</p>;

  return (
    <div className="countdown">
      <div className="timer-Box">{timeLeft.days}<span style={{fontSize:"15px", fontWeight:"300"}}>Days</span></div>
      <div className="timer-Box">{timeLeft.hours} <span style={{fontSize:"15px", fontWeight:"300"}}>Hours</span></div>
      <div className="timer-Box">{timeLeft.minutes}<span style={{fontSize:"15px",  fontWeight:"300"}}>Minutes</span></div>
      <div className="timer-Box">{timeLeft.seconds}<span style={{fontSize:"15px", fontWeight:"300"}}>Seconds</span>

      </div>
    </div>
  );
};

export default Countdown;
