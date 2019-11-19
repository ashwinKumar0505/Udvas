import React from "react";
import { SocialIcon } from "react-social-icons"
import classes from "./Footer.module.css";
const Footer = () => {
  return (
    <div className={classes.Footer}>
      <div className={classes.SocialIcons}>
      <SocialIcon network="facebook" bgColor="#766bfa" fgColor="white" style={{width:35,height:35}}/>
      <SocialIcon url="http://twitter.com/jaketrent" bgColor="#766bfa" fgColor="white" style={{width:35,height:35}}/>
      <SocialIcon network="google" bgColor="#766bfa" fgColor="white" style={{width:35,height:35}}/>
      <SocialIcon network="instagram" bgColor="#766bfa" fgColor="white" style={{width:35,height:35}}/>
      <SocialIcon url="http://linkedin.com/in/jaketrent" bgColor="#766bfa" fgColor="white" style={{width:35,height:35}}/>
      <SocialIcon network="youtube" bgColor="#766bfa" fgColor="white" style={{width:35,height:35}}/>
       </div>
       <p className={classes.Copyrights}> Copyright 2018 .All Rights Reserved</p>
    </div>

  );
};
export default Footer;
