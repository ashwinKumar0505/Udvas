import React from "react";
import classes from "./Blog.module.css";
import blog1 from "../../assets/blog1.jpeg";
import blog2 from "../../assets/blog2.jpg";
const Blog = () => {
  return (
    <div className={classes.Blog}>
      <h2>My Blog</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum nam ipsam
        cum officiis quod non itaque ducimus! Animi, quibusdam minus.
      </p>
      <div className={classes.Blogs}>
        <div className={classes.Blog1}>
          <div className={classes.BlogImage1}>
            <img src={blog1} alt="blog1" />
            <div className={classes.Date1}>26 Jun</div>
          </div>
          <div className={classes.Desc}>
            <h4>How to Create Great Logo for Your Business</h4>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed
              placeat iusto adipisci provident modi repellat.
            </p>
          </div>
        </div>

        <div className={classes.Blog2}>
          <div className={classes.BlogImage1}>
          <img src={blog2} alt="blog2" />
          <div className={classes.Date2}>26 Jun</div>
          </div>
          <div className={classes.Desc}>
            <h4>How to Create Great Logo for Your Business</h4>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed
              placeat iusto adipisci provident modi repellat.
            </p>
          </div>
        </div>
      </div>
      <div className={classes.Pages}>
        <span className={classes.Dot1}></span>
        <span className={classes.Dot2}></span>
        <span className={classes.Dot3}></span>
      </div>
    </div>
  );
};
export default Blog;
