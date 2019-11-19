import React from "react";
import classes from "./Skills.module.css";
const Skills = () => {
  return (
    <div className={classes.Skills}>
      <div className={classes.Heading}>
        <h2>Professional Skills Works</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
          asperiores dolores nisi consequuntur corporis eum.
        </p>
      </div>
      <div className={classes.SkillRating}>
        <div className={classes.Card}>
          <div className={classes.Box}>
            <div className={classes.Rating}>
              <svg>
                <circle cx="40" cy="40" r="40"></circle>
                <circle cx="40" cy="40" r="40"></circle>
              </svg>
              <div className={classes.Percentage}>
                <span className={classes.Number}>95</span>%
              </div>
              <div>
                <p className={classes.SkillName}> WordPress</p>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.Card}>
          <div className={classes.Box}>
            <div className={classes.Rating}>
              <svg>
                <circle cx="40" cy="40" r="40"></circle>
                <circle cx="40" cy="40" r="40"></circle>
              </svg>
              <div className={classes.Percentage}>
                <span className={classes.Number}>80</span>%
              </div>
              <div>
                <p className={classes.SkillName}> User Research</p>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.Card}>
          <div className={classes.Box}>
            <div className={classes.Rating}>
              <svg>
                <circle cx="40" cy="40" r="40"></circle>
                <circle cx="40" cy="40" r="40"></circle>
              </svg>
              <div className={classes.Percentage}>
                <span className={classes.Number}>70</span>%
              </div>
              <div>
                <p className={classes.SkillName}> Html &amp; Css</p>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.Card}>
          <div className={classes.Box}>
            <div className={classes.Rating}>
              <svg>
                <circle cx="40" cy="40" r="40"></circle>
                <circle cx="40" cy="40" r="40"></circle>
              </svg>
              <div className={classes.Percentage}>
                <span className={classes.Number}>90</span>%
              </div>
              <div>
                <p className={classes.SkillName}> Javascript</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className={classes.SmallInfo}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
        eligendi quos laborum corporis, at, quidem, reiciendis vel voluptatem
        minus pariatur repellendus rerum dolorum harum inventore? Ullam eius
        porro magni facilis?
      </p>
      <div className={classes.WorksSkills}>
        <h3>Works Skills</h3>
        <br></br>
        <div className={classes.SkillsBar}>
          <div className={classes.Skill1}>
            <p style={{ marginBottom: "20px" }}>WordPress</p>
            <p className={classes.Rating1}>95</p>
            <div className={classes.Bar}>
              <div className={classes.Color}></div>
            </div>
          </div>
          <div className={classes.Skill2}>
            <p style={{ marginBottom: "20px" }}>Html &amp; Css</p>
            <p className={classes.Rating2}>85</p>
            <div className={classes.Bar}>
              <div className={classes.Color}></div>
            </div>
          </div>
          <div className={classes.Skill3}>
            <p style={{ marginBottom: "20px" }}>User Research</p>
            <p className={classes.Rating3}>80</p>
            <div className={classes.Bar}>
              <div className={classes.Color}></div>
            </div>
          </div>
          <div className={classes.Skill4}>
            <p style={{ marginBottom: "20px" }}>Javascript</p>
            <p className={classes.Rating4}>90</p>
            <div className={classes.Bar}>
              <div className={classes.Color}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Skills;
