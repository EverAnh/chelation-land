import React from "react";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/components/boxStyle.js";
const useStyles = makeStyles(styles);

export default function CalloutBox(props) {
  const classes = useStyles();
  return (
    <div className={classNames(classes.box, classes.callout)}>
      {props.title ? 
        <div className={classes.calloutHeader}>
          <h4>{props.title}</h4>
        </div>
        : null
      }
      <div className={classes.boxBody}>
        {props.children}
      </div>
    </div>
  );
}
