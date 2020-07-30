import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from  "react-router-dom";
import axios from "axios";

import Day1 from './Day1';
import Day2 from './Day2';
import Day3 from './Day3';
import Day4 from './Day4';
import Day5 from './Day5';
import Day6 from './Day6';
import Day7 from './Day7';

const private_key = "9949f7bb964a20806e74206f053dd1dc";
const lat = '40.7143';
const lon = '-74.006';
const weather_api = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&exclude=hourly,minutely,current&appid=${private_key}`;

class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      info: [],

      day1info: [],
      day1info2: [],
      day1info3: [],

      day2info: [],
      day2info2: [],
      day2info3: [],

      day3info: [],
      day3info2: [],
      day3info3: [],

      day4info: [],
      day4info2: [],
      day4info3: [],

      day5info: [],
      day5info2: [],
      day5info3: [],

      day6info: [],
      day6info2: [],
      day6info3: [],

      day7info: [],
      day7info2: [],
      day7info3: [],
    };
  }

  async getForecast() {
    try {
      const res = await axios.get(weather_api);
      this.setState({ info: res.data });

      this.setState({ day1info: this.state.info.daily[0] });
      this.setState({ day1info2: this.state.day1info.temp });
      this.setState({ day1info3: this.state.day1info.weather[0] });

      this.setState({ day2info: this.state.info.daily[1] });
      this.setState({ day2info2: this.state.day2info.temp });
      this.setState({ day2info3: this.state.day2info.weather[0] });

      this.setState({ day3info: this.state.info.daily[2] });
      this.setState({ day3info2: this.state.day3info.temp });
      this.setState({ day3info3: this.state.day3info.weather[0] });

      this.setState({ day4info: this.state.info.daily[3] });
      this.setState({ day4info2: this.state.day4info.temp });
      this.setState({ day4info3: this.state.day4info.weather[0] });

      this.setState({ day5info: this.state.info.daily[4] });
      this.setState({ day5info2: this.state.day5info.temp });
      this.setState({ day5info3: this.state.day5info.weather[0] });

      this.setState({ day6info: this.state.info.daily[5] });
      this.setState({ day6info2: this.state.day6info.temp });
      this.setState({ day6info3: this.state.day6info.weather[0] });

      this.setState({ day7info: this.state.info.daily[6] });
      this.setState({ day7info2: this.state.day7info.temp });
      this.setState({ day7info3: this.state.day7info.weather[0] });
    } catch {
      console.log("error!!!!");
    }
  }

  componentDidMount() {
    this.getForecast();
  }

  getCurrentDay = (num) => {
    let unix_timestamp = num;
    var date = new Date(unix_timestamp * 1000);
    return date.toString().slice(0, 10);
  };

  getFahrenheitMax = (str) => {
    let fahrenheit = Math.floor((str - 273.15) * 1.8 + 32);
    return fahrenheit;
  };

  getFahrenheitMin = (str) => {
    let fahrenheit = Math.floor((str - 273.15) * 1.8 + 32);
    return fahrenheit;
  };

  createIconLink = (iconId) => {
    return `https://openweathermap.org/img/wn/${iconId}@2x.png`;
  };

  render() {
    return (
      <Router>
        <h2>New York 7-Day Weather Forecast</h2>
        <div>
          <div className="row">
            <div class="col-lg-1.5">
              <div id="card" class="card">
                <button href='#'><Link to='/Day1'>{this.getCurrentDay(this.state.day1info.dt)}</Link></button>
                <h3>High of {Math.floor(this.state.day1info2.max)}</h3>
                <h3>Low of {Math.floor(this.state.day1info2.min)}</h3>
                <img src={this.createIconLink(this.state.day1info3.icon)} alt='weather-day1'/>
              </div>
            </div>
            <div class="col-lg-1.5">
              <div id="card" class="card">
                <button href='#'><Link to='/Day2'>{this.getCurrentDay(this.state.day2info.dt)}</Link></button>
                <h3>High of {Math.floor(this.state.day2info2.max)}</h3>
                <h3>Low of {Math.floor(this.state.day2info2.min)}</h3>
                <img src={this.createIconLink(this.state.day2info3.icon)} alt='weather-day2'/>
              </div>
            </div>

            <div class="col-lg-1.5">
              <div id="card" class="card">
                <button href='#'><Link to='/Day3'>{this.getCurrentDay(this.state.day3info.dt)}</Link></button>
                <h3>High of {Math.floor(this.state.day3info2.max)}</h3>
                <h3>Low of {Math.floor(this.state.day3info2.min)}</h3>
                <img src={this.createIconLink(this.state.day3info3.icon)} alt='weather-day3'/>
              </div>
            </div>

            <div class="col-lg-1.5">
              <div id="card" class="card">
                <button href='#'><Link to='/Day4'>{this.getCurrentDay(this.state.day4info.dt)}</Link></button>
                <h3>High of {Math.floor(this.state.day4info2.max)}</h3>
                <h3>Low of {Math.floor(this.state.day4info2.min)}</h3>
                <img src={this.createIconLink(this.state.day4info3.icon)} alt='weather-day4'/>
              </div>
            </div>

            <div class="col-lg-1.5">
              <div id="card" class="card">
                <button href='#'><Link to='/Day5'>{this.getCurrentDay(this.state.day5info.dt)}</Link></button>
                <h3>High of {Math.floor(this.state.day5info2.max)}</h3>
                <h3>Low of {Math.floor(this.state.day5info2.min)}</h3>
                <img src={this.createIconLink(this.state.day5info3.icon)} alt='weather-day5'/>
              </div>
            </div>

            <div class="col-lg-1.5">
              <div id="card" class="card">
                <button href='#'><Link to='/Day6'>{this.getCurrentDay(this.state.day6info.dt)}</Link></button>
                <h3>High of {Math.floor(this.state.day6info2.max)}</h3>
                <h3>Low of {Math.floor(this.state.day6info2.min)}</h3>
                <img src={this.createIconLink(this.state.day6info3.icon)} alt='weather-day6'/>
              </div>
            </div>

            <div class="col-lg-1.5">
              <div id="card" class="card">
                <button href='#'><Link to='/Day7'>{this.getCurrentDay(this.state.day7info.dt)}</Link></button>
                <h3>High of {Math.floor(this.state.day7info2.max)}</h3>
                <h3>Low of {Math.floor(this.state.day7info2.min)}</h3>
                <img src={this.createIconLink(this.state.day7info3.icon)} alt='weather-day7'/>
              </div>
            </div>
          </div>
        </div>

        <Switch>
          <Route path="/Day1" component={Day1} />
          <Route path="/Day2" component={Day2} />
          <Route path="/Day3" component={Day3} />
          <Route path="/Day4" component={Day4} />
          <Route path="/Day5" component={Day5} />
          <Route path="/Day6" component={Day6} />
          <Route path="/Day7" component={Day7} />
        </Switch>
      </Router>
    );
  }
}

export default Weather;
