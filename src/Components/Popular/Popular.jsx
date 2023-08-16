import React, {useEffect} from 'react'
import './popular.css'

import {BsArrowLeftShort} from 'react-icons/bs'
import {BsArrowRightShort} from 'react-icons/bs'
import {BsDot} from 'react-icons/bs'



import img2 from '../../Assets/image2.jpg'
import img3 from '../../Assets/image3.jpg'
import img4 from '../../Assets/image4.jpg'
import img5 from '../../Assets/image5.jpg'

import Aos from 'aos'
import 'aos/dist/aos.css'

// now we use high order array method.

const Data = [
  {
    id: 1,
    imgSrc: img2,
    destTitle: 'Taj Mahal',
    location: 'Agra',
    grade: 'Cultural Relax',
  },

  {
    id: 2,
    imgSrc: img3,
    destTitle: 'Jagannath Temple',
    location: 'Puri',
    grade: 'Cultural Relax',
  },

  {
    id: 3,
    imgSrc: img4,
    destTitle: 'Kedarnath Temple',
    location: 'Uttarakhand',
    grade: 'Cultural Relax',
  },

  {
    id: 4,
    imgSrc: img5,
    destTitle: 'Victoria Memorial',
    location: 'Kolkata',
    grade: 'Cultural Relax',
  },
]

const Popular = () => {

  useEffect (() => {
    Aos.init({duration: 2000})
  }, [])

  return (
    <section className="popular section container">
      <div className="secContainer">

        <div className="secHeader flex">
          <div data-aos="fade-right" data-aos-duration="2500" className="textDiv">
            <h2 className="secTitle">Popular Destination</h2>
            <p>From historical cities to natural specteculars, come see the best of the world!</p>
          </div>

          <div data-aos="fade-left" data-aos-duration="2500" className="iconsDiv flex">
            <BsArrowLeftShort className="icon leftIcon"/>
            <BsArrowRightShort className="icon"/>
          </div>
        </div>

        <div className="mainContent grid">
          {
            Data.map(({id,imgSrc,destTitle,location,grade }) => {
              return(
                <div data-aos="fade-up" className="singleDestination">
                  <div className="destImage">

                    <img src={imgSrc}  alt="imtl" />

                    <div className="overlayInfo">
                      <h3>{destTitle}</h3>
                      <p>{location}</p>

                      <BsArrowRightShort className="icon"/>

                    </div>

                  </div>

                  <div className="destFooter">
                    <div className="number">
                    0{id}
                    </div>

                    <div className="destText flex">
                      <h6>India</h6>
                      <span className="flex">
                        <span className="dot">
                          <BsDot className="icon"/>
                        </span>
                        Dot
                      </span>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>

      </div>
    </section>
  )
}

export default Popular