import React, { Component } from "react"
import Placeholder from "./placeholder"

export default class App extends Component {
  render() {
	  return (
       <div>
	       <Placeholder placeholder="First name" />
	       <Placeholder placeholder="Last name" />
       </div>)
  }
}
