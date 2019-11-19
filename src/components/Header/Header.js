import React from "react";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <div className={classes.Header}>
      <div className={classes.Title}>Udvas</div>
      <div className={classes.HeaderItems}>
        <span>Home</span>
        <span>About</span>
        <span>Service</span>
        <span>spanortfolio</span>
        <span>Testimonial</span>
        <span >Blog</span>
        <span>contact</span>
      </div>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      ></link>
      <div className={classes.SocialIcons}>
        {" "}
        <a href="#" class="fa fa-facebook"></a>
        <a href="#" class="fa fa-twitter"></a>
        <a href="#" class="fa fa-instagram"></a>
        <a href="#" class="fa fa-linkedin"></a>
      </div>
    </div>
  );
};

export default Header;
