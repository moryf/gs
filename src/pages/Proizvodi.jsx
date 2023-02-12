import React from 'react'
import {ProizvodiLista} from '../helpers/proizvodiLista'
import Proizvod from '../components/Proizvod'
import '../style/proizvodi.css'
function Proizvodi() {
  return (
    <div className='proizvodi'>
        <h1 className='proizvodiNaslov'>Proizvodi</h1>
        <div className='proizvodiLista'>
            {ProizvodiLista.map((proizvod,key)=>{
                return <Proizvod
                key={key} 
                slika={proizvod.slika} 
                naziv={proizvod.naziv} 
                cena={proizvod.cena}/>
            })}
        </div>

    </div>
  )
}

export default Proizvodi