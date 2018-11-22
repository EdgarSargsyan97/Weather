import React from 'react';
import './App.css';
import Info from "./components/info";
import Form from "./components/form";
import Weather from "./components/weather";




const API_KEYS ='8558c1d6b1f4afa47799f9c6c9d1e0d2';

class App extends React.Component {

state = {
  temp:undefined,
  city:undefined,
  country:undefined,
  error:undefined
}

gettingWeather = async(event) =>{
  event.preventDefault();
  const city = event.target.elements.city.value;
  const api_url = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEYS}&units=metric`)
  const data = await api_url.json();
console.log(data);

if(city){
  this.setState({
    temp: data.main.temp,
    city: data.name,
    country: data.sys.country,
    error:""
  })
}
else {
  this.setState({
    temp: undefined,
    city: undefined,
    country: undefined,
    error:"Ender City Name"
})
}
}
  render() {
    return (
      <div className="inner">

      <div className = "inner1">
      <div className="text">
       <p>Weather App</p>
       <p>Know weather in your city</p>
       </div>
      </div>
      <div className = "inner2">

      <Form weatherMethod={this.gettingWeather}/>
      <Weather
    temp={this.state.temp}
    city={this.state.city}
    country={this.state.country}
    error={this.state.error}


      />

      <Info/>
      </div>
      </div>
    );
  }
}

export default App;
