import React from 'react'
import "./footer.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faXTwitter,faInstagram,faTiktok,faGithub,faTelegram,faYoutube, faFacebook} from "@fortawesome/free-brands-svg-icons"

const Footer = () => {
  return (
  <div className='Like'>
    < div className='FooterDiv'>

      < div className='FooterDiv1'>
        < div className='FooterDiv8 sec'>
          < div className='FooterDiv3'>News  letter</ div >
          < div className='FooterDiv4'>Stay upto date to  get the latest  news from us.</ div >
          < div className='FooterDivf'>Enter your email address</ div >
          <div className="FooterDiv5">
            < div className='FooterDiv6'><input type="email" placeholder='Enter your email'/></ div >
            < div className='FooterDiv7'><button>Subscribe</button></ div >
          </div>
        </ div >
         < div className='FooterDiv8'>
          < div className='FooterDiv3'>Design</ div >
          < div className='FooterDiv9'><a  href="tel:+2348167029609" style={{color:"#fff"}}>+1234567890</a></ div >
          < div className='FooterDiv10'>info@luminiacreatives.com</ div >
         </ div >
          < div className='FooterDiv8'>
            < div className='FooterDiv3'>Services</ div >
            < div className='FooterDiv13'>We craft visual stories that engage audiences effectively.</ div >
            < div className='FooterDiv14'>
              <ul>
                <li><a href=""><FontAwesomeIcon icon={faFacebook}  className=" " style={{fontSize:"20px",color:"#c5c5c5",marginRight:"8px"}}  /></a></li>
                   <li><a href=""><FontAwesomeIcon icon={faXTwitter}  className=" " style={{fontSize:"20px",color:"#c5c5c5",marginRight:"8px"}}  /></a></li>
                      <li><a href=""><FontAwesomeIcon icon={faInstagram}  className=" " style={{fontSize:"20px",color:"#c5c5c5",marginRight:"8px"}}  /></a></li>
                         <li><a href=""><FontAwesomeIcon icon={faTiktok}  className=" " style={{fontSize:"20px",color:"#c5c5c5",marginRight:"8px"}}  /></a></li>
              </ul>
            </ div >
          </ div >
      </ div >
    </ div >
      < div className='FooterDiv15'>© 2025  VicopoloEmpire. All rights reserved.</ div >
    </div>
  )
}

export default Footer;