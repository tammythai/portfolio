import React from "react";

function Paciolan() {
  return (
    <div className="paciolan">
      <h1>Paciolan - Inventory in Distress</h1>
      <p>
        Summary: A capstone group project in which my group and I created a
        sign-up notification page where users of a service platform could input
        their name, email, and preferred price point to receive SMS
        notifications and ultimately increase potential sales.
      </p>
      <iframe
        src="https://drive.google.com/file/d/1j5LiGEY_aTumLY44CtcE9eIAmjgWUvPS/preview"
        width="450"
        height="250"
      ></iframe>
      <p>
        I worked on the React project with a backend focus by completing these
        tasks:
        <ul>
          <li>
            Using a NoSQL database (AWS DynamoDB) because of the efficient
            access time and straightforward structure of our data
          </li>

          <li>Setting up AWS DynamoDB to connect locally and remotely</li>
          <li>
            Connecting the inputted data via the frontend to be filtered and
            then sent to the database
          </li>
          <li>
            Learning about RESTful APIs and how to properly design endpoints
          </li>
          <li>Documenting the API endpoints, typing, and sample return data</li>
          <li>
            Using Postman to access API endpoints easily to test mock data
          </li>
          <li>
            Setting up Node.js and Express routing in order to hit those API
            endpoints and access the appropriate resources
          </li>
        </ul>
      </p>
    </div>
  );
}

export default Paciolan;
