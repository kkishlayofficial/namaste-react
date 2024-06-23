import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: 'User',
        location: 'Default',
        avatar_url: 'Dummy photo'
      }
    };
    // console.log('Child Constructor')
  }

  async componentDidMount() {
    // console.log('Child Component Did Mount')
    const URL = "https://api.github.com/users";
    const data = await fetch(`${URL}/kkishlayofficial`)
    const res = await data.json();
    console.log(res)
    this.setState({
      userInfo: res
    })
  }

  componentDidUpdate() {
    console.log('Update');
  }

  render() {
    // console.log('Child Render')
    return (
      <div className='user-card'>
        <h2 className='name'>Name: {this.state.userInfo.name}</h2>
        <h3 className='location'>Location: {this.state.userInfo.location}</h3>
        <h4 className='links'>
          LinkedIn - https://www.linkedin.com/in/kkishlayofficial/
        </h4>
        <img src={this.state.userInfo.avatar_url}/>
      </div>
    );
  }
}

export default UserClass;
