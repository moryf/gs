import React from 'react'

function Proizvod({slika,naziv,cena}) {
  return (
    <div className='proizvod'>
        <div className='slika' style={{ backgroundImage:`url(${slika})`}}></div>
        <h1>{naziv}</h1>
        <p>{cena}</p>
    </div>
  )
}

export default Proizvod