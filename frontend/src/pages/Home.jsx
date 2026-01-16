import React from 'react'
import Hero from '../components/Layout/Hero.jsx'
import GenderCollection from '../components/Products/GenderCollection.jsx'
import NewArrivals from '../components/Products/NewArrivals.jsx'
import ProductDetails from '../components/Products/ProductDetails.jsx'


const Home = () => {
  return (
    <div>
        <Hero />
        <GenderCollection/>
        <NewArrivals/>
        <h2 className='text-3xl text-center font-bold mb-4'>Best Seller</h2>
        <ProductDetails/>
    </div>
  )
}

export default Home