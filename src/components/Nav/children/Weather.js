import React from 'react';


class weather extends React.Component{
    constructor(){
        super();
        this.state = {
            temp: null,
            weathericon:'',
            location:''
            
        }
    }

    getWeather = ()=>{
        fetch("https://api.weatherapi.com/v1/current.json?key=914d4e0e50314ecf960105744202708&q=auto:ip", {
			method: 'post'
		}) 
        .then(response=> response.json())
        .then(data => {
            console.log(data)
            this.setState({
                temp: Math.round(data.current.temp_f),
                weathericon: data.current.condition.icon,
                location: data.location.region+ ', ' + data.location.country
            });
        })
    }
    componentDidMount(){
        this.getWeather();
    }
    render(){
    return(
        <div className='row center'>
            <div>
                <img alt='' src={this.state.weathericon}/>
            </div>
            <div className='center mt-3'>
                 <p>{this.state.temp}&deg; F</p>
                 <p className = 'pl-2'>{this.state.location}</p>
            </div>
          
        
        </div>
    );
    }
}

export default weather;