import React, {useEffect} from 'react'
import './home.css'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Home = () => {

  useEffect (() => {
    Aos.init({duration: 2000})
  }, [])


  return (
    <section className="home">
      <div className="secContainer container">

        <div className="homeText">
          <h1 data-aos="fade-up" className="title">
            Plan Your Trip With Travel INDIA
          </h1>

          <p data-aos="fade-up" data-aos-duration="2500" className="subTitle">
            Travel makes one modest, you see what a tiny place you occupy in the world.
          </p>

          <button data-aos="fade-up" data-aos-duration="3000" className="btn">
            <a href="#">Explore now</a>
          </button>
        </div>

        <div className="homeCard grid">

          <div data-aos="fade-right" data-aos-duration="2000" className="locationDiv">
            <label htmlFor="location">Location</label>
            <input type="text" placeholder='Dream destinaton' />
          </div>

          <div data-aos="fade-right" data-aos-duration="2500" className="distDiv">
            <label htmlFor="distance">Location</label>
            <input type="number" placeholder='11/Meters' />
          </div>

          <div data-aos="fade-right" data-aos-duration="3000" className="priceDiv">
            <label htmlFor="price">Location</label>
            <input type="number" placeholder='Rs.5k-15k' />
          </div>

          <button data-aos="fade-left" className='btn'>Search</button>
            
        </div>

      </div>
    </section>
  )
}

export default Home