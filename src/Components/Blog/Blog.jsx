import React, {useEffect} from 'react'
import './blog.css'

import {BsArrowRightShort} from 'react-icons/bs'

import img12 from '../../Assets/image12.jpg'
import img13 from '../../Assets/image13.jpg'
import img14 from '../../Assets/image14.jpg'
import img15 from '../../Assets/image15.jpeg'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Posts = [
  {
    id: 1,
    postImage: img12,
    title: 'Beautiful Nohkalikai Falls, let us travel!',
    desc: 'Monsoon season is the best time to visit Nohkalikai when the falls are in their full form. From this image, tourists can not only enjoy a panoramic view of the waterfalls but also the lush surroundings. ',
  },

  {
    id: 2,
    postImage: img13,
    title: 'Let us ride Darjeeling Himalayan Toy train!',
    desc: 'The best months to experience the services of toy train of Darjeeling are October, November and December. This is the time when the mist begins to disappear and one can get a better view while enjoying the toy train ride.',
  },

  {
    id: 3,
    postImage: img14,
    title: 'Visit Historical Sea War INS Kurusura Submarine!',
    desc: 'Pakistan Navy targeted Visakhapatnam Port to destroy the Indian aircraft INS Vikrant but the Indian Navy destory Pakistani submarine PNS Ghazi at the coast of Visakhapatnam and took the first battle victory in that war.',
  },

  {
    id: 4,
    postImage: img15,
    title: 'Let us have an adventure outside India',
    desc: 'Kathmandu Durbar Square is a historically and culturally significant site in Kathmandu, Nepal. It is one of the three Durbar (royal palace) Squares in the Kathmandu Valley in Nepal that are UNESCO World Heritage Sites.',
  },
]


const Blog = () => {

  useEffect (() => {
    Aos.init({duration: 2000})
  }, [])


  return (
    <section className="blog container section">
      <div className="secContainer">

        <div className="secIntro">
          <h2 data-aos="fade-up" data-aos-duration="2000" className="secTitle">
            Our Best Blog!
          </h2>

          <p data-aos="fade-up" data-aos-duration="2500">The best travel blogs in the world offer amazing travel tips, photography, and video content.</p>
        </div>

        <div className="mainContainer grid">
          {
            Posts.map(({id, postImage, title, desc}) => {
              return (
                <div data-aos="fade-up" data-aos-duration="2000" className="singlePost grid">
                  <div className="imgDiv">
                    <img src={postImage} alt={title} />
                  </div>

                  <div className="postDetails">
                    <h3 data-aos="fade-up" data-aos-duration="3000">{title}</h3>

                    <p data-aos="fade-up" data-aos-duration="4000">{desc}</p>

                  </div>

                  <a href="#" className="flex" data-aos="fade-up" data-aos-duration="4500">
                    Read More
                    <BsArrowRightShort className="icon"/>
                  </a>

                </div>
              )
            })
          }
        </div>
      </div>
    </section>
  )
}

export default Blog