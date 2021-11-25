import Announcement from "../components/Announcement";
import React from 'react'
import Navbar from '../components/Navbar'
import Slider from "../components/Slider"
import Categories from "../components/Categories";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const Home = () => {
    return (
        <div>
            <Announcement/>
            <Navbar/>
            <Categories/>
            <Slider/>
            <Products/>
            <Newsletter/>
            <Footer/>
        </div>
    )
}

export default Home

