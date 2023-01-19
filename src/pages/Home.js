import CardBasic from "../components/CardBasic";
import Profile from "../assets/Chris Graduation-25.jpg";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
    const [darkMode, setDarkMode] = useState(false);
    const parallaxText = document.getElementsByClassName("parallax-text");
    function parallax() {
        for (let i = 0; i < parallaxText.length; i++) {
            const element = parallaxText[i];
            element.style.transform = "translateY(" + -element.getBoundingClientRect().top / 3.5 + "px)";
        }
    }
    window.onscroll = () => {
        parallax();
    }
    return (
        <>
            <div id="home-head" className={`bg-header overflow-hidden ${darkMode ? "dark" : ""}`}>
                <button className="fixed left-3 top-1 text-2xl dark:text-yellow-300 text-slate-800" onClick={() => setDarkMode(!darkMode)}> <FontAwesomeIcon icon={faMoon} /> </button>
                <div className="h-screen w-full table text-center text-4xl font-bold animate-fade-in">
                    <h1 className="table-cell w-full text-center align-middle py-10 dark:bg-slate-800 dark:text-white text-3xl md:text-7xl">Chris Malone<img className="m-auto mt-10 w-40 rounded-full shadow-lg" src={Profile} alt="Chris Malone Web Developer" />
                        <div className="flex max-w-xs m-auto pt-4 gap-20">
                            <a href="https://www.linkedin.com/in/christopher-malone-898ba9161/" className="flex-1 animate-slide-in"><img className="dark:invert shadow-md cursor-pointer hover:scale-105 transition-transform rounded-full" src="https://cdn-icons-png.flaticon.com/512/1384/1384014.png" alt="" /></a>
                            <a href="https://github.com/chris-ac-malone" className="flex-1 pt-8 animate-slide-in-delay-200"><img className="dark:invert shadow-md cursor-pointer hover:scale-105 transition-transform rounded-full" src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="" /></a>
                            <a href="https://codepen.io/Acedoutry" className="flex-1 animate-slide-in-delay-400"><img className="dark:invert shadow-md cursor-pointer hover:scale-105 transition-transform rounded-full" src={require("../assets/codepen.png")} alt="" /></a>
                        </div></h1>
                </div>
                <div className="relative mt-20">
                    <div id="portfolio-header" className="parallax-text mt-0 pt-0 lg:mt-44 text-7xl sm:text-9xl mix-blend-difference text-gray-100 absolute w-screen overflow-hidden">Portfolio</div>
                </div>
                <div className="mx-auto px-3 grid lg:grid-cols-3 xl:grid-cols-3 grid-cols-1 relative container text-neutral-900 dark:text-neutral-50">
                    <div></div>
                    <CardBasic bgImage={require('../assets/vertical-carousel.png')} href="https://codepen.io/Acedoutry/full/YzjQXee" cardTitle="Vertical Carousel" cardInfo="A 3D slot-style vertical carousel. It rotates on scroll and locks into the next item. In progress." />
                    <CardBasic bgImage={require('../assets/cm-3d-card.png')} href="https://codepen.io/Acedoutry/pen/zYaOgRX" cardTitle="CM 3D Card" cardInfo="A 3d Card widget that generates cards on valid divs on the page. These cards use Javascript-driven-CSS to show a 3D effect on hover." />
                    <div className="parallax-text absolute -right-5 z-0 mix-blend-difference text-5xl lg:text-7xl max-w-screen-sm overflow-hidden mt-96">Javascript</div>
                </div>
                <div className="mx-auto px-3 grid lg:grid-cols-2 xl:grid-cols-4 grid-cols-1 container text-neutral-900 dark:text-neutral-50">
                    <CardBasic bgImage={require('../assets/parallax-effect.png')} href="https://codepen.io/Acedoutry/pen/PoBOKxq" cardTitle="True Parallax" cardInfo="A True Parallax effect in Javascript" />
                </div>
            </div>
        </>
    )
};

export default Home;