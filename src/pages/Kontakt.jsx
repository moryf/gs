import React from 'react'
import KontaktSlika from '../assets/kontaktSlika.png'
import '../style/kontakt.css'

function Kontakt() {
  return (
    <div className='kontakt'>
        <div className='levaStrana' style={{ backgroundImage:'url('+KontaktSlika+')'}}>

        </div>
        <div className='desnaStrana'>
            <h1>Kontaktirajte nas</h1>
            <form id='formakontakt' method='post'>
                <label htmlFor='ime'>Puno Ime</label>
                <input name='ime' placeholder='Unesite Puno Ime' type='text' />
                <label htmlFor='email'>Puno Ime</label>
                <input name='email' placeholder='Unesite eMail' type='email' />
                <label htmlFor="poruka">Poruka</label>
                <textarea name="poruka" id="poruka" rows="6" required></textarea>
                <button>Pošalji poruku</button>
            </form>

        </div>
    </div>
  )
}

export default Kontakt