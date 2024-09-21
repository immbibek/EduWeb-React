import React from 'react'
import './About.css'
import about_img from "../../assets/about.png"
import play_icon from "../../assets/play-icon.png"



const About = ({setPlayState}) => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} alt="" className='about-img' />
            <img src={play_icon} alt="" className='play-icon' onClick={()=>{setPlayState(true)}}/>
        </div>

        <div className="about-right">
            <h3>AABOUT UNIVERSITY</h3>
            <h2>Nuturing Tommorow's Leaders Today</h2>
            <p>we are committed to fostering a dynamic learning environment that empowers students to excel academically and professionally. Our diverse programs, led by expert faculty, are designed to cultivate critical thinking, creativity, and innovation. We offer a range of undergraduate, postgraduate, and research opportunities that prepare students for the challenges of the modern world.</p>

            <p>Our university is more than just a place of learning; it's a vibrant community where students, faculty, and alumni come together to create a supportive and inclusive environment. With state-of-the-art facilities, a rich cultural life, and a strong emphasis on extracurricular activities, we ensure that our students have a well-rounded experience that goes beyond the classroom.</p>

            <p>we believe in nurturing future leaders and innovators. Our commitment to student success is reflected in our personalized approach to education, robust career services, and global partnerships. Join us and take the first step towards a fulfilling career and a brighter future.</p>

        </div>
      
    </div>
  )
}

export default About
