import React from "react";

import { CodeIcon } from "@heroicons/react/solid";

class Projects extends React.Component {
    render() {
        return (
            <section id="projects" className="text-gray-400 bg-gray-900 body-font">
                <div className="container px-5 py-10 mx-auto text-center lg:px-40">
                    <div className="flex flex-col w-full mb-20">
                    <CodeIcon className="mx-auto inline-block w-10 mb-4" />
                    <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
                        Apps I've Built
                    </h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
                        facilis repellat ab cupiditate alias vero aliquid obcaecati quisquam
                        fuga dolore.
                    </p>
                    </div>
                    <div className="flex flex-wrap -m-4">
                    {projects.map((project) => (
                        <a
                        href={project.link}
                        key={project.image}
                        className="sm:w-1/2 w-100 p-4">
                        <div className="flex relative">
                            <img
                            alt="gallery"
                            className="absolute inset-0 w-full h-full object-cover object-center"
                            src={project.image}
                            />
                            <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                            <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                                {project.subtitle}
                            </h2>
                            <h1 className="title-font text-lg font-medium text-white mb-3">
                                {project.title}
                            </h1>
                            <p className="leading-relaxed">{project.description}</p>
                            </div>
                        </div>
                        </a>
                    ))}
                    </div>
                </div>
            </section>
        );
    };
}

export default Projects;

export const projects = [
    {
      title: "Salarychecker",
      subtitle: "Java, JavaFX and react",
      description:
        "This app was developed under the course IT1901, Informatics, Project I. The purpose of the app was that employees in commission-based work get the opportunity to check that they have actually received the correct salary from the employer.",
      image: "./project-1.jpg",
      link: "https://github.com/seran-shan/Salarychecker",
    },
    {
      title: "Blackjack",
      subtitle: "Java and JavaFX",
      description:
        "This app was developed under the course TDT4100, Object-oriented programming. This is a simple blackjack game with the option of registering a user. The app also gives the user the opportunity to play the game from where they left off.",
      image: "./project-2.jpg",
      link: "https://github.com/seran-shan/Blackjack",
    },
    {
      title: "Ravenous",
      subtitle: "React",
      description:
        "My first react app. This app is for making searches for restaurants. The userI should be able to view a list of restaurants returned by the Yelp API. The user are able to sort through restaurants using a filter.",
      image: "./project-3.jpg",
      link: "https://github.com/seran-shan/Ravenous",
    },
    {
      title: "Jammming",
      subtitle: "React",
      description:
        "Final project for Codecademy Pro Intensive: \"Build Front-End Web Applications from Scratch\" This app is a alternative client using the Spotify API.",
      image: "./project-4.jpg",
      link: "https://github.com/seran-shan/jammming",
    },
  ];