import React from "react";
import classes from "./NewsLetter.module.css";
import Button from "../Button/Button";

const NewsLetter = () => {
  return (
    <div className={classes.NewsLetter}>
      <div className={classes.Description}>
      <h2>Newsletter</h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem
        magnam, ex obcaecati exercitationem officia repellat est soluta tempora
        fuga, temporibus ducimus suscipit illum quia repellendus?
      </p>
      </div>
      <div className={classes.Subscription}>
      <input type="text" placeholder="Email Address" />
      <Button>SUBSCRIBE</Button>
      </div>
    </div>
  );
};
export default NewsLetter;
