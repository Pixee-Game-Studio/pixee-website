import { useEffect, useState } from 'react';

const CountdownTimer = ({ deadline }) => {
  const [timeLeft, setTimeLeft] = useState(() => {
    const target = new Date(deadline);
    const now = new Date();
    const difference = target.getTime() - now.getTime();

    if (isNaN(target.getTime()) || difference <= 0) {
      return null;
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const target = new Date(deadline);
      const now = new Date();
      const difference = target.getTime() - now.getTime();

      if (isNaN(target.getTime()) || difference <= 0) {
        return null;
      }

      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    };

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [deadline]);

  if (!timeLeft) {
    return <h2 className="text-xl text-red-600">⏳ زمان تموم شد یا تاریخ اشتباهه!</h2>;
  }

  return (
    <a href='/' className="flex h-[25px] w-[70px] cursor-pointer items-center justify-center pt-1 font-BebasNeueRegular text-xs transition-all border-[1px] bg-transparent hover:transition-all hover:bg-blood-bg text-white sm:h-[35px] sm:w-[100px] sm:text-lg">
      {timeLeft.days} : {timeLeft.hours} : {timeLeft.minutes} : {timeLeft.seconds}
    </a>
  );
};

export default CountdownTimer;
