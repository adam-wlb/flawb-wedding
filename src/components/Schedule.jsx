import React from "react";
import {
  CARRIAGES,
  CEREMONY,
  DRINKS_RECEPTION,
  EVENING_RECEPTION,
  MORNING_BREAKFAST,
  MORNING_BREAKFAST_END,
  toSimpleTimeString,
  WEDDING_BREAKFAST,
} from "../helpers/schedule";

const Schedule = () => (
  <div id="Schedule">
    <div className="container py-3">
      <div className="row p-3">
        <div className="col">
          <h1>{"Order of the Day"}</h1>
        </div>
      </div>
      <div className="row p-3">
        <div className="col">
          <h2>{CEREMONY.toDateString()}</h2>
        </div>
      </div>
      <div className="row px-3">
        <div className="col">
          <h3>{"St Andrew's Church"}</h3>
          <p>
            {"Ceremony: "}
            {toSimpleTimeString(CEREMONY)}
          </p>
        </div>
      </div>
      <div className="row px-3">
        <div className="col">
          <h3>{"Swinton Park Hotel"}</h3>
          <p>
            {"Drinks Reception: "}
            {toSimpleTimeString(DRINKS_RECEPTION)}
          </p>
          <p>
            {"Wedding Breakfast: "}
            {toSimpleTimeString(WEDDING_BREAKFAST)}
          </p>
          <p>
            {"Evening Reception: "}
            {toSimpleTimeString(EVENING_RECEPTION)}
          </p>
          <p>
            {"Carriages: "}
            {toSimpleTimeString(CARRIAGES)}
          </p>
        </div>
      </div>
      <div className="row p-3">
        <div className="col">
          <h2>{MORNING_BREAKFAST.toDateString()}</h2>
        </div>
      </div>
      <div className="row px-3">
        <div className="col">
          <h3>{"Swinton Park Hotel"}</h3>
          <p>{"For those staying at Swinton, please join us for:"}</p>
          <p>
            {"Breakfast: "}
            {toSimpleTimeString(MORNING_BREAKFAST)}
            {" - "}
            {toSimpleTimeString(MORNING_BREAKFAST_END)}
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Schedule;
