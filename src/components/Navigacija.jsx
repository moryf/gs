import React, {useState} from 'react'
import Logo from '../assets/logo.png'
import {Link} from 'react-router-dom'
import DensitySmallIcon from '@mui/icons-material/DensitySmall';
import '../style/navigacije.css'

function Navigacija() {
    const [otvoreniLinkovi, postaviOvoreniLinkovi] = useState(false)
  
    const otvoriNavigaciju = () =>{
        postaviOvoreniLinkovi(!otvoreniLinkovi)
    }
  
    return (
    <div className='navigacija'>
        <div className='levaStrana' id={otvoreniLinkovi ? "otvoreno" : "zatvoreno"}>
            <img src={Logo} />
            <div className='sakriveniLinkovi'>
            <Link to='/'>Home</Link>
            <Link to='/proizvodi'>Proizvodi</Link>
            <Link to='/about'>O nama</Link>
            <Link to='/contact'>Kontakt</Link>  
            </div>
        </div>
        <div className='desnaStrana'>
            <Link to='/'>Home</Link>
            <Link to='/proizvodi'>Proizvodi</Link>
            <Link to='/about'>O nama</Link>
            <Link to='/contact'>Kontakt</Link>
            <button onClick={otvoriNavigaciju}>
                <DensitySmallIcon/>
            </button>
        </div>

    </div>
  )
}

export default Navigacija