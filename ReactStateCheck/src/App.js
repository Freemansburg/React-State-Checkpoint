import React, { Component } from 'react';
import "./App.css"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: 'Emmanostings-Bob',
        bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        imgSrc: 'https://media.licdn.com/dms/image/D4E03AQHuC5vBRfRSCg/profile-displayphoto-shrink_800_800/0/1680530014467?e=1694649600&v=beta&t=mj5zRxWSNl6bY8NmQV_m3yx0h24LL6Lw6RsHAd4lYPg',
        profession: 'Software Developer'
      },
      show: false,
      timeInterval: 0
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState((prevState) => ({
        timeInterval: prevState.timeInterval + 1
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  toggleShow = () => {
    this.setState((prevState) => ({
      show: !prevState.show
    }));
  };

  render() {
    const { fullName, bio, imgSrc, profession } = this.state.person;
    const { show, timeInterval } = this.state;

    return (
      <div className='App'>
        <button className='button' onClick={this.toggleShow}><span>Toggle Profile</span></button>
        {show && (
          <div>
            <h2>{fullName}</h2>
            <img src={imgSrc} alt="Profile" />
            <p>Bio: {bio}</p>
            <p>Profession: {profession}</p>
          </div>
        )}
        <p>Time Interval: {timeInterval} seconds</p>
      </div>
    );
  }
}

export default App;
