import React from 'react';
import Card from './Card.jsx';
import Style from '../style/Cards.module.css';


export default function Cards({cities, onClose}) {
  	if (cities) {
	  	return (
	  		<div className={Style.cards}>
				{cities.map((citie, index) =>
				  	<Card
					    temp={citie.temp}
					    description={citie.description}
					    name={citie.name}
					    img={citie.img}
					    onClose={() => onClose(citie.id)}
					    key={citie.id}
					    id={citie.id}
				    />
				)}
			</div>
	  	)
  	}
  	else {
  		return(
  			<div>Sin ciudades</div>
  		)
  	}
};