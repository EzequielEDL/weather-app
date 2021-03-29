import React, { useState } from "react";
import Style from '../style/SearchBar.module.css';


export default function SearchBar({onSearch}) {
  const [citie, setCitie] = useState("");

  return (
  	<div className={Style.div}>
      <form onSubmit={(e) => {
        e.preventDefault();
        onSearch(citie);
        setCitie('');
      }}>
        <input
          id={Style.input}
          type="text"
          placeholder="Enter city name..."
          value={citie}
          onChange={e => setCitie(e.target.value)}
        />
        <input className={Style.btn} type="submit" value="+" />
      </form>
  	</div>
  )
};