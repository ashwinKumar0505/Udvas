import React from "react";
import classes from "./Services.module.css";
import react from "../../../assets/react1.png";
import monitor from "../../../assets/monitor.png";
import phone from "../../../assets/phone1.png";
import graphic from "../../../assets/graphic1.png";
const Services = () => {
  return (
    <div className={classes.Services}>
      <h2>Services Section</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est modi
        dolorum rem id ullam, quidem amet possimus recusandae?
      </p>
      <div className={classes.DiffServices}>
        <div className={classes.EachService}>
          <img src={react} alt="react" />
          <h3>Web Development</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            sunt debitis neque maxime atque repudiandae eum?
          </p>
        </div>
        <div className={classes.EachService}>
          <img src={monitor} alt="monitor" />
          <h3>Website Design</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            sunt debitis neque maxime atque repudiandae eum?
          </p>
        </div>
        <div className={classes.EachService}>
          <img src={phone} alt="phone" />
          <h3>App Development</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            sunt debitis neque maxime atque repudiandae eum?
          </p>
        </div>
        <div className={classes.EachService}>
          <img src={graphic} alt="graphic" />
          <h3>Graphic Design</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            sunt debitis neque maxime atque repudiandae eum?
          </p>
        </div>
      </div>
    </div>
  );
};
export default Services;
