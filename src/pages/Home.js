import CardBasic from "../components/CardBasic";

const Home = () => {
    return (
        <>
            <div>
                <div className="text-center text-4xl font-bold"><h1 className="py-10">ChrisMalone.dev</h1></div>
                <div className="mx-auto px-3 grid grid-cols-4 container h-screen text-neutral-900 bg-teal-50 dark:bg-slate-500 dark:text-neutral-50">
                    <CardBasic cardTitle="Title" cardInfo="asd" />
                    <CardBasic cardTitle="Title" cardInfo="asd" />
                    <CardBasic cardTitle="Title" cardInfo="asd" />
                    <CardBasic cardTitle="Title" cardInfo="asd" />
                </div>
            </div>
        </>
    )
};

export default Home;