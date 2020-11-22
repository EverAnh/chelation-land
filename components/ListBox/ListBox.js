import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/components/boxStyle.js";
const useStyles = makeStyles(styles);

export default function ListBox(props) {
  const classes = useStyles();
  let imgReq = "";
  switch (props.categ) {
    case "gacha":
      imgReq = require("assets/img/Gacha-Small.png");
      break;
    case "monthly":
      imgReq = require("assets/img/mitama-f.png");
      break;
    case "shopExpire":
      imgReq = require("assets/img/riche-pack.png");
      break;
    default:
      imgReq = require("assets/img/Study-Calendar.png");
  }
  return (
    <div className={classes.box}>
      <div className={classes.boxBody}>
        <img src={imgReq} className={classes.categImg2} />
        {props.children}
      </div>
    </div>
  );
}
