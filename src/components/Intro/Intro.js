import React from "react"
import classes from "./Intro.module.css"
import Button from "../Button/Button"
const Intro =()=>{
  return <div className={classes.Intro}>
    <div className={classes.desc}>
   <h3>Wellcome! I'M</h3>
   <h1>ASHWIN KUMAR.J.J</h1>
   <h4>Web Developer &amp; UX Designer</h4>
   <br></br>
   <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos consequatur saepe totam illum, animi nam molestiae cum debitis ratione et qui maxime asperiores cupiditate, alias eum. Recusandae aliquid ex corrupti!</p>
   <br></br>
   <br></br>
   <Button>My Work</Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Button>Hire Me</Button>
  
  </div>
  </div>
}
export default Intro;