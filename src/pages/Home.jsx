import React from 'react'

import { Link } from 'react-router-dom'

import pozadina from '../assets/pozadina.jpg'

import '../style/home.css'

function Home() {
  return (
    <div className='home' style={{ backgroundImage:'url('+pozadina+')'}}>
      <div className='headerContainer' >
        <h1>
          Good Spirit
        </h1>
        <p>
          Zelene korpe za zelenu budućnost
        </p>
        <Link>
        <button>
          Poruči!
        </button>
        </Link>


      </div>
    </div>
  )
}

export default Home