import React from "react";
import classes from "./Consultation.module.css";

const Consultation = () => {
  return (
    <div className={classes.Consultation}>
      <div className={classes.Desc}>
        <h2>Get a Free Consultation</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint ipsa
          aspernatur consequatur ea odio. Voluptas accusantium quos.
        </p>
      </div>
      <div className={classes.Consult}>
        <input type="text" placeholder="Your Email Here" className={classes.Email}/>
        <button className={classes.GetButton}>GET NOW</button>
      </div>
    </div>
  );
};

export default Consultation
