import React, { useState } from 'react';
import Style from '../style/App.module.css';
import Nav from '../components/Nav.jsx';
import Cards from '../components/Cards.jsx';
import About from '../components/About.jsx';
import City from '../components/City.jsx';

import { Route } from 'react-router-dom';


const apiKey = '477ebb1b5745a9c939ad304e6617b408';

function App() {
	const [cities, setCities] = useState([]);

	const onClose = id => {
		setCities(oldCities => oldCities.filter(citie => citie.id !== id));
    }

	const onSearch = citie => {
	    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${citie}&appid=${apiKey}&units=metric`)
	      	.then(r => r.json())
	      	.then((recurso) => {

	        if(recurso.main !== undefined){
	          	const citie = {
		            min: Math.round(recurso.main.temp_min),
		            max: Math.round(recurso.main.temp_max),
		            img: recurso.weather[0].icon,
		            id: recurso.id,
		            wind: recurso.wind.speed,
		            temp: recurso.main.temp,
		            name: recurso.name,
		            weather: recurso.weather[0].main,
		            clouds: recurso.clouds.all,
		            latitud: recurso.coord.lat,
		            longitud: recurso.coord.lon,
		            description: recurso.weather[0].description
	          	};

	          	if (!cities.filter(c => c.id === citie.id).length > 0) {
	          		setCities(oldCities => [...oldCities, citie]);
	          	}

	        } else {
	          alert("City not found");
	        }
	    });
    }

    const onFilter = citieId => {
    	let citie = cities.filter(c => c.id === parseInt(citieId));
    	if(citie.length > 0) {
			return citie[0];
    	} else {
    	    return null;
		}
	}

	return (
	    <div className={Style.app}>
	    	<Route
	    	    path='/'
	    	    render={() => <Nav onSearch={onSearch} />}
	    	/>
	    	<Route
	    	    path='/about'
	    	    component={About}
	    	/>

	    	<Route
	    		path='/city/:id'
	    		render={({match}) => <City city={onFilter(match.params.id)}/>}
	    	/>

	    	<Route
	    		exact path='/'
	    		render={() => <Cards cities={cities} onClose={onClose} />}
	    	/>
	    </div>
  	);
}

export default App;
