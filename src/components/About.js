import {Link} from "react-router-dom";
import Projects from "./Projects";

const About = () => {
    return(
        <div className="relative text-gray-800">
            <header>
                <nav className="w-full">
                    <div className="flex justify-between w-full px-16 py-8">
                        <div>
                            <ul
                                className="flex flex-col text-left md:flex-row space-y-5 md:space-y-0 md:space-x-6 text-xl md:text-2xl">
                                <li className="text-left">
                                   <Link to={'/contact'}>
                                       <button className={'text-blue-500'}>
                                           Contact
                                       </button>
                                   </Link>
                                </li>
                                <li className="text-left">
                                    <a href={"https://drive.google.com/file/d/1dCHstY720GoJRBkKVY2bgqV50Rg3X_3k/view?usp=sharing"} className={'text-red-500'}>
                                        Download Resume
                                    </a>
                                 </li>
                            </ul>
                        </div>
                        <div>
                            <ul className="flex flex-col md:flex-row items-end md:items-center md:space-x-4 space-y-4 md:space-y-0">
                                <li>
                                    <a href="https://www.github.com" target="_blank" aria-label="Github"
                                       className="hover:text-blue-600">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-9 h-9" fill="currentColor"
                                             className="bi bi-github" viewBox="0 0 16 16">
                                            <path
                                                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                                        </svg>
                                    </a>
                                </li>

                                <li>
                                    <a href="https://www.linkedin.com" target="_blank" aria-label="linkedin"
                                       className="hover:text-blue-600">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-9 h-9 rounded-full"
                                             fill="currentColor"
                                             className="bi bi-linkedin" viewBox="0 0 16 16">
                                            <path
                                                d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                                        </svg>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
            <section className="flex flex-col items-center justify-center h-screen  -my-20 md:-mt-48 px-8">
                <div className="flex flex-col items-center justify-center text-center h-screen-half">
                    <img
                        className="md:hidden object-cover w-15 h-40 rounded-full mb-5 ring-2 ring-gray-500/50 ring-offset-[10px]"
                        src="images/moslemparsarad.jpg"
                        alt="Your Name Here"/>
                        <h1 className="text-5xl text-a_red sm:text-6xl lg:text-9xl">Moslem Parsarad</h1>
                        <h2 className="font-light text-a_blue text-4xl sm:text-5xl lg:text-8xl">FUll Stack Developer</h2>
                </div>
            </section>
            <section className="flex items-center justify-between px-8 mb-20 tracking-wider">
                <div className="flex flex-col w-full md:w-1/3 space-y-12 text-center md:text-left">
                    <div className="flex flex-col px-10 md:px-20">
                        <h3 className="text-xl font-bold text-a_purple">Skills</h3>
                        <br/>
                            <span className="text-lg"><span className={'text-a_orange'}>Front-End</span> <span className={'text-indigo-800'}>-></span> 90% (HTML, CSS, TAILWIND, REACT)</span>
                            <span className="text-lg"><span className={'text-a_orange'}>Back-End</span> <span className={'text-indigo-800'}>-></span> 80% (DJANGO, NODE.JS)</span>
                            <span className="text-lg"><span className={'text-a_orange'}>UI & UX</span> <span className={'text-indigo-800'}>-></span> 95 (FIGMA, ADOBE XD)</span>
                    </div>
                    <div className="px-10 md:px-20">
                        <h3 className="text-xl font-bold text-a_purple">Summary</h3>
                        <br/>
                            <p className="w-full md:w-2/3">
                                Hi 👋, My name is Moslem Parsarad from Mashhad/Iran and i'm 13. A Full-Stack Developer & UI&UX Designer as Freelancer.
                            </p>
                    </div>
                    <div className="px-10 md:px-20">
                        <br/>
                            <h3 className="text-xl font-bold text-a_purple">Contact</h3>
                            <a className="text-xl hover:text-blue-600" href="moslemparsarad.dev.mp@gmail.com">moslemparsarad.dev.mp@gmail.com</a>
                    </div>
                </div>
                <img
                    className="hidden md:block object-cover w-1/4 h-screen rounded-full ring-2 ring-gray-500/50 ring-offset-[30px]"
                    src="images/moslemparsarad.jpg" alt="Your Name Here"/>
                    <div className="hidden md:flex flex-col w-1/3 space-y-12 text-right">
                        <div className="px-20">
                            <h4 className="text-xl font-bold text-a_purple">Experience</h4>
                            <br/>
                                <p className="text-6xl">+2</p>
                        </div>
                        <div className="px-20">
                            <h4 className="text-xl font-bold text-a_purple">Projects</h4>
                            <br/>
                                <p className="text-6xl">+2</p>
                        </div>
                        <div className="px-20">
                            <h4 className="text-xl font-bold text-a_purple">Languages</h4>
                            <br/>
                                <p className="text-2xl">English -> 60% (Learning)</p>
                                <p className="text-2xl">Persian -> 100%</p>
                                <p className="text-2xl">Arabic -> 10% (Learning)</p>
                        </div>
                    </div>

            </section>
            <hr className="border-gray-400 mx-44"/>
            <Projects />
            <hr className="border-gray-400 mx-44"/>
            <section className="px-20 mt-10">
                <h4 className="mb-8 text-3xl font-bold text-center md:text-left text-a_purple">Status</h4>
                <div className="grid grid-cols-1 md:grid-cols-6 my-10">
                    <div className="flex flex-col col-span-2 mb-4 md:mb-0">
                        <h5 className="text-xl md:text-2xl  font-bold">Freelance:</h5>
                    </div>
                    <div className="flex flex-col col-span-4 ">
                        <p className="text-green-600 font-bold">
                            Available
                        </p>
                    </div>
                </div>
            </section>
            <div className="h-80">
            </div>
            <footer
                className="p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 ">
                <span className="text-sm text-gray-500 sm:text-center">© 2022 <a href="" className="hover:underline" target="_blank">Moslem Parsarad</a>. All Rights Reserved.</span>
            </footer>
        </div>
    )
}

export default About