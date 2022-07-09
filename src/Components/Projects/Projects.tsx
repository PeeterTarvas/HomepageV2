import React from "react";


const Projects = () => {
    return (
        <div>
            <p className={"p-5 ml-5 text-5xl"}>Projects</p>
            <div className={'p-4 md:p-10 grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-30'}>
            <Project name={"Zombieshooter"}
                     description={"A game that I made with my friends for the first year project while studying CS at TalTech"}
                     path_to_picture={"none"}
                     tech={["Java"]}
            />
            </div>
        </div>
    )

}

interface ProjectInterface {
    name: string,
    description: string,
    path_to_picture: string,
    tech: string[]

}

const Project:React.FC<ProjectInterface> = (props) => {
    return (
        <div className={"p-10"}>
            <div className={"max-w-sm rounded overflow-hidden shadow-lg"}>
                <img className={"w-full"} src="/mountain.jpg" alt="Mountain"/>
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">Mountain</div>
                    <p className="text-gray-700 text-base">
                        {}
                    </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                    {props.tech.forEach((el:string) => {
                        {<div/>}
                    })}
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"></span>
                </div>

            </div>

        </div>
    )

}

export {
    Projects,
    Project
}