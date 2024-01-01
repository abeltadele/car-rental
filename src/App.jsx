import React from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Search from './components/Search/Search'
import Review from './components/Review/Review'
import Seller from './components/Seller/Seller'
import Trending from './components/Trending/Trending'
import Auction from './components/Auction/Auction'
import Footer from './components/Footer/Footer'

const App = () => {
return (
  <div>
  <Navbar/>
  <Home/>
  <Search/>
  <Review/>
  <Seller/>
  <Trending/>
  <Auction/>
  <Footer/>
 </div>
)
}

export default App