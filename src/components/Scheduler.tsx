import { Button, Dropdown } from "flowbite-react";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Scheduler = () => {
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [endDate, setEndDate] = useState<Date | null>(new Date());

  console.log("start", startDate);
  return (
    <div style={{ height: "100%", width: "100%" }}>
      <div
        style={{
          display: "flex",
          paddingTop: "10%",
          margin: "auto",
          width: "50%",
        }}
      >
        <div style={{ paddingRight: "50px" }}>
          <p>Employee</p>
          <Dropdown />
        </div>
        <div>
          <p>Location</p>
          <Dropdown />
        </div>
      </div>

      <div
        style={{
          display: "flex",
          paddingTop: "10%",
          margin: "auto",
          width: "50%",
        }}
      >
        <div style={{ paddingRight: "50px" }}>
          <p>Start Time</p>
          <DatePicker
            showTimeSelect
            dateFormat="Pp"
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
        </div>
        <div>
          <p>End Time</p>
          <DatePicker
            showTimeSelect
            dateFormat="Pp"
            selected={endDate}
            onChange={(date) => setEndDate(date)}
          />
        </div>
      </div>
      <Button style={{ width: "100px" }}>Save</Button>
    </div>
  );
};

export default Scheduler;
