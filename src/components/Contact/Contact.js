import React from "react"
import classes from "./Contact.module.css"
import Button from "../Button/Button"
import Blog from "../Blog/Blog"

const Contact =()=>{
  return <div className={classes.Contact}>
    <div className={classes.ContactUs}>
     <h2>Contact Us</h2>
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A eligendi odit quo ipsa consequuntur harum culpa saepe repellendus corrupti at.</p>
     <input type="text" placeholder="Name" className={classes.Name}/>
     <input type="text" placeholder="Email" className={classes.Email}/>
     <input type="text" placeholder="Subject" className={classes.Subject}/>
    <textarea className={classes.Message} placeholder="Message"></textarea>
    <Button>Send Message</Button>
    </div>
    <Blog />
  </div>
}
export default Contact;