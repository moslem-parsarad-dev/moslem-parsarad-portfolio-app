import { useState } from "react";

const Projects = () => {
    const [project, setProject] = useState([
        {
            id: "1",
            title: "Build Electron App (Jabeh Abzar)",
            date: "October 2021",
            description: "A electron.js application  that is suitable for everybody.It has the capabilities that a person everytimes needs",
            subtitle: "Jahbeh Abzar:",
            imageSource: "images/jabeh-abzar.jpg",
            imageAlt: "moslem parsarad|jabeh-abzar.jpg",
            classProjectActive: ""
        },
        {
            id: "1",
            title: "Build Web Application Using React (book-search-app)",
            date: "May 2022",
            description: "You search for a specific subject and we will bring you the best results",
            subtitle: "book-search-app",
            imageSource: "images/developing.jpg ",
            imageAlt: "moslem parsarad|book-search-book",
            classProjectActive: "backdrop-blur-sm bg-[#DCDCDC3D]"
        },
    ])


    return (
        <div>
            <section className='px-20 mt-10'>
                <h4 className="mb-8 text-3xl font-bold text-center md:text-left text-a_purple">Experience</h4>
                {project.map((item, index) => <div  key={index} className={`grid grid-cols-1 md:grid-cols-6 my-10 p-3 ${item.classProjectActive}`}>
                    <div className="flex flex-col col-span-2 mb-4 md:mb-0">
                        <h5 className="text-xl md:text-2xl font-bold text-a_aqua">{item.title}</h5>
                        <p>{item.date}</p>
                    </div>
                    <div className="flex flex-col col-span-4">
                        <p>{item.description}</p>
                        <p>{item.subtitle}</p>
                        <img src={item.imageSource} className={"mt-5 object-cover rounded mb-5 ring-2 ring-gray-500/50 ring-offset-[10px]"} alt={item.imageAlt}/>
                    </div>
                </div>
                    )}
            </section>
        </div>
    )
}

export default Projects