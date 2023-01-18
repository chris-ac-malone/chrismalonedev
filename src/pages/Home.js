import CardBasic from "../components/CardBasic";
import Profile from "../assets/Chris Graduation-25.jpg";

const Home = () => {
    return (
        <>
            <div className="bg-blue-200/80 dark:bg-slate-500">
                <div className="h-screen w-full table text-center text-4xl font-bold">
                    <h1 className="table-cell w-full text-center align-middle py-10 dark:bg-slate-500 text-7xl">ChrisMalone.dev<img className="m-auto mt-10 w-40 rounded-full shadow-lg" src={Profile} alt="Chris Malone Web Developer" /></h1>
                </div>
                <div className="relative mt-20">
                    <div className="text-9xl mix-blend-difference text-gray-100 absolute -top-20">Portfolio</div>
                </div>
                <div className="mx-auto px-3 grid lg:grid-cols-3 xl:grid-cols-3 grid-cols-1  container text-neutral-900 dark:text-neutral-50">
                    <CardBasic bgImage={require('../assets/cm-3d-card.png')} href="https://codepen.io/Acedoutry/pen/zYaOgRX" cardTitle="CM 3D Card" cardInfo="A 3d Card widget that generates cards on valid divs on the page. These cards use Javascript-driven-CSS to show a 3D effect on hover." />
                    <CardBasic bgImage={require('../assets/vertical-carousel.png')} href="https://codepen.io/Acedoutry/full/YzjQXee" cardTitle="Vertical Carousel" cardInfo="A 3D slot-style vertical carousel. It rotates on scroll and locks into the next item. In progress." />
                    <CardBasic bgImage={require('../assets/cm-3d-card.png')} href="https://codepen.io/Acedoutry/pen/zYaOgRX" cardTitle="CM 3D Card" cardInfo="A 3d Card widget that generates cards on valid divs on the page. These cards use Javascript-driven-CSS to show a 3D effect on hover." />
                </div>
                <div className="mx-auto px-3 grid lg:grid-cols-2 xl:grid-cols-4 grid-cols-1 container text-neutral-900 dark:text-neutral-50">
                    <CardBasic bgImage={require('../assets/cm-3d-card.png')} href="https://codepen.io/Acedoutry/pen/zYaOgRX" cardTitle="CM 3D Card" cardInfo="A 3d Card widget that generates cards on valid divs on the page. These cards use Javascript-driven-CSS to show a 3D effect on hover." />
                    <CardBasic bgImage={require('../assets/vertical-carousel.png')} href="https://codepen.io/Acedoutry/full/YzjQXee" cardTitle="Vertical Carousel" cardInfo="A 3D slot-style vertical carousel. It rotates on scroll and locks into the next item. In progress." />
                    <CardBasic bgImage={require('../assets/vertical-carousel.png')} href="https://codepen.io/Acedoutry/full/YzjQXee" cardTitle="Vertical Carousel" cardInfo="A 3D slot-style vertical carousel. It rotates on scroll and locks into the next item. In progress." />
                    <CardBasic bgImage={require('../assets/vertical-carousel.png')} href="https://codepen.io/Acedoutry/full/YzjQXee" cardTitle="Vertical Carousel" cardInfo="A 3D slot-style vertical carousel. It rotates on scroll and locks into the next item. In progress." />
                </div>
            </div>
        </>
    )
};

export default Home;