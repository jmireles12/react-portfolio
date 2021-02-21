import React, { Component } from 'react'
import './About.css'

export default class About extends Component {
    render() {
        return (
            <section className='About' id='about'>
                <h3>About Me</h3>
                <p>
                    I've always been the type of person
                    that enjoys building stuff. Building
                    websites and apps are topics that I 
                    have become very interested in. I'm
                    excited to work with people that are
                    going to show me new ideas and expand
                    my creativity.
                </p>
                <p>
                    I enjoy being around people but, at
                    the same time, am an introvert. I
                    sometimes like being in a quiet and
                    peaceful environment where I can work
                    and think about goals or projects. Every
                    day I look at how I can improve as a
                    person and also improve my skills. I
                    make it a personal goal to learn something
                    new every day; for example, learn a new
                    skill, learn a new word, learn an easier
                    way of doing something, etc.
                </p>
                <ul className='skill__ul'>Some services that I offer are:
                    <li className='skill__li'>React</li>
                    <li className='skill__li'>Node</li>
                    <li className='skill__li'>Redux</li>
                    <li className='skill__li'>PostgreSQL</li>
                    <li className='skill__li'>Express</li>
                    <li className='skill__li'>npm</li>
                    <li className='skill__li'>JSX</li>
                    <li className='skill__li'>HTML</li>
                    <li className='skill__li'>JavaScript</li>
                    <li className='skill__li'>Git</li>
                    <li className='skill__li'>CSS</li>
                </ul>
            </section>
        )
    }
}