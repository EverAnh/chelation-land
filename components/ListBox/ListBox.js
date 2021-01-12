import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/components/boxStyle.js";
const useStyles = makeStyles(styles);

export default function ListBox(props) {
  const classes = useStyles();
  /*
  let imgReq = "";
  switch (props.categ) {
    case "bag":
      imgReq = require("assets/img/icons/bag.png");
      break;
    case "gacha":
      imgReq = require("assets/img/icons/Gacha-Small.png");
      break;
    case "maintenance":
      imgReq = require("assets/img/icons/gears.png");
      break;
    case "monthly":
      imgReq = require("assets/img/icons/mitama-f.png");
      break;
    case "ranking":
      imgReq = require("assets/img/icons/mirrors-ranking.png");
      break;
    case "shopExpire":
      imgReq = require("assets/img/icons/riche-pack.png");
      break;
    default:
      imgReq = require("assets/img/icons/Study-Calendar.png");
  }
  */
  return (
    <div className={classes.box}>
      <div className={classes.boxBody}>
        {props.children}
      </div>
    </div>
  );
}
