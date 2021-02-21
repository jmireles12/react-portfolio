import React, { Component } from 'react';
import Welcome from '../Welcome/Welcome'
import About from '../About/About'
import Project from '../Project/Project'

export default class Home extends Component {
    render() {
        return (
            <section className='Home'>
                <Welcome />
                <About />
                <Project />
            </section>
        )
    }
}