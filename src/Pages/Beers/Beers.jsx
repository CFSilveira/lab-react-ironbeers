import React, { useState, useEffect } from 'react';
import axios from 'axios';


function Beers() {
    const [beers, setBeers] = useState([])

    const fetchData = async () => {
        try {
            let response = await axios.get('https://ih-beers-api2.herokuapp.com/beers')

            let beersFromAPI = response.data;
            console.log(beersFromAPI)
            setBeers(beersFromAPI)
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);


  return (
    <div>
        <h3>Beers</h3>
        {beers.map((beer) => (
            <div className='beer-card'>
                <div>
                    <a href="/beers/:beerId"><img src={beer.image_url} alt='Bottle of beer' /></a>
                </div>
                <div>
                    <h2>{beer.name}</h2>
                    <h3>{beer.tagline}</h3>
                    <p>Created by: {beer.contributed_by}</p>
                </div>
            </div>
        ))}
    </div>
  )
}

export default Beers