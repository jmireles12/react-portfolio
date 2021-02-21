import React, { Component } from 'react'
import { Link } from 'react-scroll'
import './Nav.css'

export default class Nav extends Component {
    render() {
        return (
            <section className='Nav'>
                <h1 className='header'>
                    <Link className='title' to='/'>Juan Mireles</Link>
                </h1>
                <section className='links'>
                    <Link
                        activeClass='active'
                        to='about'
                        spy={true}
                        smooth={true}
                        duration={500}
                    >
                        About
                    </Link>
                    <Link
                        activeClass='active'
                        to='project'
                        spy={true}
                        smooth={true}
                        duration={500}
                    >
                        Projects
                    </Link>
                    <Link
                        activeClass='active'
                        to='contact'
                        spy={true}
                        smooth={true}
                        duration={500}
                    >
                        Contact
                    </Link>
                </section>
            </section>
        )
    }
}