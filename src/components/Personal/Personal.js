import React from "react";
import classes from "./Personal.module.css";
import Skills from "../Skills/Skills";

const Personal = () => {
  return (
    <div className={classes.Personal}>
      <div className={classes.Info}>
        <Skills />
        <div className={classes.Experience}>
          <h2 className={classes.Heading}>My Experiance</h2>
          <div className={classes.Exp}>
            <div className={classes.Left}>
              <span className={classes.Dot1}></span>
              <div className={classes.Exp2}>
                <p>2015-2016</p>
                <h3 style={{ color: "#f16828" }} className={classes.ExpName}>Senior WordPress Developer</h3>
                <p className={classes.ExpDetails}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Possimus a fugit
                </p>
              </div>
              <span className={classes.Dot2}></span>

              <div className={classes.Exp4}>
                <p>2017-2018</p>
                <h3 style={{ color: "#ee5a98" }} className={classes.ExpName}>Freelancer And Themeforest</h3>
                <p className={classes.ExpDetails}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Possimus a fugit
                </p>
              </div>
            </div>
            <div className={classes.Right}>
              <span className={classes.Dot3}></span>
              <div className={classes.Exp1}>
                <p>2014-2015</p>
                <h3 style={{ color: "#64c26d" }} className={classes.ExpName}>
                  Senior Javascript Developer
                </h3>
                <p className={classes.ExpDetails}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Possimus a fugit
                </p>
              </div>
              <span className={classes.Dot4}></span>
              <div className={classes.Exp3}>
                <p>2016-2017</p>
                <h3 style={{ color: "#9c83fb" }} className={classes.ExpName}>UI/UX Designer</h3>
                <p className={classes.ExpDetails}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Possimus a fugit
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Personal;
