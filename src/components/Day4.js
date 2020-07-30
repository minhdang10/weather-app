import React, { Component } from 'react'
import axios from "axios";

const private_key = "9949f7bb964a20806e74206f053dd1dc";
const lat = '40.7143';
const lon = '-74.006';
const weather_api = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely,current&appid=${private_key}`;

class Day4 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            info: [],
            info2: [],
            info3: [],
            info4: [],
        }
    }
     
    async getForecast() {
        try {
          const res = await axios.get(weather_api);
          this.setState({ info: res.data });
          this.setState({ info2: this.state.info.daily[3]});
          this.setState({ info3: this.state.info2.temp})
          this.setState({ info4: this.state.info2.weather[0]})
        } 
        catch {
          console.log("error!!!!");
        }
      }
  
      componentDidMount() {
        this.getForecast();
      }

      getCurrentDay = (num) => {
        let unix_timestamp = num;
        var date = new Date(unix_timestamp * 1000);
        return date.toString().slice(0,10);
      }
  
      getFahrenheitMax = () => {
        let kelvin = this.state.info3.max;
        let fahrenheit = Math.floor((kelvin - 273.15) * 1.8 + 32);
        return fahrenheit;
      };
    
      getFahrenheitMin = () => {
        let kelvin = this.state.info3.min;
        let fahrenheit = Math.floor((kelvin - 273.15) * 1.8 + 32);
        return fahrenheit;
      };
    
      createIconLink = (iconId) => {
        return `https://openweathermap.org/img/wn/${iconId}@2x.png`;
      };
    
    render() {
        return (
            <div>
            <h2>{this.getCurrentDay(this.state.info2.dt)}</h2>
            <h3>High of {this.getFahrenheitMax()}</h3>
            <h3>Low of {this.getFahrenheitMin()}</h3>
            <img src={this.createIconLink(this.state.info4.icon)} alt='weather-day4'/>
        </div>
        )
    }
}

export default Day4;