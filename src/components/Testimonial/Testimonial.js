import React from "react";
import classes from "./Testimonial.module.css";
import test from "../../assets/test.jpg";
const Testimonial = () => {
  return (
    <div className={classes.Testimonial}>
      <h2>Testimonial</h2>
      <div className={classes.Test}>
        <span className={classes.Lesser}>&#60;</span>
        <div className={classes.Profile}>
          <img src={test} alt="profile" />
          <h3>Tonmoy Khan</h3>
          <p className={classes.Ceo}>CEO at MT-Theme</p>
          <span className={classes.Double}>&#8220;</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, nemo
            reiciendis exercitationem ullam, eaque quos molestias, earum
            provident placeat beatae veritatis aliquid obcaecati corrupti quas.
          </p>
          <div className={classes.Pages}>
            <span className={classes.Dot1}></span>
            <span className={classes.Dot2}></span>
            <span className={classes.Dot3}></span>
          </div>
        </div>
        <span className={classes.Greater}>&#62;</span>
      </div>
      <div className={classes.BackProfile}></div>
    </div>
  );
};
export default Testimonial;
