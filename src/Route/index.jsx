import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomeContainer from '../Container/Home'
import AboutContainer from '../Container/About'
import MoviesContainer from '../Container/Movies'
import SearchContainer from '../Container/Search'
import TvSeriesContainer from '../Container/TVSeries'
import DetailsContainer from '../Container/Details'
import ContactContainer from '../Container/Contact'
import HeaderComponents from '../Components/Header'
import FooterComponents from '../Components/Footer'

const RouterComponent = () => {
  return (
    <>
        <BrowserRouter>
        <HeaderComponents/>
        <Routes>
            <Route path="/" element={<HomeContainer/>}/>
            <Route path="/about" element={<AboutContainer/>}/>
            <Route path="/movies" element={<MoviesContainer/>}/>
            <Route path="/series" element={<TvSeriesContainer/>}/>
            <Route path="/search" element={<SearchContainer/>}/>
            <Route path="/contact" element={<ContactContainer/>}/>
            <Route path="/details/:movieid/:mediatype" element={<DetailsContainer/>}/>
        </Routes>
        <FooterComponents/>
        </BrowserRouter>
    </>
  )
}

export default  RouterComponent

