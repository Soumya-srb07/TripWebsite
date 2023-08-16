import React, {useEffect} from 'react'
import './about.css'

import img9 from '../../Assets/image9.jpg'
import img10 from '../../Assets/image10.png'
import img11 from '../../Assets/image11.jpg'

import video from '../../Assets/video.mp4'

import Aos from 'aos'
import 'aos/dist/aos.css'

const About = () => {

  useEffect (() => {
    Aos.init({duration: 2000})
  }, [])


  return (
    <section className="about section">
      <div className="secContainer">
        <h2 className="title">
          Why Hiking?
        </h2>

        <div className="mainContent container grid">
          <div data-aos="fade-up" data-aos-duration="2000" className="singleItem">

            <img src={img9} alt="Ig name" />

            <h3>100+ Mountains</h3>

            <p>A mountain is a landform that rises significantly above the surrounding landscape. Mountains typically have steep slopes and are understood to be higher than hills.</p>

          </div>

          <div data-aos="fade-up" data-aos-duration="2500" className="singleItem">

            <img src={img10} alt="Ig name" />

            <h3>1000+ Hikings</h3>

            <p>A mountain is a landform that rises significantly above the surrounding landscape. Mountains typically have steep slopes and are understood to be higher than hills.</p>

          </div>

          <div data-aos="fade-up" data-aos-duration="3000" className="singleItem">

            <img src={img11} alt="Ig name" />

            <h3>2000+ Customers</h3>

            <p>A mountain is a landform that rises significantly above the surrounding landscape. Mountains typically have steep slopes and are understood to be higher than hills.</p>

          </div>


        </div>

        <div className="videoCard container">
          <div className="cardContent grid">

            <div data-aos="fade-right" data-aos-duration="2000" className="cardText">
              <h2>Wonderful House Experience in There!</h2>

              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis possimus iure laborum ad veniam aperiam ipsum aliquid nemo ea omnis.</p>
            </div>

            <div data-aos="fade-left" data-aos-duration="2000" className="cardVideo">
              <video src={video} autoPlay loop muted typeof="video/mp4"></video>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default About
