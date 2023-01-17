import CardBasic from "../components/CardBasic";
import ProjectCard from "../components/ProjectCard";

const Home = () => {
    return (
        <>
            <div className="h-screen text-neutral-900 bg-teal-50 dark:bg-slate-500 dark:text-neutral-50">
                <div className="text-center text-4xl font-bold"><h1 className="py-10">ChrisMalone.dev</h1></div>
                <CardBasic cardTitle="Title" cardInfo="asd" />
            </div>
        </>
    )
};

export default Home;