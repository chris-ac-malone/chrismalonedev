import CardBasic from "../components/CardBasic";
import Profile from "../assets/Chris Graduation-25.jpg";

const Home = () => {
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
            <div className="bg-header">
                <div className="h-screen w-full table text-center text-4xl font-bold">
                    <h1 className="table-cell w-full text-center align-middle py-10 dark:bg-slate-500 text-3xl md:text-7xl">ChrisMalone.dev<img className="m-auto mt-10 w-40 rounded-full shadow-lg" src={Profile} alt="Chris Malone Web Developer" /></h1>
                </div>
                <div className="relative mt-20">
                    <div id="portfolio-header" className="parallax-text mt-0 pt-0 lg:mt-44 text-7xl sm:text-9xl mix-blend-difference text-gray-100 absolute -top-20 w-screen overflow-hidden">Portfolio</div>
                </div>
                <div className="mx-auto px-3 grid lg:grid-cols-3 xl:grid-cols-3 grid-cols-1 relative container text-neutral-900 dark:text-neutral-50">
                    <div></div>
                    <CardBasic bgImage={require('../assets/vertical-carousel.png')} href="https://codepen.io/Acedoutry/full/YzjQXee" cardTitle="Vertical Carousel" cardInfo="A 3D slot-style vertical carousel. It rotates on scroll and locks into the next item. In progress." />
                    <CardBasic bgImage={require('../assets/cm-3d-card.png')} href="https://codepen.io/Acedoutry/pen/zYaOgRX" cardTitle="CM 3D Card" cardInfo="A 3d Card widget that generates cards on valid divs on the page. These cards use Javascript-driven-CSS to show a 3D effect on hover." />
                    <div className="parallax-text absolute -right-5 -z-10 text-5xl lg:text-7xl max-w-screen-sm overflow-hidden text-gray-300 mt-96 mix-blend-difference">Javascript</div>
                </div>
                <div className="mx-auto px-3 grid lg:grid-cols-2 xl:grid-cols-4 grid-cols-1 container text-neutral-900 dark:text-neutral-50">
                    <CardBasic bgImage={require('../assets/parallax-effect.png')} href="https://codepen.io/Acedoutry/pen/zYaOgRX" cardTitle="Parallax Effect" cardInfo="A 3d Card widget that generates cards on valid divs on the page. These cards use Javascript-driven-CSS to show a 3D effect on hover." />
                </div>
            </div>
        </>
    )
};

export default Home;