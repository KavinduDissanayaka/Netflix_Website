import React, { useEffect, useRef, useState } from 'react'
import './TitleCard.css'
import cards_data from '../../assets/cards/Cards_data'


const TitleCard = ({title, category}) => {

  const [apiData, setApiData] = useState([]);
  const cardsRef = useRef();

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMjA0MmI3MjRmYzc3MTM5NGYxYjcyYzBmOTA1YTZkNSIsIm5iZiI6MTczODY0NTA2My40NTI5OTk4LCJzdWIiOiI2N2ExOWU0NzYwNWZhMGQ1MDAwMzAxM2MiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.2X_267_Ks6b0buqfHTtrP-p7J4EEPGt_zDpARPUXEwA'
    }
  };
  
  

  const handlewheel = (event)=>{
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY
  }
  
  useEffect(()=>{

    fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
    .then(res => res.json())
    .then(res => setApiData(res.results))
    .catch(err => console.error(err));

    cardsRef.current.addEventListener('wheel', handlewheel);
  },[])
  

  return (
    <div className='titlecards'>
      <h2>{title?title:"Popular on Nerflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.map((card, index)=>{
          return <div className="card" key={index}>
          <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt=''/>
          <p>{card.original_title}</p>
      </div>
        })}
      </div>

    </div>
  )
}

export default TitleCard