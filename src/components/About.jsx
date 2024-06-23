import User from "./User"
import UserClass from "./UserClass"
import React from "react"
import UserContext from "../utils/UserContext";

class About extends React.Component {
  constructor() {
    super();
    // console.log('Parent Constructor')
  }
  componentDidMount() {
    // console.log('Parent Component Did Mount')
  }
  render() {
    // console.log('Parent Render')
    return (<div>
      <h1>About</h1>
      <h2>This is a About Page</h2>
      <div>User: <UserContext.Consumer>{ (data) => data.loggedInUser }</UserContext.Consumer></div>
      {/* <User /> */}
      <UserClass name="Kishlay" location="Begusarai"/>
    </div>)
  }
}

export default About