import React, { useEffect, useRef } from 'react'
import './TitleCard.css'
import cards_data from '../../assets/cards/Cards_data'


const TitleCard = () => {

  const cardsRef = useRef();

  const handlewheel = (event)=>{
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY
  }
  
  useEffect(()=>{
    cardsRef.current.addEventListener('wheel', handlewheel);
  },[])
  

  return (
    <div className='titlecards'>
      <h2>Popular on Nerflix</h2>
      <div className="card-list" ref={cardsRef}>
        {cards_data.map((card, index)=>{
          return <div className="card" key={index}>
          <img src={card.image} alt=''/>
          <p>{card.name}</p>
      </div>
        })}
      </div>

    </div>
  )
}

export default TitleCard