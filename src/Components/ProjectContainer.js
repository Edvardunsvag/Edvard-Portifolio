import React, { useEffect, useState } from 'react';
import Project from './Project';

import data from '../data';
export default function ProjectContainer() {
    const [filterItems, setFilterItems] = useState({
        react: false,
        plainJavascript: false,
    });

    const [sortedProjects, setSortedProjects] = useState(data);

    const [projects, setProjects] = useState(data);

    const handleChange = (event) => {
        let value =
            event.target.type === 'checkbox'
                ? event.target.checked
                : event.target.value;
        let name = event.target.name;

        setFilterItems({ ...filterItems, [name]: value });
    };

    useEffect(() => {
        let tempItems = projects;
        setProjects(tempItems);

        // <!-- React -->

        if (filterItems.react) {
            tempItems = tempItems.filter((item) => {
                return item.fields.react === true;
            });
        }

        if (filterItems.plainJavascript) {
            tempItems = tempItems.filter((item) => {
                return item.fields.plainJavascript === true;
            });
        }
        setSortedProjects(tempItems);
    }, [filterItems, projects]);

    return (
        <section id='work-a' className='text-center'>
            <div className='container'>
                <h2 className='section-title'>My Work</h2>
                <div className='bottom-line'></div>
                <p className='lead'>Filter By Language/Framework</p>
                <div className='form-group lead'>
                    <label htmlFor=''>React</label>
                    <input
                        className='form-control'
                        type='checkBox'
                        name='react'
                        onChange={handleChange}
                        id='React'></input>
                    <label htmlFor=''>Plain Javascript</label>
                    <input
                        className='form-control'
                        type='checkBox'
                        name='plainJavascript'
                        onChange={handleChange}
                        id='plainJavascript'></input>
                </div>

                <div className='items'>
                    {sortedProjects.map((item, index) => {
                        return (
                            <Project
                                description={item.fields.description}
                                key={index}
                                img={item.fields.img}
                                src={item.fields.src}
                                name={item.fields.name}
                                gitHub={item.fields.gitHub}></Project>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
