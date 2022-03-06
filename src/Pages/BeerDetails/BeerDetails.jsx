import {useState, useEffect} from 'react';
import axios from 'axios';
import { Link, useParams, useSearchParams } from 'react-router-dom';


function BeerDetails() {
    let { id } = useParams();
    const [beerDetails, setBeerDetails] = useState([])

    useEffect(() => {
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/${id}`).then((response) =>{
            setBeerDetails(response.data)}).catch((err) =>
            console.log(err));
    }, [id]);


    return (
    <div>
        <h1>Beer Detail Page</h1>
        <div>
            <img src={beerDetails.image_url} alt="beer bottle/case" />
            <h3>{beerDetails.name}</h3>
            <h5>{beerDetails.tagline}</h5>
            <p>1st brewed: {beerDetails.first_brewed}</p>
            <p>{beerDetails.attenuation_level}</p>
            <p>{beerDetails.description}</p>
            <p>Created by: {beerDetails.contributed_by}</p>
        </div>
    </div>
  )
}

export default BeerDetails