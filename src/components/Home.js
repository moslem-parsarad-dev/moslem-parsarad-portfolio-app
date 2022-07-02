import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div id={"home"} className={"text-center w-[100%] h-[100vh] flex flex-col justify-center items-center"}>
            <p className={'text-8xl text-[#333]'}>Hi 👋.</p>
            <h1 className={'text-a_blue font-black text-8xl'}><span className={"text-a_red"}>I'm</span> Moslem Parsarad :)</h1>
            <p className={"text-a_aqua text-4xl"}>A FullStack Developer, Always Learning 🔥.</p>
            <Link className={"mt-[1rem]"} to={"/about"}>
                <button
                   className="bg-indigo-500 hover:bg-indigo-400 border-b-4 border-indigo-700 hover:border-indigo-500 text-white text-white text-center py-2 px-4 rounded">
                    About
                </button>
            </Link>
        </div>
    )
}

export default Home;