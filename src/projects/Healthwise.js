import React from "react";
import healthwise1 from "../images/healthwise1.png";
import healthwise2 from "../images/healthwise2.png";
import healthwise3 from "../images/healthwise3.png";

function Healthwise() {
  return (
    <div className="healthwise">
      <h1>Healthwise - Mobile App/Admin Dashboard</h1>
      <p>
        Summary: A capstone group project where we worked on an existing Angular
        mobile application/web admin portal that incorporated IoT healthcare by
        gathering data from patients and managing surveys and viewing that data
        through the dashboard
      </p>
      <img
        src={healthwise3}
        alt="healthwise full stack overview"
        width="450"
        height="250"
      />
      <img
        src={healthwise1}
        alt="healthwise example survey"
        width="225"
        style={{ "padding-right": "20px" }}
      />
      <img
        src={healthwise2}
        alt="healthwise example admin panel/datetime"
        width="225"
      />
      <p>
        On the left is a sample survey. On the right is filtering submission in
        the admin panel.
      </p>
      <p>
        I worked on implementing new features to enhance functionality and
        usability:
        <ul>
          <li>
            Adding a new survey question type: datetime which could be
            customized to date, time, datetime, and ranges of any of those
          </li>
          <li>
            Fixing the required attribute of the survey form; Having to track
            inputs stored within a sub-component
          </li>
          <li>
            Including custom validation for specific question types to be
            checked if required by the form
          </li>
          <li>
            Implementing a caching feature to store surveys offline so patients
            could access them without internet connection
          </li>
        </ul>
      </p>
    </div>
  );
}

export default Healthwise;
