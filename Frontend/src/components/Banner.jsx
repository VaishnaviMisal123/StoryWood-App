import React from 'react'
import banner from '../../public/Banner.jpg'
import BannerImage from '../../public/BannerImage.jpg';
import { Link } from 'react-router-dom'

const Banner = () => {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-16">
      <div className='px-4 bg-cover dark:text-black' style={{ backgroundImage: `url(${BannerImage})` }}>
        <div className='w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-32'>
        <div className='space-y-5'>
            <h1 className='text-4xl font-bold'>
            Hello! Welcome here to explore new stories{" "} <span className='text-pink-500'>every day!</span>
            </h1>
            <p className='text-xl'>
            Hello and welcome to the Reading Room!  A place where every day brings new discoveries through the magic of books. Dive into stories that inspire, teach, and transport you to new worlds. Let's turn the page to endless possibilities together! 
            </p>
            <div className="rating">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input
    type="radio"
    name="rating-2"
    className="mask mask-star-2 bg-orange-400"
    defaultChecked />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
</div>
        </div>
        <Link to="/contact">
           <button className="btn mt-6 mb-10 btn-secondary">Let's Connect</button>
        </Link>
           </div>
        </div>
      </div>
    </>
  )
}

export default Banner
