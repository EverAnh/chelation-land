import React from "react";
import Head from "next/head";
import Parallax from "components/Parallax/Parallax.js";

import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/components/layoutStyle.js";
const useStyles = makeStyles(styles);

export default function Layout(props) {
  const classes = useStyles();
  return (
    <div style={props.landing ? null : {marginBottom: "30px"}}>
      <Head>
        <title>{props.headTitle ? props.headTitle + " - Chelation.Land" : "Chelation.Land - Magia Record fan site"}</title>
      </Head>
      <Parallax small filter image={require("assets/img/sakura-tree-banner.png")}>
        <h1 className={classes.title}>{props.title}</h1>
      </Parallax>
      {props.children}
    </div>
  );
}
