import classes from "./Card.module.css";
import Form from "react-bootstrap/Form";
import { GiThink, GiFemaleLegs } from "react-icons/gi";
import React, { useState } from "react";
import Login from "./Forms/Login";
import Signup from "./Forms/Signup";

export default function Card({ setIsLoggedIn }) {
  const [In, setIn] = useState(true);

  return (
    <div className={classes.Landing}>
      <div className={classes.Container}>
        <div className={classes.Card}>
          <div className={classes.formsDiv}>
            {In && <Login setIsLoggedIn={setIsLoggedIn} />}
            {!In && <Signup setIsLoggedIn={setIsLoggedIn} />}
            <Form.Check
              onClick={() => {
                setIn(!In);
              }}
              type="switch"
              style={{ marginTop: "10px" }}
              label={`${In ? "Signup" : "Login"} Instead`}
            />
          </div>
          <div className={classes.logoDiv}>
            <h1>
              Thoughts
              <GiThink />
            </h1>
            <h1>
              Not Thots
              <GiFemaleLegs />
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
