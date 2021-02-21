import React, { Component } from 'react'
import './Contact.css'

export default class Contact extends Component {
    render() {
        return (
            <footer className='Contact' id='contact'>
                <h4 className='contact-title'>Contact Section:</h4>
                <section className='links'>
                    <p className='email'>Email: <a target='_blank' rel='noreferrer' href='mailto:jmireles12@gmail.com'>jmireles12@gmail.com</a></p>
                    <p className='github'>GitHub: <a target="_blank" rel='noreferrer' href='https://github.com/jmireles12'>jmireles12</a></p>
                    <p className='linkedin'>LinkedIn: <a target="_blank" rel='noreferrer' href='https://www.linkedin.com/in/juan-mireles-020a091a8/'>LinkedIn</a></p>
                </section>
            </footer>
        )
    }
}