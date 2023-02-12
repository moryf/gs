import React from 'react'
import InstagramIcon from'@mui/icons-material/Instagram'
import FacebookIcon from'@mui/icons-material/Facebook'
import TwitterIcon from'@mui/icons-material/Twitter'
import LinkedinIcon from'@mui/icons-material/LinkedIn'
import '../style/footer.css'

function Footer() {
  return (
    <div className='footer'>
        <div className='drustveneMreze'>
            <InstagramIcon/>
            <FacebookIcon/>
            <TwitterIcon/>
            <LinkedinIcon/>

        </div>
         <p> &copy; 2023 goodspirit.com</p>
    </div>
  )
}

export default Footer