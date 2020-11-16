import React, { useState } from "react";
import moment from "moment";
import classNames from "classnames";

import Layout from "components/Layout/Layout.js";

import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/pages/timePage.js";
const useStyles = makeStyles(styles);
/*
setInterval(() => {
  fNow = moment().format();
  console.log(fNow);
}, 1000);
*/
export default class Time extends React.Component {

  constructor(props) {
    super(props);
    this.state = {date: moment().format()};
  }

  componentDidMount() {
    this.timer = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  tick() {
    this.setState({
      date: moment().format()
    });
  }

  render () {
    return (
      <Layout title="Event Timers">
        <div className="container">
          {this.state.date}
        </div>
      </Layout>
    );
  }
}
