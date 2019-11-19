import React from "react"
import classes from "./Section.module.css"
import Services from "./Services/Services"
import Portfolio from "./Portfolio/Portfolio"
const Section=()=>{
  return (
    <div className={classes.Section}>
      <Services />
      <Portfolio />
    </div>
  )
}
export default Section;