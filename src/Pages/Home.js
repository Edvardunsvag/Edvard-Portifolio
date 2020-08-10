import React, { Component } from 'react';
import Hero from '../Components/Hero';
import About from '../Components/About';
import profilePic from '../img/edvard.jpg';
import ProjectContainer from '../Components/ProjectContainer';
import Contact from '../Components/Contact';
import Footer from '../Components/Footer';
export default class Home extends Component {
    render() {
        return (
            <div>
                <Hero></Hero>
                <About img={profilePic}></About>
                <ProjectContainer></ProjectContainer>
                <Contact></Contact>
                <Footer></Footer>
            </div>
        );
    }
}
