import React, { useEffect } from "react";

const TimeClock = () => {
  useEffect(() => {
    const displayTime = document.querySelector(".display-time");

    // Time
    function showTime() {
      let time = new Date();
      displayTime.innerText = time.toLocaleTimeString("en-US", { hour12: false });
      setTimeout(showTime, 1000);
    }

    showTime();

    // Date
    function updateDate() {
      let today = new Date();

      // return number
      let dayName = today.getDay(),
        dayNum = today.getDate(),
        month = today.getMonth(),
        year = today.getFullYear();

      const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      const dayWeek = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
      // value -> ID of the html element
      const IDCollection = ["day", "daynum", "month", "year"];
      // return value array with number as an index
      const val = [dayWeek[dayName], dayNum, months[month], year];
      for (let i = 0; i < IDCollection.length; i++) {
        document.getElementById(IDCollection[i]).textContent = val[i];
      }
    }

    updateDate();
  }, []);

  return (
    <div className="flex justify-center items-center happy-font bg-white dark:bg-amber-500 rounded-2xl p-8 text-black">
      <div className="text-center">
        <div className=" text-base font-semibold happy-font text-white">
          <span id="day" className="mr-1 happy-font">day</span>,
          <span id="daynum" className="ml-1 happy-font">00</span>
          <span id="month" className="mx-1 happy-font">month</span>
          <span id="year" className="ml-1 happy-font">0000</span>
        </div>
        <div className="display-time text-[5rem]  font-bold " style={{fontFamily:'Belgan'}}></div>
      </div>
    </div>
  );
};

export default TimeClock;
