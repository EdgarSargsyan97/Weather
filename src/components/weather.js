import React from 'react'

class Weather extends React.Component{
  render(){
    return(
      <div>
      {this.props.city &&
        <div>
        <p>Location: {this.props.city},{this.props.country}  </p>
        <p>Temp:   {Math.round(this.props.temp)} °C</p>

              </div>
      }
      <p>  {this.props.error} </p>

      </div>
    );
  }
}


export default Weather
