import CardBasic from "../components/CardBasic";

const Home = () => {
    return (
        <>
            <div className="bg-teal-50 h-screen dark:bg-slate-500">
                <div className="text-center text-4xl font-bold"><h1 className="py-10 bg-teal-50 dark:bg-slate-500">ChrisMalone.dev</h1></div>
                <div className="mx-auto px-3 grid md:grid-cols-4 grid-cols-1 container text-neutral-900 dark:text-neutral-50">
                    <CardBasic cardTitle="CM 3D Card" cardInfo="A 3d Card widget that generates cards on valid divs on the page. These cards use Javascript-driven-CSS to show a 3D effect on hover." />
                    <CardBasic cardTitle="Title" cardInfo="asd" />
                    <CardBasic cardTitle="Title" cardInfo="asd" />
                    <CardBasic cardTitle="Title" cardInfo="asd" />
                </div>
            </div>
        </>
    )
};

export default Home;