import React, { useState } from "react";
import moment from "moment";
import classNames from "classnames";
import eventsData from "data/events.js";

import CalloutBox from "components/CalloutBox/CalloutBox.js";
import Checkbox from "@material-ui/core/Checkbox";
import Container from "@material-ui/core/Container";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Layout from "components/Layout/Layout.js";
import ListBox from "components/ListBox/ListBox.js";

import { withStyles } from '@material-ui/core/styles';
import styles from "assets/jss/pages/timePage.js";

const dateF = "MMMM D";
const timeF = "H:mm:ss";

class Timers extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      now: moment().utc().utcOffset(9 * 60),
      rankedReset: moment().utc().utcOffset(9 * 60).startOf('day').add(16,'hours').add(1, 'seconds'),
      daily: moment().utc().utcOffset(9 * 60).startOf('day').add(1,'days').add(1, 'seconds'),
      filters: {
        expires: true,
        gacha: true,
        future: true
      }
    };
    this.handleToggle = this.handleToggle.bind(this);
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

  countdown(target, useShortform) {
    if (!target) {
      return "(Dates To Be Announced)";
    }
    else {
      if (useShortform) {
        return <span className={this.props.classes.highlighted}>
            {moment.duration(target.diff(this.state.now)).hours() + "h " 
            + moment.duration(target.diff(this.state.now)).minutes() + "m " 
            + moment.duration(target.diff(this.state.now)).seconds() + "s"}</span>;
      }
      else {
        return <span className={this.props.classes.highlighted}>
            {moment.duration(target.diff(this.state.now)).days() + " days, " 
            + moment.duration(target.diff(this.state.now)).hours() + " hours, " 
            + moment.duration(target.diff(this.state.now)).minutes() + " minutes, " 
            + moment.duration(target.diff(this.state.now)).seconds() + " seconds"}</span>;
      }
    }
  }

  handleToggle(categ) {
    let newFilters = this.state.filters;
    switch (categ) {
      case "expires":
        newFilters.expires = !newFilters.expires;
        break;
      case "gacha":
        newFilters.gacha = !newFilters.gacha;
        break;
      case "future":
        newFilters.future = !newFilters.future;
        break;
      default:
        break;
    }
    this.setState({filters: newFilters});
  }

  localDeadline(moment) {
    if (moment) {
      return "Local time: " + moment.local().format("MMM D, h:mma");
    }
    else {
      return null;
    }
  }

  tick() {
    let update = {
      now: moment().utc().utcOffset(9 * 60)
    };
    if (update.now.isAfter(this.state.daily)) {
      update.daily = moment().utc().utcOffset(9 * 60).startOf('day').add(1,'days').add(1, 'seconds');
    }
    if (update.now.isAfter(this.state.rankedReset)) {
      update.rankedReset = moment().utc().utcOffset(9 * 60).startOf('day').add(24+16,'hours').add(1, 'seconds');
    }
    this.setState(update);
  }

  render () {
    return (
      <Layout title="Event Timers" headTitle="Event Timers">
        <Container>
          <GridContainer direction="row-reverse">
            <GridItem md="4" xs="12">
              <CalloutBox title="Server Time">
                <strong className={this.props.classes.jumbo}>{this.state.now.format(timeF)} JST</strong><br />
                {this.state.now.format(dateF)}<br />
                Mirrors ranking reset: {this.countdown(this.state.rankedReset, true)}<br />
                General daily reset: {this.countdown(this.state.daily, true)}
              </CalloutBox>
              <CalloutBox title="Filters">
                <FormControlLabel
                  label="Shop Expirations"
                  control={
                    <Checkbox
                      checked={this.state.filters.expires}
                      onChange={() => (this.handleToggle("expires"))}
                      color=""
                    />
                  }
                />
                <FormControlLabel
                  label="Gacha"
                  control={
                    <Checkbox
                      checked={this.state.filters.gacha}
                      onChange={() => (this.handleToggle("gacha"))}
                      color=""
                    />
                  }
                />
                <FormControlLabel
                  label="Future Events (Not Started Yet)"
                  control={
                    <Checkbox
                      checked={this.state.filters.future}
                      onChange={() => (this.handleToggle("future"))}
                      color=""
                    />
                  }
                />
              </CalloutBox>
            </GridItem>
            <GridItem md="8" xs="12">
              {this.eventsList()}
            </GridItem>
          </GridContainer>
        </Container>
      </Layout>
    );
  }

  eventsList() {
    let el = eventsData;
    if (!this.state.filters.expires) {
      el = el.filter(e => e.categ !== "shopExpire" && e.categ !== "bag");
    }
    if (!this.state.filters.gacha) {
      el = el.filter(e => e.categ !== "gacha");
    }
    if (!this.state.filters.future) {
      // a 'future' moment can only go true -> false, not the other way
      // upon the moment becoming before 'now'
      // thus, false needs no check
      // true needs check to see if it's still true or if it's changed
      el = el.filter(e => {
        // ordered such that the simple checks are first to skip moment stuff
        if (!e.future) { return true; }
        // no date given is always a future event
        else if (!e.moment) { return false; }
        else {
          if (e.moment.isBefore(this.state.now)) {
            // event has started and is no longer a future event like the hard-coded data says
            return true;
          }
          else {
            return false;
          }
        }
      });
    }
    return el.map((e) => {
      if (e.moment && e.moment.isBefore(this.state.now)) {
        return null;
      }
      return  <ListBox key={e.name} categ={e.categ}>
                 <h4>{e.name}</h4>
                 {this.localDeadline(e.moment)}{e.moment ? <br /> : null}
                 {this.countdown(e.moment, false)}
              </ListBox>;
    });
  }
}

export default withStyles(styles)(Timers);
