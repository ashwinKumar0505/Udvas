import React from "react";
import classes from "./Portfolio.module.css";
import temp1 from "../../../assets/temp5.png";
import temp2 from "../../../assets/temp2.jpg";
import temp3 from "../../../assets/temp3.jpg";
import temp4 from "../../../assets/temp4.jpeg";
const Portfolio = () => {
  return (
    <div className={classes.Portfolio}>
      <h2>Portfolio Section</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
        ipsum accusantium amet cumque ex nisi quis maiores alias.
      </p>
      <div className={classes.templates}>
        <img src={temp1} alt="temp1" className={classes.Webpage}/>
        <img src={temp2} alt="temp2" className={classes.Webpage}/>
        <img src={temp3} alt="temp3" className={classes.Webpage}/>
        <img src={temp4} alt="temp4" className={classes.Webpage}/>
      </div>
    </div>
  );
};

export default Portfolio;
