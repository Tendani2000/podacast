import React from 'react';
import './app.css'

export default function Podcast () {
    
  const [shows, setShows] = React.useState([]);


  fetch('https://podcast-api.netlify.app/shows')
    .then(response => response.json())
    .then(data => {
        // Handle the data (an array of PREVIEW objects) here
        console.log(data);
        setShows(data);
    })
    .catch(error => {
        // Handle errors here
        console.error('Error fetching shows:', error);
    });


    /*const podcastId = 'your_podcast_id'; // Replace with the actual ID
fetch('https://podcast-api.netlify.app/id/${podcastId}')
    .then(response => response.json())
    .then(data => {
        // Handle the data (a single SHOW object with SEASON and EPISODE objects) here
        console.log(data);
        setPodcasts(data);
    })
    .catch(error => {
        // Handle errors here
        console.error('Error fetching podcast with ID ${podcastId}:, error');
    });

*/

     return (
      

         <ul>
      {shows.map(shows =>{
        return(<h1 key={shows.id}>

<div className='podcast--shows'>
      
        <h2 className='show--title'>{shows.title}</h2>
        <p className='show--description'>{shows.description}</p>
        <p>{shows.seasons}</p>
        <img src= {shows.image} alt= '' className="title--image"/>
        <p>{shows.genres}</p>
        <p>{shows.updated}</p>
</div>

        </h1>

        )
        
      })}
      
         </ul>
  );
}
  