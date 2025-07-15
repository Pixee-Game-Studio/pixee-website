import { useEffect, useState } from "react";

const CountdownTimer = ({ deadline }) => {
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
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      const updated = calculateTimeLeft();
      setTimeLeft(updated);
    }, 1000);

    return () => clearInterval(timer); // تمیز کردن تایمر
  }, [deadline]); // فقط به deadline وابسته باشه، نه timeLeft

  if (!timeLeft) {
    return <h2 className="text-red-600 text-xl">⏳ زمان تموم شد یا تاریخ اشتباهه!</h2>;
  }

  return (
    // <div className="text-center text-2xl font-mono">
    //   <h2 className="mb-4">Countdown to {deadline}:</h2>
    //   <div className="flex justify-center gap-6">
    //     <div>
    //       <span className="block text-4xl">{timeLeft.days}</span>Days
    //     </div>
    //     <div>
    //       <span className="block text-4xl">{timeLeft.hours}</span>Hours
    //     </div>
    //     <div>
    //       <span className="block text-4xl">{timeLeft.minutes}</span>Minutes
    //     </div>
    //     <div>
    //       <span className="block text-4xl">{timeLeft.seconds}</span>Seconds
    //     </div>
    //   </div>
    // </div>
    <a className='transition-all bg-dust-bg w-[70px] sm:w-[100px] h-[25px] sm:h-[35px] pt-1 items-center justify-center flex bg-white font-BebasNeueRegular hover:bg-blood-bg hover:bg-transparent hover:text-white hover:border-[1px] hover:transition-all text-xs sm:text-lg text-[#000]'>{timeLeft.days} : {timeLeft.hours} : {timeLeft.minutes} : {timeLeft.seconds}</a>

  );
};

export default CountdownTimer;
