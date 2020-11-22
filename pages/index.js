import React from "react";
import classNames from "classnames";

import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import Clearfix from "components/Clearfix/Clearfix.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Layout from "components/Layout/Layout.js";

import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/pages/indexPage.js";
const useStyles = makeStyles(styles);

export default function Index(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <Layout title="Chelation.Land">
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem md="6" xs="12">
            <Card>
              <CardBody>
                <a href="/timers" className={classes.menuLink}>
                  <h3 className={classes.menuHeader}>Event Timers</h3>
                </a>
                <a href="/timers">
                  <img src={require("assets/img/Study-Calendar.png")} className={classes.cardRight} />
                </a>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </Layout>
  );
}
