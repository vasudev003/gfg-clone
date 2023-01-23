import React from 'react'
import footerlogo from '../gfg-gg-logo.svg';

function Footer() {
  return (
    <div>
        <footer id="footer"><div ><div className=' d-flex justify-content-center'><a href="/#"><img src={footerlogo} alt='' height='60' width='100'></img><br/><br/><h4>GeeksforGeeks</h4></a>
</div><div className="footer-wrapper_links d-flex justify-content-between"><ul className="footer-wrapper_links-list" 
><li>Company</li><li><a href="">About Us</a></li><li><a href="">Careers</a></li><li><a href="">In Media</a></li><li><a href="">Contact Us</a></li><li><a href="">Privacy Policy</a></li><li><a href="">Copyright Policy</a></li><li><a href="">Advertise with us</a></li></ul><ul className="footer-wrapper_links-list" 
><li>Learn</li><li><a href="">DSA</a></li><li><a href="">Algorithms</a></li><li><a href="">Data Structures</a></li><li><a href="">SDE Cheat Sheet</a></li><li><a href="">Machine learning</a></li><li><a href="">CS Subjects</a></li><li><a href="">Video Tutorials</a></li><li><a href="">Courses</a></li></ul><ul className="footer-wrapper_links-list"><li className='pb-0'
><a className="link-head" href="">News</a></li><li><a href="">Top News</a></li><li><a href="">Technology</a></li><li><a href="">Work &amp; Career</a></li><li><a href="">Business</a></li><li><a href="">Finance</a></li><li><a href="">Lifestyle</a></li><li><a href="">Knowledge</a></li></ul><ul className="footer-wrapper_links-list mb-0" 
><li>Languages</li><li><a href="">Python</a></li><li><a href="">Java</a></li><li><a href="">CPP</a></li><li><a href="">Golang</a></li><li><a href="">C#</a></li><li><a href="">SQL</a></li><li><a href="">Kotlin</a></li></ul><ul className="footer-wrapper_links-list" 
><li>Web Development</li><li><a href="">Web Tutorials</a></li><li><a href="">Django Tutorial</a></li><li><a href="">HTML</a></li><li><a href="">JavaScript</a></li><li><a href="">Bootstrap</a></li><li><a href="">ReactJS</a></li><li><a href="">NodeJS</a></li></ul><ul className="footer-wrapper_links-list"
><li>Contribute</li><li><a href="">Write an Article</a></li><li><a href="">Improve an Article</a></li><li><a href="">Pick Topics to Write</a></li><li><a href="">Write Interview Experience</a></li><li><a href="">Internships</a></li><li><a href="">Video Internship</a></li></ul></div></div>
</footer>
    </div>
  )
}

export default Footer