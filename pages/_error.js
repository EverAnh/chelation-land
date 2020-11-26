import React, { Component } from "react";
import Router from "next/router";

export default class _error extends Component {
  render() {
    return  <div>
              <h3>Error</h3>
              <p>Something went wrong. Maybe the link was broken and couldn't be found (404).</p>
            </div>
    ;
  }
}
