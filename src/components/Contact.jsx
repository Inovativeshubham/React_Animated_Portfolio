import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Contact = () => {
  return (
    <>
      <div className="container contact" id='contacts'>
        <h1>CONTACT ME</h1>
        <div className="contact-icon"
          data-aos="zoom-in-up"
          data-aos-duration="1000"
        >
          <a href='https://www.instagram.com' target='_blank' className="items"><FaInstagram className='icons' /></a>
          <a href='https://www.facebook.com' target='_blank' className="items"><CiFacebook className='icons' /></a>
          <a href='https://www.linkedin.com' target='_blank' className="items"><CiLinkedin className='icons' /></a>
          <a href='https://www.twitter.com' target='_blank' className="items"><FaSquareXTwitter className='icons' /></a>
          <a href='https://www.github.com' target='_blank' className="items"><FaGithubSquare className='icons' /></a>
          <a href="mailto:innovativeshubham9661@gmail.com" className="items"><SiGmail className='icons' /></a>
        </div>
      </div>
    </>
  )
}

export default Contact
