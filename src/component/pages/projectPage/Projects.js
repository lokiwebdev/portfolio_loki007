import React from 'react';
import { Link } from 'react-router-dom';
// import imgTodo from "../assets/todo_list.jpg"
// import imgContact from "../assets/contacts.jpg"
// import imgCalculator from "../assets/calculator.jpg"
// import img from "../assets/webdev.jpg"
import "./projects.css"

import projects from "./Projects-Api"
import Card from "./Card"

const Projects = () => {
    return (
        <>
            <section className='projects'>
                <div className='container'>
                    <div className='heading text-center'>
                        <h4>VISIT MY PROJECTS AND KEEP YOUR FEEDBACK</h4>
                        <h1>My PROJECTS</h1>
                    </div>

                    <div className='content grid'>
                        {projects.map((val, index) => {
                            return <Card key={index} image={val.image} title={val.title} to={val.to} />
                        })}
                    </div>

                </div>
            </section>
        </>
    )
};

export default Projects;
