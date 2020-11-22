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
      daily: moment().utc().utcOffset(9 * 60).startOf('day').add(1,'days').add(1, 'seconds'),
      filters: {
        expires: true,
        gacha: true,
        startTimes: true,
        maintenance: true
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

  countdown(target, shortform) {
    if (!target) {
      return "(Dates To Be Announced)";
    }
    else {
      if (shortform) {
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
      case "startTimes":
        newFilters.startTimes = !newFilters.startTimes;
        break;
      case "maintenance":
        newFilters.maintenance = !newFilters.maintenance;
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
                Daily reset in: {this.countdown(this.state.daily, true)}
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
                  label="Start Times"
                  control={
                    <Checkbox
                      checked={this.state.filters.startTimes}
                      onChange={() => (this.handleToggle("startTimes"))}
                      color=""
                    />
                  }
                />
                <FormControlLabel
                  label="Maintenance"
                  control={
                    <Checkbox
                      checked={this.state.filters.maintenance}
                      onChange={() => (this.handleToggle("maintenance"))}
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
      el = el.filter(e => e.categ !== "shopExpire");
    }
    if (!this.state.filters.gacha) {
      el = el.filter(e => e.categ !== "gacha");
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
