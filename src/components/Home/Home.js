import React, { useState, useEffect } from "react";

import { HiChevronDoubleRight } from "react-icons/hi";

import "./Home.css";

import chart from "../../assets/png/chart.png";
import chart1 from "../../assets/png/curve.png";

import landing_avatar from "../../assets/png/run.png";

const calculateTimeLeft = () => {
  let difference = +new Date("2023-02-05T10:00:00+05:30") - +new Date(); // MM/DD/YYYY

  let timeLeft = {};

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),

      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),

      minutes: Math.floor((difference / 1000 / 60) % 60),

      seconds: Math.floor((difference / 1000) % 60),
    };
  } else {
    timeLeft = {
      days: 0,

      hours: 0,

      minutes: 0,

      seconds: 0,
    };
  }

  return timeLeft;
};

function Home() {
  const openRazorpay = () => {
    window.open("https://rzp.io/l/revive23");
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <div className="home">
      <div className="home__container">
        <div className="countdown">
          <div className="c_starts">starts in</div>

          <div className="timer">
            <div className="timer_div">
              <h1>{timeLeft.days}</h1>

              <p>days</p>
            </div>

            <div className="timer_div">
              <h1>{timeLeft.hours}</h1>

              <p>hrs</p>
            </div>

            <div className="timer_div">
              <h1>{timeLeft.minutes}</h1>

              <p>mins</p>
            </div>
          </div>
        </div>
        <div className="home__right">
          <img src={landing_avatar} alt="" className="landing_avatar" />
        </div>
        <div className="home__left">
          <h1>
            <span>REVIVE</span>
          </h1>

          <p>
            Run with us on 5th February to spread awareness and reduce the
            stigma around mental illness!
          </p>

          <div className="home_reg_btn" onClick={openRazorpay}>
            Register Now
            <HiChevronDoubleRight />
          </div>
        </div>
      </div>

      <img src={chart} alt="" className="landing_curve" />
      <img src={chart1} alt="" className="landing_curve1" />
    </div>
  );
}

export default Home;
