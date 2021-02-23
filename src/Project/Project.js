import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Project.css'

export default class Project extends Component {
    render() {
        return (
            <section className='Project' id='project'>
                <h3>Project Section</h3>
                <section className='Barhop'>
                    <Link className='title' to={{ pathname: 'https://barhop.vercel.app/' }} target='_blank'><h4>BarHop</h4></Link>
                    <h5>Github: <Link to={{ pathname:'https://github.com/jmireles12/barhop.git' }} target='_blank'>https://github.com/jmireles12/barhop.git</Link></h5>
                    <p>
                    This app helps you organize your night out in Austin, TX, with your friends by
                     giving you the ability to make a list of bars. We provide a list of bars in 
                     Austin with names and addresses, so you can come back and see what bars 
                     you wanted to visit. After deciding what bars you want to visit, you can 
                     add them to a list.
                    </p>
                    <ul className='used__ul'>Skills used:
                        <li>React</li>
                        <li>Node</li>
                        <li>Redux</li>
                        <li>PostgreSQL</li>
                        <li>Express</li>
                        <li>npm</li>
                        <li>JSX</li>
                        <li>HTML</li>
                        <li>JavaScript</li>
                        <li>Git</li>
                        <li>CSS</li>
                    </ul>
                </section>
                <section className='NewsFeed'>
                    <Link className='title' to={{ pathname: 'https://newsfeed-ecru.vercel.app/' }} target='_blank'><h4>NewsFeed</h4></Link>
                    <h5>Github: <Link to={{ pathname:'https://github.com/jmireles12/NewsFeed.git' }} target='_blank'>https://github.com/jmireles12/NewsFeed.git</Link></h5>
                    <p>
                    NewsFeed is an app where you can add Tabs and display news 
                    containing the name of the Tabs. I created this website to make 
                    searching for news a little bit easier. Instead of having 
                    different tabs in your browser where you could get different 
                    articles or blogs, NewsFeed will only show you news and you can 
                    go back and forward from the Tabs that you created from the 
                    drop-down.
                    </p>
                    <ul className='used__ul'>Skills used:
                        <li>React</li>
                        <li>Node</li>
                        <li>Redux</li>
                        <li>PostgreSQL</li>
                        <li>Express</li>
                        <li>npm</li>
                        <li>JSX</li>
                        <li>HTML</li>
                        <li>JavaScript</li>
                        <li>Git</li>
                        <li>CSS</li>
                    </ul>
                </section>
                <section className='Noteful'>
                    <Link className='title' to={{ pathname: 'https://noteful-client-drab-five.vercel.app/' }} target='_blank'><h4>Noteful</h4></Link>
                    <h5>Github: <Link to={{ pathname:'https://github.com/jmireles12/noteful-client.git' }} target='_blank'>https://github.com/jmireles12/noteful-client.git</Link></h5>
                    <p>
                    Noteful can help users make a list of notes inside of folders. 
                    They can name each folder and inside that folder, they can add
                     notes. For the notes, users can name them and add anything they
                      want for the content of the note.
                    </p>
                    <ul className='used__ul'>Skills used:
                        <li>React</li>
                        <li>Node</li>
                        <li>Redux</li>
                        <li>PostgreSQL</li>
                        <li>Express</li>
                        <li>npm</li>
                        <li>JSX</li>
                        <li>HTML</li>
                        <li>JavaScript</li>
                        <li>Git</li>
                        <li>CSS</li>
                    </ul>
                </section>
            </section>
        )
    }
}